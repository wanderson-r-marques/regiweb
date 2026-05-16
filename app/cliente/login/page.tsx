'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { motion } from 'framer-motion'
import { Shield, Mail, Lock, ArrowLeft, KeyRound } from 'lucide-react'

export default function ClienteLoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const supabase = createClient()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (authError) {
        setError(authError.message)
        setLoading(false)
        return
      }

      if (data.user) {
        window.location.href = '/cliente/dashboard'
      }
    } catch (err) {
      setError('Erro de conexão')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-bg-primary">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand/20 via-bg-primary to-bg-primary" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md mx-4"
      >
        <div className="backdrop-blur-xl bg-bg-card/50 border border-border rounded-2xl p-8 shadow-2xl">
          <Link
            href="/"
            className="flex items-center gap-2 text-text-secondary hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm">Voltar para o site</span>
          </Link>

          <div className="flex flex-col items-center mb-8">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand to-green flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg shadow-brand/20">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <span className="text-3xl font-heading font-bold text-white">
                Regi<span className="text-brand">web</span>
              </span>
            </Link>
            
            <h1 className="text-2xl font-bold text-white mb-2">Área do Cliente</h1>
            <p className="text-text-secondary text-center">Faça login para gerenciar suas marcas</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-bg-primary/50 border border-border rounded-xl text-white placeholder:text-text-secondary/50 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand/50 transition-all"
                placeholder="Seu email"
                required
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-bg-primary/50 border border-border rounded-xl text-white placeholder:text-text-secondary/50 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand/50 transition-all"
                placeholder="Sua senha"
                required
              />
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm"
              >
                {error}
              </motion.div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-brand to-green text-white font-semibold rounded-xl hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-brand/25"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Entrando...
                </span>
              ) : (
                'Entrar'
              )}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-border text-center">
            <Link
              href="/contato"
              className="flex items-center justify-center gap-2 text-text-secondary hover:text-brand transition-colors text-sm"
            >
              <KeyRound className="w-4 h-4" />
              <span>Esqueceu sua senha?</span>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  )
}