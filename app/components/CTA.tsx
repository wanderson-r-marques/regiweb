'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="py-24 bg-bg-card relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/20 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: shouldReduceMotion ? 0.1 : 0.6, ease: 'easeOut' }}
          className="text-center"
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            Pronto para <span className="text-gradient">proteger</span> sua marca?
          </h2>
          <p className="text-xl text-text-secondary mb-6 max-w-2xl mx-auto">
            Não deixe sua marca vulnerável. Comece hoje mesmo seu processo de registro 
            e durma tranquilo sabendo que está protegido.
          </p>
          <p className="text-green font-medium mb-10 max-w-2xl mx-auto">
            ✓ Menor investimento do mercado | ✓ Sem mensalidade | ✓ Sem taxas ocultas | ✓ COBRIMOS ORÇAMENTOS
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contato" className="btn-primary inline-flex items-center justify-center gap-2 text-lg px-8 py-4">
              Começar Agora
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/pesquisar-marca" className="btn-secondary inline-flex text-lg px-8 py-4">
              Verificar Disponibilidade
            </Link>
          </div>

          <p className="mt-6 text-text-muted text-sm">
            Primeira análise gratuita. Sem compromisso.
          </p>
        </motion.div>
      </div>
    </section>
  )
}