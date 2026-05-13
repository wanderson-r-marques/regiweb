'use client'

import { motion } from 'framer-motion'
import { Shield, Award, Users, Globe, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const values = [
  {
    icon: Shield,
    title: 'Segurança',
    description: 'Seus dados e processos protegidos com os mais altos padrões de segurança.',
  },
  {
    icon: Award,
    title: 'Excelência',
    description: 'Compromisso com a qualidade em cada etapa do processo de registro.',
  },
  {
    icon: Users,
    title: 'Atendimento Humanizado',
    description: 'Equipe sempre pronta para tirar suas dúvidas e guiar você no processo.',
  },
  {
    icon: Globe,
    title: 'Inovação',
    description: 'Tecnologia de ponta para tornar o registro mais simples e rápido.',
  },
]

const stats = [
  { value: '+2.500', label: 'Marcas Registradas' },
  { value: '98%', label: 'Taxa de Aprovação' },
  { value: '12+', label: 'Anos de Experiência' },
  { value: '4.9', label: 'Avaliação Média' },
]

export default function Sobre() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-green/10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl font-heading font-bold mb-6">
                Sobre o <span className="text-gradient">Regiweb</span>
              </h1>
              <p className="text-xl text-text-secondary mb-6">
                Nacemos com a missão de simplificar o registro de marcas no Brasil. 
                acreditamos que proteção de marca deve ser acessível a todos os empreendedores.
              </p>
              <p className="text-lg text-text-secondary mb-8">
                Com tecnologia e atendimento especializado, transformamos um processo 
                burocrático em algo simples, rápido e seguro.
              </p>

              <div className="flex gap-4">
                <Link href="/contato" className="btn-primary">
                  Começar Agora
                </Link>
                <Link href="/como-funciona" className="btn-secondary">
                  Como Funciona
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="w-full aspect-square max-w-md mx-auto bg-gradient-to-br from-brand/20 to-green/20 rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <Shield className="w-32 h-32 text-brand mx-auto mb-4" />
                  <h3 className="text-2xl font-heading font-bold text-white">
                    Sua marca protegida
                  </h3>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-heading font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-text-secondary">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold mb-4">
              Nossos <span className="text-gradient">valores</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-brand to-green flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-text-secondary">
                  {value.description}
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
              Por que escolher o <span className="text-gradient">Regiweb</span>?
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              'Equipe especializada com anos de experiência',
              'Processo 100% online e sem burocracias',
              'Acompanhamento personalizado em cada etapa',
              'Transparência total nos valores e prazos',
              'Suporte disponível para tirar suas dúvidas',
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 bg-bg-primary rounded-lg"
              >
                <CheckCircle className="w-6 h-6 text-green shrink-0" />
                <span className="text-text-secondary">{item}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/contato" className="btn-primary inline-flex items-center gap-2">
              Falar com um especialista
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}