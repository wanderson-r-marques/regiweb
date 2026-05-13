'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Search, FileText, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Pesquisa de Marca',
    description: 'Verificamos se sua marca está disponível no INPI. Análise completa de marcas similares no mesmo segmento.',
    icon: Search,
    details: [
      'Pesquisa em todas as classes de serviço',
      'Análise de marcas parecidas',
      'Relatório detalhado de viabilidade',
      'Recomendações de ajustes se necessário',
    ],
  },
  {
    number: '02',
    title: 'Registro no INPI',
    description: 'Preparamos e protocolamos toda a documentação no Instituto Nacional da Propriedade Industrial.',
    icon: FileText,
    details: [
      'Preenchimento do formulário de pedido',
      'Classificação de produtos e serviços',
      'Protocolo no INPI',
      'Acompanhamento do andamento',
    ],
  },
  {
    number: '03',
    title: 'Certificado de Registro',
    description: 'Após a aprovação, você recebe o certificado oficial de registro da sua marca.',
    icon: CheckCircle,
    details: [
      'Acompanhamento até a decisão final',
      'Resposta a eventuais exigências',
      'Emissão do certificado de registro',
      'Orientação sobre uso da marca',
    ],
  },
]

export default function Process() {
  const [openStep, setOpenStep] = useState<number | null>(0)

  return (
    <section className="py-24 bg-bg-primary relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand/5 to-transparent" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-heading font-bold mb-4">
            Processo em <span className="text-gradient">3 passos</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Registro simples e sem complicação. Nossa equipe faz tudo por você.
          </p>
        </motion.div>

        <div className="space-y-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-bg-card rounded-xl border border-border overflow-hidden"
            >
              <button
                onClick={() => setOpenStep(openStep === index ? null : index)}
                className="w-full p-6 flex items-center gap-6 text-left hover:bg-bg-card-hover/50 transition-colors"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-brand to-green flex items-center justify-center shrink-0">
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-medium text-brand">{step.number}</span>
                    <h3 className="text-xl font-heading font-bold text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-text-secondary text-sm">
                    {step.description}
                  </p>
                </div>
                <div className={`shrink-0 p-2 rounded-lg bg-bg-primary transition-transform duration-300 ${
                  openStep === index ? 'rotate-180' : ''
                }`}>
                  <ChevronDown className="w-5 h-5 text-text-secondary" />
                </div>
              </button>

              <motion.div
                initial={false}
                animate={{ 
                  height: openStep === index ? 'auto' : 0,
                  opacity: openStep === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 pl-[88px]">
                  <div className="bg-bg-primary rounded-lg p-4">
                    <ul className="space-y-3">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-3 text-text-secondary">
                          <CheckCircle className="w-4 h-4 text-green shrink-0" />
                          <span className="text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a href="/contato" className="btn-primary">
            Iniciar meu processo
          </a>
        </motion.div>
      </div>
    </section>
  )
}