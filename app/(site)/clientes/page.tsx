'use client'

import { motion } from 'framer-motion'
import { Shield, CheckCircle } from 'lucide-react'

const clientes = [
  {
    nome: 'Café Ouro',
    descricao: 'Registro de marca para cafeteria artesanal',
    logo: 'CO',
    cor: 'from-amber-600 to-amber-800'
  },
  {
    nome: 'Tech Soul',
    descricao: 'Marca registrada para startup de tecnologia',
    logo: 'TS',
    cor: 'from-purple-600 to-purple-900'
  },
  {
    nome: 'Fit Life',
    descricao: 'Registro de marca para academia e estúdio',
    logo: 'FL',
    cor: 'from-green-500 to-green-700'
  },
  {
    nome: 'Constrói Mais',
    descricao: 'Marca registrada para empresa de construção',
    logo: 'CM',
    cor: 'from-orange-500 to-orange-700'
  },
  {
    nome: 'Beleza Pura',
    descricao: 'Registro de marca para salão de beleza',
    logo: 'BP',
    cor: 'from-pink-500 to-pink-700'
  },
  {
    nome: 'Sabor caseiro',
    descricao: 'Marca registrada para restaurante',
    logo: 'SC',
    cor: 'from-red-500 to-red-700'
  },
  {
    nome: 'Educa Kids',
    descricao: 'Registro de marca para escola infantil',
    logo: 'EK',
    cor: 'from-blue-500 to-blue-700'
  },
  {
    nome: 'Moto Prime',
    descricao: 'Marca registrada para oficina mecânica',
    logo: 'MP',
    cor: 'from-gray-600 to-gray-800'
  },
  {
    nome: 'Pet Amor',
    descricao: 'Registro de marca para pet shop',
    logo: 'PA',
    cor: 'from-teal-500 to-teal-700'
  }
]

export default function Clientes() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-brand/20 mb-4">
            <CheckCircle className="w-4 h-4 text-green" />
            <span className="text-brand text-sm font-medium">+2.500 marcas registradas</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Nossos <span className="text-gradient">Clientes</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Empresas que confiaram na Regiweb para proteger suas marcas e patrimônios
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clientes.map((cliente, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-bg-card rounded-2xl border border-border p-6 hover:border-brand/50 transition-all duration-300 hover:shadow-lg hover:shadow-brand/10"
            >
              <div className="flex flex-col items-center">
                <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${cliente.cor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <span className="text-3xl font-heading font-bold text-white">{cliente.logo}</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-2 text-center">
                  {cliente.nome}
                </h3>
                <p className="text-text-secondary text-sm text-center">
                  {cliente.descricao}
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-border flex items-center justify-center gap-2 text-text-muted text-sm">
                <Shield className="w-4 h-4 text-green" />
                <span>Marca registrada</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-bg-card rounded-2xl border border-border p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-heading font-bold text-white mb-4">
              Quer proteger sua marca também?
            </h2>
            <p className="text-text-secondary mb-6">
              Junte-se a mais de 2.500 empresas que já registraram suas marcas com a Regiweb.
            </p>
            <a href="/contato" className="btn-primary inline-flex">
              Começar Agora
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  )
}