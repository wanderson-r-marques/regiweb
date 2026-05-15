'use client'

import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function AdminDashboardPage() {
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        router.push('/admin/login')
      }
    }
    checkUser()
  }, [supabase, router])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    window.location.href = '/admin/login'
  }

  return (
    <div className="min-h-screen bg-bg-primary p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-white">Dashboard Admin</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-bg-card border border-border rounded-lg text-white"
          >
            Sair
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-bg-card border border-border rounded-xl p-6">
            <p className="text-text-secondary text-sm">Total de Clientes</p>
            <p className="text-3xl font-bold text-white mt-2">0</p>
          </div>

          <div className="bg-bg-card border border-border rounded-xl p-6">
            <p className="text-text-secondary text-sm">Marcas Registradas</p>
            <p className="text-3xl font-bold text-white mt-2">0</p>
          </div>

          <div className="bg-bg-card border border-border rounded-xl p-6">
            <p className="text-text-secondary text-sm">Em Andamento</p>
            <p className="text-3xl font-bold text-white mt-2">0</p>
          </div>
        </div>
      </div>
    </div>
  )
}