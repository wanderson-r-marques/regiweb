'use client'

import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Shield, LogOut, Users, FileText, Clock, TrendingUp, Plus, Settings, BarChart3 } from 'lucide-react'

interface User {
  email: string
  id: string
}

export default function AdminDashboardPage() {
  const router = useRouter()
  const supabase = createClient()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

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

  const handleLogout = async () => {
    await supabase.auth.signOut()
    window.location.href = '/admin/login'
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg-primary">
        <div className="w-8 h-8 border-2 border-brand border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  const stats = [
    { label: 'Total de Clientes', value: '0', icon: Users, color: 'brand', trend: '+0%' },
    { label: 'Marcas Registradas', value: '0', icon: FileText, color: 'green', trend: '+0%' },
    { label: 'Em Andamento', value: '0', icon: Clock, color: 'yellow', trend: '+0%' },
  ]

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
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-brand to-green flex items-center justify-center shadow-lg shadow-brand/20">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-white">Admin</h1>
                <p className="text-xs sm:text-sm text-text-secondary hidden sm:block">
                  Bem-vindo!
                </p>
              </div>
            </div>

            <div className="relative z-[100]">
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
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="backdrop-blur-xl bg-bg-card/30 border border-border rounded-2xl p-6"
            >
              <div className="flex items-center justify-between">
                <div className={`w-12 h-12 rounded-xl bg-${stat.color}/10 flex items-center justify-center`}>
                  <stat.icon className={`w-6 h-6 text-${stat.color}`} />
                </div>
                <span className="flex items-center gap-1 text-xs font-medium text-green">
                  <TrendingUp className="w-3 h-3" />
                  {stat.trend}
                </span>
              </div>
              <p className="text-3xl font-bold text-white mt-4">{stat.value}</p>
              <p className="text-text-secondary text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="backdrop-blur-xl bg-bg-card/30 border border-border rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-white">Ações Rápidas</h2>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Link
                  href="/admin/clientes"
                  className="flex flex-col items-center gap-3 p-4 bg-bg-primary/50 rounded-xl text-text-secondary hover:text-white hover:bg-bg-primary transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center group-hover:bg-brand/20 transition-colors">
                    <Users className="w-6 h-6 text-brand" />
                  </div>
                  <span className="text-sm text-center">Gerenciar Clientes</span>
                </Link>
                <Link
                  href="/admin/marcas"
                  className="flex flex-col items-center gap-3 p-4 bg-bg-primary/50 rounded-xl text-text-secondary hover:text-white hover:bg-bg-primary transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-green/10 flex items-center justify-center group-hover:bg-green/20 transition-colors">
                    <FileText className="w-6 h-6 text-green" />
                  </div>
                  <span className="text-sm text-center">Gerenciar Marcas</span>
                </Link>
                <button className="flex flex-col items-center gap-3 p-4 bg-bg-primary/50 rounded-xl text-text-secondary hover:text-white hover:bg-bg-primary transition-all group">
                  <div className="w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center group-hover:bg-yellow-500/20 transition-colors">
                    <Plus className="w-6 h-6 text-yellow-500" />
                  </div>
                  <span className="text-sm text-center">Nova Solicitação</span>
                </button>
                <Link
                  href="/admin/configuracoes"
                  className="flex flex-col items-center gap-3 p-4 bg-bg-primary/50 rounded-xl text-text-secondary hover:text-white hover:bg-bg-primary transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                    <Settings className="w-6 h-6 text-purple-500" />
                  </div>
                  <span className="text-sm text-center">Configurações</span>
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="backdrop-blur-xl bg-bg-card/30 border border-border rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-white">Atividade Recente</h2>
                <BarChart3 className="w-5 h-5 text-text-secondary" />
              </div>
              <div className="flex flex-col items-center justify-center py-12">
                <div className="w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center mb-4">
                  <Clock className="w-8 h-8 text-brand" />
                </div>
                <p className="text-text-secondary text-center">
                  Nenhuma atividade recente
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}