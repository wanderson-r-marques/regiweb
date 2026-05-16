'use client'

import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Shield, LogOut, Plus, Search, FileText, Settings } from 'lucide-react'

interface User {
  email: string
  id: string
}

export default function ClienteDashboardPage() {
  const router = useRouter()
  const supabase = createClient()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        router.push('/cliente/login')
      } else {
        setUser(user as User)
        setLoading(false)
      }
    }
    checkUser()
  }, [supabase, router])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    window.location.href = '/cliente/login'
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg-primary">
        <div className="w-8 h-8 border-2 border-brand border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  const getFirstName = (email: string) => {
    const name = email.split('@')[0]
    return name.charAt(0).toUpperCase() + name.slice(1)
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
          className="backdrop-blur-xl bg-bg-card/30 border border-border rounded-2xl p-6 mb-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand to-green flex items-center justify-center shadow-lg shadow-brand/20">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-heading font-bold text-white">
                  Regi<span className="text-brand">web</span>
                </span>
              </Link>
              <div className="hidden sm:block w-px h-10 bg-border" />
              <div>
                <h1 className="text-xl font-bold text-white">Dashboard</h1>
                <p className="text-sm text-text-secondary">
                  Olá, {user ? getFirstName(user.email) : 'Cliente'}!
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/pesquisar-marca"
                className="flex items-center gap-2 px-4 py-2 bg-bg-primary/50 border border-border rounded-xl text-text-secondary hover:text-white hover:border-brand/50 transition-all"
              >
                <Search className="w-4 h-4" />
                <span className="text-sm">Nova Pesquisa</span>
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 hover:bg-red-500/20 hover:border-red-500/50 transition-all"
              >
                <LogOut className="w-4 h-4" />
                <span className="text-sm">Sair</span>
              </button>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="col-span-1 md:col-span-2 lg:col-span-2"
          >
            <div className="backdrop-blur-xl bg-bg-card/30 border border-border rounded-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-white">Minhas Marcas</h2>
                <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-brand to-green rounded-xl text-white text-sm font-medium hover:opacity-90 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-brand/20">
                  <Plus className="w-4 h-4" />
                  Nova Marca
                </button>
              </div>

              <div className="flex flex-col items-center justify-center py-16">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand/20 to-green/20 flex items-center justify-center mb-6">
                  <FileText className="w-10 h-10 text-brand" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Nenhuma marca cadastrada</h3>
                <p className="text-text-secondary text-center mb-6 max-w-sm">
                  Você ainda não possui marcas cadastradas. Comece agora mesmo!
                </p>
                <button className="flex items-center gap-2 px-6 py-3 bg-brand rounded-xl text-white font-medium hover:opacity-90 transition-all">
                  <Plus className="w-5 h-5" />
                  Cadastrar Primeira Marca
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="backdrop-blur-xl bg-bg-card/30 border border-border rounded-2xl p-6">
              <h2 className="text-lg font-semibold text-white mb-4">Ações Rápidas</h2>
              <div className="space-y-3">
                <Link
                  href="/pesquisar-marca"
                  className="flex items-center gap-3 p-3 bg-bg-primary/50 rounded-xl text-text-secondary hover:text-white hover:bg-bg-primary transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center group-hover:bg-brand/20 transition-colors">
                    <Search className="w-5 h-5 text-brand" />
                  </div>
                  <span className="text-sm">Pesquisar Marca</span>
                </Link>
                <Link
                  href="/contato"
                  className="flex items-center gap-3 p-3 bg-bg-primary/50 rounded-xl text-text-secondary hover:text-white hover:bg-bg-primary transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-green/10 flex items-center justify-center group-hover:bg-green/20 transition-colors">
                    <Settings className="w-5 h-5 text-green" />
                  </div>
                  <span className="text-sm">Falar com Suporte</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}