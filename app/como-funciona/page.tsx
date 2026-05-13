'use client'

import { motion } from 'framer-motion'
import { Search, FileText, CheckCircle, Clock, Shield, TrendingUp } from 'lucide-react'
import Link from 'next/link'

const steps = [
  {
    number: '01',
    title: 'Solicitação',
    description: 'Você preenche nosso formulário com os dados da sua marca e escolhe o plano ideal para suas necessidades.',
    icon: FileText,
  },
  {
    number: '02',
    title: 'Pesquisa',
    description: 'Nossa equipe realiza uma pesquisa completa no banco de dados do INPI para verificar a disponibilidade.',
    icon: Search,
  },
  {
    number: '03',
    title: 'Análise',
    description: 'Analisamos o resultado e emitimos um relatório detalhado com a viabilidade do registro.',
    icon: Shield,
  },
  {
    number: '04',
    title: 'Protocolo',
    description: 'Com a aprovação, protocolamos o pedido de registro no INPI em seu nome.',
    icon: Clock,
  },
  {
    number: '05',
    title: 'Acompanhamento',
    description: 'Acompanhamos todo o processo junto ao INPI até a concessão do registro.',
    icon: TrendingUp,
  },
  {
    number: '06',
    title: 'Certificado',
    description: 'Você recebe o certificado oficial de registro da sua marca.',
    icon: CheckCircle,
  },
]

const faqs = [
  {
    question: 'Quanto tempo leva o processo de registro?',
    answer: 'O tempo médio é de 12 a 18 meses, desde o protocolo até a concessão do certificado. Mas você pode usar a marca com o protocolo desde o início.',
  },
  {
    question: 'O que é o INPI?',
    answer: 'O INPI (Instituto Nacional da Propriedade Industrial) é o órgão responsável pelo registro de marcas no Brasil.',
  },
  {
    question: 'Preciso ter empresa para registrar uma marca?',
    answer: 'Não. Pessoas físicas também podem registrar marcas. Pode ser para uso futuro ou para proteger um projeto.',
  },
  {
    question: 'O que são classes de produtos e serviços?',
    answer: 'As classes determinam em quais setores sua marca será protegida. existem 45 classes (34 de produtos e 11 de serviços).',
  },
  {
    question: 'O que acontece depois que protocolo?',
    answer: 'O INPI faz a análise técnica. Se tudo estiver certo, sua marca será publicada e após 60 dias sem oposição, segue para concessão.',
  },
]

export default function ComoFunciona() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-green/10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-heading font-bold mb-6">
              Como <span className="text-gradient">funciona</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Entenda todo o processo de registro de marca em 6 etapas simples
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl font-heading font-bold text-brand/30">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand to-green flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-text-secondary">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-heading font-bold mb-4">
              Perguntas <span className="text-gradient">frequentes</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-bg-primary rounded-xl p-6 border border-border"
              >
                <h3 className="text-lg font-heading font-bold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-text-secondary">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">
            Still has questions?
          </h2>
          <p className="text-text-secondary mb-8">
            Our team is ready to clarify all your doubts.
          </p>
          <Link href="/contato" className="btn-primary">
            Talk to a specialist
          </Link>
        </div>
      </section>
    </div>
  )
}