'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ArrowRight, Shield, CheckCircle, Clock, Star } from 'lucide-react'

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 50)
    return () => clearTimeout(timer)
  }, [])

  const floatingElements = [
    { delay: 0, x: '10%', y: '20%' },
    { delay: 1, x: '85%', y: '30%' },
    { delay: 2, x: '15%', y: '70%' },
    { delay: 1.5, x: '80%', y: '75%' },
  ]

  const animationDuration = shouldReduceMotion ? 0.1 : 0.8
  const staggerDelay = shouldReduceMotion ? 0 : 0.1

  return (
    <section className={`hero-section relative min-h-screen flex items-center pt-20 overflow-hidden ${isLoaded ? 'hero-ready' : ''}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-brand/10 via-transparent to-green/10" />
      
      {floatingElements.map((el, i) => (
        <motion.div
          key={i}
          className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-brand/20 to-green/20 blur-3xl"
          style={{ left: el.x, top: el.y }}
          initial={{ opacity: 0 }}
          animate={isLoaded ? {
            y: [0, -30, 0],
            opacity: [0.3, 0.6, 0.3],
          } : { opacity: 0 }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: el.delay,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: animationDuration, ease: 'easeOut' }}
            className="hero-content"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: staggerDelay * 2, duration: animationDuration }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-brand/20 mb-3 md:mb-6"
            >
              <Star className="w-4 h-4 text-brand" />
              <span className="text-brand text-sm font-medium">Menor Investimento | Sem Taxas Ocultas | COBRIMOS ORÇAMENTOS</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: staggerDelay * 3, duration: animationDuration }}
              className="text-5xl lg:text-6xl font-heading font-extrabold leading-tight mb-6"
            >
              Registre sua{' '}
              <span className="text-gradient">marca</span>{' '}
              sem burocracia
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: staggerDelay * 4, duration: animationDuration }}
              className="text-xl text-text-secondary mb-8 max-w-lg"
            >
              A maneira mais simples e segura de proteger sua marca. 
              <span className="text-green font-medium"> Empresa de Fortaleza-CE</span> com o 
              <span className="text-brand font-bold"> menor investimento do mercado</span>: 
              sem mensalidade, sem taxas ocultas. <span className="text-brand font-semibold">COBRIMOS ORÇAMENTOS.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: staggerDelay * 5, duration: animationDuration }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link href="/contato" className="btn-primary inline-flex items-center justify-center gap-2">
                Começar Agora
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/como-funciona" className="btn-secondary">
                Como Funciona
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: staggerDelay * 6, duration: animationDuration }}
              className="flex items-center gap-8"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green" />
                <span className="text-text-secondary">+2.500 marcas registradas</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-brand" />
                <span className="text-text-secondary">Processo em 48h</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: animationDuration, delay: staggerDelay * 3, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative z-10 bg-bg-card rounded-2xl p-8 border border-border card-glow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand to-green flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-white">Registro de Marca</h3>
                  <p className="text-text-secondary text-sm">Proteção completa</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-text-secondary">Pesquisa anterior</span>
                  <span className="text-green font-medium">✓ Incluído</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-text-secondary">Análise especializada</span>
                  <span className="text-green font-medium">✓ Incluído</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-text-secondary">Acompanhamento completo</span>
                  <span className="text-green font-medium">✓ Incluído</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-text-secondary">Suporte dedicado</span>
                  <span className="text-green font-medium">✓ Incluído</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-heading font-bold text-white">Menor Investimento</span>
                  <span className="text-text-muted">do mercado</span>
                </div>
                <p className="text-green text-sm mt-1 font-medium">✓ Pagamento único | ✓ Sem mensalidade | ✓ Sem taxas ocultas | ✓ COBRIMOS ORÇAMENTOS</p>
              </div>
            </div>

            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-brand/20 rounded-full blur-2xl"
              animate={isLoaded ? { scale: [1, 1.2, 1] } : { scale: 1 }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-green/20 rounded-full blur-2xl"
              animate={isLoaded ? { scale: [1, 1.3, 1] } : { scale: 1 }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}