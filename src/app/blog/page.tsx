"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const articles = [
  {
    title: "Como registrar sua marca no INPI em 2024",
    excerpt: "Guia completo passo a passo para registrar sua marca e proteger seu negócio. Entenda todo o processo.",
    category: "Guia",
    date: "15 Jan 2024",
    readTime: "8 min",
  },
  {
    title: "5 erros comuns ao registrar uma marca",
    excerpt: "Conheça os principais erros que podem comprometer seu registro e como evitá-los.",
    category: "Educação",
    date: "10 Jan 2024",
    readTime: "5 min",
  },
  {
    title: "Quanto custa registrar uma marca no INPI?",
    excerpt: "Entenda todos os custos envolvidos no processo de registro de marca e evite surpresas.",
    category: "Finanças",
    date: "05 Jan 2024",
    readTime: "6 min",
  },
  {
    title: "Classes de produtos e serviços: o que são?",
    excerpt: "Explicamos de forma simples como funciona a classificação do INPI e como escolher as classes certas.",
    category: "Direito",
    date: "01 Jan 2024",
    readTime: "7 min",
  },
  {
    title: "Marca registrada vs. nome fantasia",
    excerpt: "Qual a diferença? Entenda por que ter um nome fantasia não protege sua marca.",
    category: "Direito",
    date: "28 Dez 2023",
    readTime: "4 min",
  },
  {
    title: "Como pesquisar marca no INPI gratuitamente",
    excerpt: "Aprenda a fazer uma pesquisa prévia de marca antes de investir no registro.",
    category: "Guia",
    date: "20 Dez 2023",
    readTime: "5 min",
  },
];

const categoryColors: Record<string, string> = {
  Guia: "bg-brand/10 text-brand",
  Educação: "bg-green/10 text-green",
  Finanças: "bg-yellow-500/10 text-yellow-500",
  Direito: "bg-red-500/10 text-red-500",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">
              Blog da <span className="text-gradient">Regiweb</span>
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Artigos educativos sobre registro de marcas, dicas do INPI e propriedade intelectual
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card card-glow group cursor-pointer"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className={`text-xs font-medium px-2 py-1 rounded ${categoryColors[article.category]}`}>
                    {article.category}
                  </span>
                </div>
                <h2 className="font-heading font-semibold text-white mb-2 group-hover:text-brand transition-colors">
                  {article.title}
                </h2>
                <p className="text-text-muted text-sm mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-4 text-text-muted text-xs">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-16 bg-bg-card border border-border rounded-2xl p-8 text-center"
          >
            <h3 className="font-heading font-semibold text-xl text-white mb-2">
              Receba novidades por email
            </h3>
            <p className="text-text-secondary text-sm mb-6">
              Cadastre-se para receber artigos exclusivos sobre registro de marcas
            </p>
            <div className="flex max-w-md mx-auto gap-2">
              <input
                type="email"
                placeholder="Seu melhor email"
                className="input flex-1"
              />
              <button className="btn-primary whitespace-nowrap flex items-center gap-2">
                Inscrever-se
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}