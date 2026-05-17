'use client'

import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Shield, LogOut, Users, Plus, X, Mail, Phone, User, Search, Edit2, Trash2 } from 'lucide-react'

interface User {
  email: string
  id: string
}

interface Cliente {
  id: string
  nome: string
  email: string
  telefone: string
  cpf_cnpj: string
  created_at: string
}

export default function AdminClientesPage() {
  const router = useRouter()
  const supabase = createClient()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [clientes, setClientes] = useState<Cliente[]>([])
  const [showForm, setShowForm] = useState(false)
  const [editingCliente, setEditingCliente] = useState<Cliente | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [formLoading, setFormLoading] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)
  const [formSuccess, setFormSuccess] = useState<string | null>(null)

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    cpf_cnpj: ''
  })

  const fetchClientes = async () => {
    const { data, error } = await supabase
      .from('clientes')
      .select('*')
      .order('created_at', { ascending: false })

    if (!error && data) {
      setClientes(data)
    }
  }

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        router.push('/admin/login')
      } else {
        setUser(user as User)
        setLoading(false)
      }
    }
    checkUser()
  }, [supabase, router])

  useEffect(() => {
    if (!loading) {
      fetchClientes()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    window.location.href = '/admin/login'
  }

  const resetForm = () => {
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      cpf_cnpj: ''
    })
    setFormError(null)
    setFormSuccess(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormLoading(true)
    setFormError(null)
    setFormSuccess(null)

    try {
      if (editingCliente) {
        const { error } = await supabase
          .from('clientes')
          .update({
            nome: formData.nome,
            email: formData.email,
            telefone: formData.telefone,
            cpf_cnpj: formData.cpf_cnpj
          })
          .eq('id', editingCliente.id)

        if (error) throw error
        setFormSuccess('Cliente atualizado com sucesso!')
      } else {
        const { error } = await supabase
          .from('clientes')
          .insert({
            nome: formData.nome,
            email: formData.email,
            telefone: formData.telefone,
            cpf_cnpj: formData.cpf_cnpj
          })

        if (error) throw error
        setFormSuccess('Cliente cadastrado com sucesso!')
      }

      resetForm()
      setShowForm(false)
      setEditingCliente(null)
      fetchClientes()
    } catch (err: any) {
      setFormError(err.message || 'Erro ao salvar cliente')
    } finally {
      setFormLoading(false)
    }
  }

  const handleEdit = (cliente: Cliente) => {
    setEditingCliente(cliente)
    setFormData({
      nome: cliente.nome,
      email: cliente.email,
      telefone: cliente.telefone || '',
      cpf_cnpj: cliente.cpf_cnpj || ''
    })
    setShowForm(true)
  }

  const handleDelete = async (id: string) => {
    if (confirm('Tem certeza que deseja excluir este cliente?')) {
      const { error } = await supabase.from('clientes').delete().eq('id', id)
      if (!error) {
        fetchClientes()
      }
    }
  }

  const filteredClientes = clientes.filter(cliente =>
    cliente.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cliente.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg-primary">
        <div className="w-8 h-8 border-2 border-brand border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-bg-primary">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand/10 via-bg-primary to-bg-primary" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="backdrop-blur-xl bg-bg-card/30 border border-border rounded-2xl p-6 mb-8 z-50 relative"
        >
          <div className="flex flex-row items-center justify-between gap-2 sm:gap-4">
            <div className="flex items-center gap-3">
              <Link href="/admin/dashboard" className="flex items-center gap-3 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-brand to-green flex items-center justify-center shadow-lg shadow-brand/20">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
              </Link>
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-white">Clientes</h1>
                <p className="text-xs sm:text-sm text-text-secondary hidden sm:block">
                  {clientes.length} cadastrado{clientes.length !== 1 ? 's' : ''}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 relative z-[100]">
              <button
                onClick={() => { resetForm(); setShowForm(true); setEditingCliente(null); }}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-brand to-green rounded-xl text-white text-sm font-medium hover:opacity-90 transition-all"
              >
                <Plus className="w-4 h-4" />
                Novo Cliente
              </button>
              <div className="relative">
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="flex items-center gap-2 px-4 py-2 bg-bg-primary/50 border border-border rounded-xl text-text-secondary hover:text-white hover:border-brand/50 transition-all"
                >
                  <span className="text-sm">Menu</span>
                </button>
                {menuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-bg-card border border-border rounded-lg shadow-lg overflow-hidden z-[100]">
                    <a href="/admin/clientes" className="block px-4 py-2 text-white hover:bg-border/50 transition-colors">
                      Cadastrar Cliente
                    </a>
                    <a href="/admin/empresas/novo" className="block px-4 py-2 text-white hover:bg-border/50 transition-colors">
                      Cadastrar Empresa
                    </a>
                    <a href="/admin/marcas/novo" className="block px-4 py-2 text-white hover:bg-border/50 transition-colors">
                      Cadastrar Marca
                    </a>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-red-400 hover:bg-border/50 transition-colors"
                    >
                      Sair
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="backdrop-blur-xl bg-bg-card/30 border border-border rounded-2xl p-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar por nome ou email..."
                className="w-full pl-12 pr-4 py-3 bg-bg-primary/50 border border-border rounded-xl text-white placeholder:text-text-secondary/50 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand/50 transition-all"
              />
            </div>
          </div>

          {filteredClientes.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16">
              <div className="w-20 h-20 rounded-full bg-brand/10 flex items-center justify-center mb-6">
                <Users className="w-10 h-10 text-brand" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {searchTerm ? 'Nenhum cliente encontrado' : 'Nenhum cliente cadastrado'}
              </h3>
              <p className="text-text-secondary text-center mb-6 max-w-sm">
                {searchTerm ? 'Tente buscar com outros termos' : 'Comece cadastrando seu primeiro cliente'}
              </p>
              {!searchTerm && (
                <button
                  onClick={() => { resetForm(); setShowForm(true); }}
                  className="flex items-center gap-2 px-6 py-3 bg-brand rounded-xl text-white font-medium hover:opacity-90 transition-all"
                >
                  <Plus className="w-5 h-5" />
                  Cadastrar Cliente
                </button>
              )}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 text-sm font-medium text-text-secondary">Cliente</th>
                    <th className="text-left py-4 px-4 text-sm font-medium text-text-secondary hidden md:table-cell">Contato</th>
                    <th className="text-left py-4 px-4 text-sm font-medium text-text-secondary hidden lg:table-cell">CPF/CNPJ</th>
                    <th className="text-left py-4 px-4 text-sm font-medium text-text-secondary hidden sm:table-cell">Cadastro</th>
                    <th className="text-right py-4 px-4 text-sm font-medium text-text-secondary">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredClientes.map((cliente, index) => (
                    <motion.tr
                      key={cliente.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="border-b border-border/50 hover:bg-white/5 transition-colors"
                    >
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand/20 to-green/20 flex items-center justify-center">
                            <span className="text-sm font-semibold text-brand">
                              {cliente.nome.charAt(0).toUpperCase()}
                            </span>
                          </div>
                          <div>
                            <p className="font-medium text-white">{cliente.nome}</p>
                            <p className="text-sm text-text-secondary">{cliente.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 hidden md:table-cell">
                        <p className="text-text-secondary text-sm">{cliente.telefone || '-'}</p>
                      </td>
                      <td className="py-4 px-4 hidden lg:table-cell">
                        <p className="text-text-secondary text-sm">{cliente.cpf_cnpj || '-'}</p>
                      </td>
                      <td className="py-4 px-4 hidden sm:table-cell">
                        <p className="text-text-secondary text-sm">
                          {new Date(cliente.created_at).toLocaleDateString('pt-BR')}
                        </p>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleEdit(cliente)}
                            className="p-2 rounded-lg bg-brand/10 text-brand hover:bg-brand/20 transition-colors"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(cliente.id)}
                            className="p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </motion.div>
      </div>

      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setShowForm(false)}
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative z-10 w-full max-w-lg backdrop-blur-xl bg-bg-card/90 border border-border rounded-2xl p-6 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">
                  {editingCliente ? 'Editar Cliente' : 'Novo Cliente'}
                </h2>
                <button
                  onClick={() => setShowForm(false)}
                  className="p-2 rounded-lg text-text-secondary hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-text-secondary mb-2">Nome Completo</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
                      <input
                        type="text"
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 bg-bg-primary/50 border border-border rounded-xl text-white placeholder:text-text-secondary/50 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand/50 transition-all"
                        placeholder="João Silva"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-text-secondary mb-2">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 bg-bg-primary/50 border border-border rounded-xl text-white placeholder:text-text-secondary/50 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand/50 transition-all"
                        placeholder="joao@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">Telefone</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
                      <input
                        type="tel"
                        value={formData.telefone}
                        onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 bg-bg-primary/50 border border-border rounded-xl text-white placeholder:text-text-secondary/50 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand/50 transition-all"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">CPF / CNPJ</label>
                    <input
                      type="text"
                      value={formData.cpf_cnpj}
                      onChange={(e) => setFormData({ ...formData, cpf_cnpj: e.target.value })}
                      className="w-full px-4 py-3 bg-bg-primary/50 border border-border rounded-xl text-white placeholder:text-text-secondary/50 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand/50 transition-all"
                      placeholder="000.000.000-00 ou 00.000.000/0001-00"
                    />
                  </div>
                </div>

                {formError && (
                  <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm">
                    {formError}
                  </div>
                )}

                {formSuccess && (
                  <div className="p-4 bg-green/10 border border-green/30 rounded-xl text-green text-sm">
                    {formSuccess}
                  </div>
                )}

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="flex-1 py-3 bg-bg-primary/50 border border-border rounded-xl text-white font-medium hover:bg-white/5 transition-colors"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    disabled={formLoading}
                    className="flex-1 py-3 bg-gradient-to-r from-brand to-green text-white font-medium rounded-xl hover:opacity-90 disabled:opacity-50 transition-all"
                  >
                    {formLoading ? 'Salvando...' : editingCliente ? 'Atualizar' : 'Cadastrar'}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}