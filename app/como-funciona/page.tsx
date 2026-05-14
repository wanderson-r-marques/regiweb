'use client'

import { motion } from 'framer-motion'
import { Search, FileText, CheckCircle, Clock, Shield, TrendingUp, ShieldCheck, AlertTriangle, Scale } from 'lucide-react'
import Link from 'next/link'

const fases = [
  {
    number: '01',
    title: 'Pesquisa',
    description: 'Análise de viabilidade e busca de anterioridade para definir o sucesso do registro. Identificamos riscos antes de protocolar.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Protocolo',
    description: 'Entrada com o pedido de registro junto ao INPI para dar início ao processo. A partir daqui você já pode usar o símbolo ™.',
    icon: FileText,
  },
  {
    number: '03',
    title: 'Vigilância',
    description: 'Acompanhamento das etapas e despachos deliberados pelo INPI. Monitoramos todo o processo para garantir que nada passe despercebido.',
    icon: AlertTriangle,
  },
  {
    number: '04',
    title: 'Concessão',
    description: 'Entrega do certificado de registro (decênio), válido por 10 anos. Sua marca protegida em todo o território nacional.',
    icon: CheckCircle,
  },
]

const servicosInclusos = [
  {
    title: 'Busca e Análise de Marca',
    description: 'Pesquisa completa no banco de dados do INPI para verificar disponibilidade e viabilidade do registro.',
    icon: Search,
  },
  {
    title: 'Pedido de Registro e Acompanhamento',
    description: 'Protocolamos o pedido e acompanhamos todas as etapas junto ao INPI até a concessão.',
    icon: Clock,
  },
  {
    title: 'Defesa em Oposição e Recursos',
    description: 'Caso alguém impugne seu registro, nossa equipe faz a defesa completa sem custo adicional.',
    icon: Shield,
  },
  {
    title: 'Instrução e Redação',
    description: 'Preparamos toda a documentação necessária e orientamos sobre as classes corretas.',
    icon: FileText,
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
              As 4 <span className="text-gradient">Fases</span> do Registro
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Entenda cada etapa do processo de registro de marca no INPI
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fases.map((fase, index) => (
              <motion.div
                key={fase.number}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl font-heading font-bold text-brand/30">
                    {fase.number}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand to-green flex items-center justify-center">
                    <fase.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-3">
                  {fase.title}
                </h3>
                <p className="text-text-secondary">
                  {fase.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/contato" className="btn-primary inline-flex items-center gap-2">
              Solicite um orçamento e comprove o menor custo do Brasil
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold mb-4">
              O que está <span className="text-gradient">incluído</span>?
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Todos os serviços abaixo já estão inclusos no pacote, sem custo adicional
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicosInclusos.map((servico, index) => (
              <motion.div
                key={servico.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green to-brand flex items-center justify-center mb-6">
                  <servico.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-3">
                  {servico.title}
                </h3>
                <p className="text-text-secondary">
                  {servico.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-heading font-bold mb-4">
              Sua marca <span className="text-gradient">protegida por lei</span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-6 p-6 bg-bg-card rounded-xl border border-border"
            >
              <div className="w-12 h-12 rounded-lg bg-green/20 flex items-center justify-center shrink-0">
                <Scale className="w-6 h-6 text-green" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-white mb-2">
                  Base Legal: Lei da Propriedade Industrial 9.279/96
                </h3>
                <p className="text-text-secondary">
                  O registro assegura o direito exclusivo de uso da marca em todo o território nacional, conforme a Lei da Propriedade Industrial 9.279/96.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-6 p-6 bg-bg-card rounded-xl border border-border"
            >
              <div className="w-12 h-12 rounded-lg bg-brand/20 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-brand" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-white mb-2">
                  Direito Exclusivo
                </h3>
                <p className="text-text-secondary">
                  O registro impede que a marca seja copiada ou usada por terceiros sem sua autorização. Você tem a segurança jurídica necesaria para proteger seu negócio.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-6 p-6 bg-bg-card rounded-xl border border-border"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand to-green flex items-center justify-center shrink-0">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-white mb-2">
                  Taxas do INPI
                </h3>
                <p className="text-text-secondary">
                  As únicas taxas externas são as taxas federais do INPI (GRU). Orientamos pessoas físicas, MEI e ME a obter os descontos legais de até 50% junto ao governo.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">
            Ainda tem dúvidas sobre o processo?
          </h2>
          <p className="text-text-secondary mb-8">
            Nossa equipe está pronta para esclarecer todas as suas dúvidas e ajudar você a proteger sua marca.
          </p>
          <Link href="/contato" className="btn-primary">
            Falar com um especialista
          </Link>
        </div>
      </section>
    </div>
  )
}

import { ArrowRight } from 'lucide-react'