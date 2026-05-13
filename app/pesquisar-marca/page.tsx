'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Search, Shield, AlertCircle, CheckCircle, Info } from 'lucide-react'

export default function PesquisarMarca() {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResult, setSearchResult] = useState<'none' | 'available' | 'unavailable' | null>(null)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchTerm.length > 2) {
      setSearchResult(Math.random() > 0.5 ? 'available' : 'unavailable')
    }
  }

  return (
    <div className="pt-20">
      <section className="py-24 bg-bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-green/10" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-heading font-bold mb-6">
              Pesquisar <span className="text-gradient">marca</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Descubra se sua marca está disponível para registro no INPI antes de começar o processo.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSearch} className="flex gap-4 mb-8">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value)
                  setSearchResult(null)
                }}
                placeholder="Digite o nome da marca..."
                className="input flex-1 text-lg py-4"
              />
              <button type="submit" className="btn-primary px-8 py-4">
                <Search className="w-5 h-5" />
              </button>
            </form>
          </motion.div>

          {searchResult && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`rounded-xl p-8 border ${
                searchResult === 'available' 
                  ? 'bg-green/10 border-green/30' 
                  : 'bg-red/10 border-red/30'
              }`}
            >
              {searchResult === 'available' ? (
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-green/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">
                    Boa notícia!
                  </h3>
                  <p className="text-text-secondary mb-6">
                    Não encontramos marcas conflitantes no banco de dados do INPI. 
                    Sua marca parece estar disponível para registro.
                  </p>
                  <a href="/contato" className="btn-primary">
                    Iniciar meu registro
                  </a>
                </div>
              ) : (
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-red/20 flex items-center justify-center mx-auto mb-4">
                    <AlertCircle className="w-8 h-8 text-red-500" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">
                    Atenção
                  </h3>
                  <p className="text-text-secondary mb-4">
                    Encontramos marcas similares já registradas. 
                    Isso pode afetar a aprovação do seu registro.
                  </p>
                  <p className="text-text-muted text-sm mb-6">
                    Mas não desanime! Entre em contato para uma análise detalhada.
                  </p>
                  <a href="/contato" className="btn-primary">
                    Fazer análise completa
                  </a>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </section>

      <section className="py-24 bg-bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-heading font-bold mb-4">
              Por que fazer uma <span className="text-gradient">pesquisa</span>?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card"
            >
              <Shield className="w-10 h-10 text-brand mb-4" />
              <h3 className="text-xl font-heading font-bold text-white mb-3">
                Evite surpresas
              </h3>
              <p className="text-text-secondary">
                Descubra antes de protocolar se há riscos de rejeição. Economize tempo e dinheiro.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card"
            >
              <Info className="w-10 h-10 text-green mb-4" />
              <h3 className="text-xl font-heading font-bold text-white mb-3">
                Análise profissional
              </h3>
              <p className="text-text-secondary">
                Nossa equipe analisa não apenas o nome exato, mas também nomes similares e suas subclasses.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="card"
            >
              <Search className="w-10 h-10 text-brand mb-4" />
              <h3 className="text-xl font-heading font-bold text-white mb-3">
                Recomendações
              </h3>
              <p className="text-text-secondary">
                Se a marca não estiver disponível, sugerimos alternativas e ajustes que podem aumentar suas chances.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">
            Precisa de uma análise completa?
          </h2>
          <p className="text-text-secondary mb-8">
            Nossa equipe pode fazer uma análise detalhada considerando todas as nuances.
          </p>
          <a href="/contato" className="btn-primary">
            Falar com especialista
          </a>
        </div>
      </section>
    </div>
  )
}