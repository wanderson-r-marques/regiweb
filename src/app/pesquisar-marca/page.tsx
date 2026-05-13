"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, CheckCircle, XCircle, ArrowRight, Shield, FileText, Headphones } from "lucide-react";
import Link from "next/link";

export default function PesquisarMarcaPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searched, setSearched] = useState(false);
  const [isAvailable] = useState(true);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      setSearched(true);
    }
  };

  const benefits = [
    {
      title: "Evite problemas futuros",
      description: "Descubra se há conflitos antes de investir",
      icon: Shield,
    },
    {
      title: "Economize tempo e dinheiro",
      description: "Evite processos de registro rejeitados",
      icon: FileText,
    },
    {
      title: "Suporte especializado",
      description: "Nossa equipe analisa os resultados",
      icon: Headphones,
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">
              Pesquisar{" "}
              <span className="text-gradient">marca</span>
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Verifique se sua marca está disponível para registro no INPI. Primeira análise gratuita!
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            onSubmit={handleSearch}
            className="mb-8"
          >
            <div className="flex gap-4 max-w-2xl mx-auto">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Digite o nome da marca que deseja pesquisar"
                className="input flex-1"
              />
              <button type="submit" className="btn-primary whitespace-nowrap flex items-center gap-2">
                <Search className="w-4 h-4" />
                Pesquisar
              </button>
            </div>
          </motion.form>

          {searched && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`card text-center py-12 mb-12 ${
                isAvailable ? "border-green/50" : "border-red-500/50"
              }`}
            >
              {isAvailable ? (
                <>
                  <div className="w-20 h-20 rounded-full bg-green/10 mx-auto mb-4 flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-green" />
                  </div>
                  <h3 className="font-heading font-semibold text-2xl text-white mb-2">
                    Boa notícia!
                  </h3>
                  <p className="text-text-secondary mb-6">
                    A marca &ldquo;{searchTerm}&rdquo; parece estar disponível para registro.
                  </p>
                  <Link href="/contato" className="btn-primary inline-flex items-center gap-2">
                    Solicitar Registro
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </>
              ) : (
                <>
                  <div className="w-20 h-20 rounded-full bg-red-500/10 mx-auto mb-4 flex items-center justify-center">
                    <XCircle className="w-10 h-10 text-red-500" />
                  </div>
                  <h3 className="font-heading font-semibold text-2xl text-white mb-2">
                    Marcas similares encontradas
                  </h3>
                  <p className="text-text-secondary mb-6">
                    Encontramos marcas registradas similares. Entre em contato para uma análise detalhada.
                  </p>
                  <Link href="/contato" className="btn-primary inline-flex items-center gap-2">
                    Falar com Especialista
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </>
              )}
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-heading font-extrabold mb-4">
              Por que pesquisar antes de registrar?
            </h2>
            <p className="text-text-secondary mb-8">
              A pesquisa prévia evita problemas e economia tempo e dinheiro
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div key={benefit.title} className="card text-center">
                    <div className="w-14 h-14 rounded-xl bg-gradient-brand mx-auto mb-4 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-heading font-semibold text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-text-muted text-sm">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-bg-card border border-border rounded-2xl p-8 text-center"
          >
            <h3 className="font-heading font-semibold text-xl text-white mb-2">
              Quer uma análise completa?
            </h3>
            <p className="text-text-secondary mb-6">
              Nossa equipe faz uma análise detalhada da sua marca
            </p>
            <Link href="/contato" className="btn-primary inline-flex items-center gap-2">
              Solicitar Análise Gratuita
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}