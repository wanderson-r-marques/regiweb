'use client'

import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function ClienteDashboardPage() {
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        router.push('/cliente/login')
      }
    }
    checkUser()
  }, [supabase, router])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    window.location.href = '/cliente/login'
  }

  return (
    <div className="min-h-screen bg-bg-primary p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-white">Minhas Marcas</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-bg-card border border-border rounded-lg text-white"
          >
            Sair
          </button>
        </div>

        <div className="bg-bg-card border border-border rounded-xl p-8 text-center">
          <p className="text-text-secondary">Nenhuma marca cadastrada</p>
        </div>
      </div>
    </div>
  )
}