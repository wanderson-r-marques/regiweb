'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, ArrowRight } from 'lucide-react'

const posts = [
  {
    id: 1,
    title: 'Como registrar sua marca no INPI: Guia completo 2024',
    excerpt: 'Aprenda todo o processo de registro de marca, desde a pesquisa inicial até o certificado final. Tudo o que você precisa saber.',
    category: 'Guia',
    date: '10 de janeiro, 2024',
    readTime: '8 min de leitura',
  },
  {
    id: 2,
    title: 'Qual a diferença entre marca e nome fantasia?',
    excerpt: 'Entenda as distinções fundamentais entre marca, nome fantasia, razão social e outros conceitos importantes.',
    category: 'Educação',
    date: '5 de janeiro, 2024',
    readTime: '5 min de leitura',
  },
  {
    id: 3,
    title: 'Quanto custa para registrar uma marca no Brasil?',
    excerpt: 'Descubra todos os custos envolvidos no registro de marca, incluindo taxas do INPI e honorários advocatícios.',
    category: 'Finanças',
    date: '28 de dezembro, 2023',
    readTime: '6 min de leitura',
  },
  {
    id: 4,
    title: 'O que fazer quando alguém registra sua marca?',
    excerpt: 'Aprenda os passos a seguir se você descobrir que sua marca foi registrada por outra pessoa.',
    category: 'Direito',
    date: '20 de dezembro, 2023',
    readTime: '7 min de leitura',
  },
  {
    id: 5,
    title: 'Classes de produtos e serviços: O que são e como escolher?',
    excerpt: 'Entenda o sistema de classificação do INPI e aprenda a selecionar as classes corretas para sua marca.',
    category: 'Guia',
    date: '15 de dezembro, 2023',
    readTime: '10 min de leitura',
  },
  {
    id: 6,
    title: 'Marca registrada vsTM: Qual a diferença?',
    excerpt: 'Entenda o significado de cada símbolo e quando você pode usar cada um no branding da sua empresa.',
    category: 'Educação',
    date: '10 de dezembro, 2023',
    readTime: '4 min de leitura',
  },
]

export default function Blog() {
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
              <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Artigos, dicas e guia sobre registro de marcas para entrepreneurs e pequenas empresas
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card group cursor-pointer"
              >
                <div className="flex items-center gap-2 text-sm text-text-muted mb-4">
                  <span className="px-3 py-1 rounded-full bg-brand/20 text-brand">
                    {post.category}
                  </span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h2 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-brand transition-colors">
                  {post.title}
                </h2>

                <p className="text-text-secondary mb-6 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-text-muted text-sm">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <ArrowRight className="w-5 h-5 text-brand group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">
            Quer receber artigos no seu email?
          </h2>
          <p className="text-text-secondary mb-8">
            Assine nossa newsletter e receba as últimas notícias sobre registro de marcas.
          </p>
          <form className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu melhor email"
              className="input flex-1"
            />
            <button type="submit" className="btn-primary">
              Assinar
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}