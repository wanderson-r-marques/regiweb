'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Award, Users, Clock, ShieldCheck, HeadphonesIcon, FileCheck, BadgeCent } from 'lucide-react'

const differentiators = [
  {
    icon: BadgeCent,
    title: 'Menor Investimento do Mercado',
    description: 'Pagamento único, sem mensalidade, sem taxas ocultas. COBRIMOS ORÇAMENTOS de concorrentes.',
    gradient: 'from-green to-brand',
  },
  {
    icon: Award,
    title: 'Especialistas Certificados',
    description: 'Equipe com anos de experiência em registro de marcas no INPI. Conhecimento técnico garantido.',
    gradient: 'from-brand to-brand-light',
  },
  {
    icon: Clock,
    title: 'Processo 100% Online',
    description: 'Tudo pelo WhatsApp e email. Você não precisa ir a nenhum escritório físico.',
    gradient: 'from-green to-green-light',
  },
  {
    icon: ShieldCheck,
    title: 'Garantia de Satisfação',
    description: 'Se não conseguirmos dar andamento no seu caso, devolvemos 100% do valor pago.',
    gradient: 'from-brand to-green',
  },
  {
    icon: HeadphonesIcon,
    title: 'Suporte Dedicado',
    description: 'Atendimento humanizado. Tire todas as suas dúvidas com quem entende do assunto.',
    gradient: 'from-green-light to-brand',
  },
  {
    icon: FileCheck,
    title: 'Documentação Completa',
    description: 'Preparamos toda a papelada necessária. Você só precisa fornecer os dados.',
    gradient: 'from-brand-light to-green',
  },
  {
    icon: Users,
    title: '+2.500 Marcas Registradas',
    description: 'Milhares de satisfação comprovada. Clientes em todo o Brasil.',
    gradient: 'from-green to-brand',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
    },
  },
}

export default function Differentiators() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="py-24 bg-bg-primary relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: shouldReduceMotion ? 0.1 : 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-heading font-bold mb-4">
            Por que escolher o <span className="text-gradient">Regiweb</span>?
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Empresa de <span className="text-brand font-medium">Fortaleza-CE</span> especializada em registro de marcas. 
            <span className="text-green font-medium"> Menor investimento do mercado</span>: pagamento único, sem mensalidade, sem taxas ocultas.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="card group cursor-pointer"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}