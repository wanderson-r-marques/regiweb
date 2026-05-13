'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, XCircle, DollarSign, Users, Building, Clock } from 'lucide-react'

const risks = [
  {
    icon: AlertTriangle,
    title: 'Perder o direito de uso',
    description: 'Se outra pessoa registrar primeiro, você pode ser obrigado a parar de usar sua marca. Todo o reconhecimento vai para o concorrente.',
    severity: 'high',
  },
  {
    icon: XCircle,
    title: 'Processos judiciais',
    description: 'Sem registro, você não tem proteção jurídica. Está sujeito a ações judiciais custosas para defender o que é seu.',
    severity: 'high',
  },
  {
    icon: DollarSign,
    title: 'Perda de investimentos',
    description: 'Todo dinheiro gasto em branding, marketing e construção de marca pode se perder se alguém registrar primeiro.',
    severity: 'high',
  },
  {
    icon: Users,
    title: 'Dano à reputação',
    description: 'Um concorrente usando nome similar pode manchar sua reputação. Seus clientes podem ficar confusos.',
    severity: 'medium',
  },
  {
    icon: Building,
    title: 'Limite de crescimento',
    description: 'Sem registro, você não pode expandir para novos mercados ou franquear seu negócio com segurança.',
    severity: 'medium',
  },
  {
    icon: Clock,
    title: 'Tempo e dinheiro perdido',
    description: 'Rebranding custa caro e leva tempo. É muito mais barato registrar do que mudar tudo depois.',
    severity: 'low',
  },
]

export default function Risks() {
  return (
    <section className="py-24 bg-bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-brand/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-heading font-bold mb-4">
            Riscos de <span className="text-red-500">não registrar</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Não registrar sua marca é um risco que você não pode se permitir. Veja o que pode acontecer.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {risks.map((risk, index) => (
            <motion.div
              key={risk.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-bg-primary rounded-xl p-6 border border-border hover:border-red-500/30 transition-colors group"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${
                  risk.severity === 'high' 
                    ? 'bg-red-500/20 text-red-500' 
                    : risk.severity === 'medium'
                    ? 'bg-yellow-500/20 text-yellow-500'
                    : 'bg-green-500/20 text-green-500'
                }`}>
                  <risk.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold text-white mb-2">
                    {risk.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {risk.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-text-secondary mb-6">
            Não arrisque. Proteja o que você construiu.
          </p>
          <a href="/contato" className="btn-primary inline-flex">
            Começar meu registro agora
          </a>
        </motion.div>
      </div>
    </section>
  )
}