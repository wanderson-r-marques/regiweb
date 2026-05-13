'use client'

import { motion } from 'framer-motion'
import { Shield, Lock, TrendingUp, Gavel, Users, Globe } from 'lucide-react'

const benefits = [
  {
    icon: Shield,
    title: 'Proteção Exclusiva',
    description: 'Tenha o direito exclusivo de usar sua marca em todo o território nacional. Ninguém pode copiar ou usar algo similar no seu segmento.',
    gradient: 'from-brand to-brand-light',
  },
  {
    icon: Lock,
    title: 'Defesa Judicial',
    description: 'Com o registro, você tem respaldo jurídico para actionar quem infringir sua marca. Proteção legal garantida.',
    gradient: 'from-green to-green-light',
  },
  {
    icon: TrendingUp,
    title: 'Valorização do Negócio',
    description: 'Marcas registradas têm maior valor de mercado. Um ativo intangível que appreciation seu negócio exponencialmente.',
    gradient: 'from-brand to-green',
  },
  {
    icon: Gavel,
    title: ' Marca é Direito',
    description: 'Sem registro, sua marca não tem proteção legal. Não perca o que você construiu para alguém registrar primeiro.',
    gradient: 'from-green to-brand',
  },
  {
    icon: Users,
    title: 'Credibilidade',
    description: 'Clientes confiam mais em empresas com marca registrada. Diferencial competitivo no mercado.',
    gradient: 'from-brand-light to-green',
  },
  {
    icon: Globe,
    title: 'Expansão Internacional',
    description: 'O registro abre portas para expandir sua marca para outros países. Proteção mundial.',
    gradient: 'from-green to-brand-light',
  },
]

export default function WhyRegister() {
  return (
    <section className="py-24 bg-bg-primary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-heading font-bold mb-4">
            Por que <span className="text-gradient">registrar</span> sua marca?
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            O registro de marca é essencial para proteger sua identidade e garantir que ninguém use o que é seu.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card group cursor-pointer"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}