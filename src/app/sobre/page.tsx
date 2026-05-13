"use client";

import { motion } from "framer-motion";
import { Shield, Trophy, Users, Star, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const stats = [
  { value: "+2.500", label: "Marcas registradas" },
  { value: "98%", label: "Taxa de sucesso" },
  { value: "12+", label: "Anos de experiência" },
  { value: "4.9", label: "Avaliação média" },
];

const values = [
  {
    title: "Segurança",
    description: "Seus dados e processos protegidos",
    icon: Shield,
  },
  {
    title: "Excelência",
    description: "Qualidade em cada etapa",
    icon: Trophy,
  },
  {
    title: "Atendimento Humanizado",
    description: "Pessoas reais, não robôs",
    icon: Users,
  },
  {
    title: "Inovação",
    description: "Processos modernos e eficientes",
    icon: Star,
  },
];

const reasons = [
  "Menor investimento do mercado",
  "Processo 100% online",
  "Sem mensalidade ou taxas ocultas",
  "COBRIMOS ORÇAMENTOS",
  "Suporte dedicado",
  "Documentação completa",
  "Mais de 2.500 marcas registradas",
];

export default function SobrePage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-6">
                Quem é a{" "}
                <span className="text-gradient">Regiweb</span>?
              </h1>
              <p className="text-text-secondary text-lg mb-6">
                Somos uma empresa de Fortaleza-CE especializada em registro de marcas no INPI. 
                Nossa missão é oferecer o menor investimento do mercado com a melhor qualidade de serviço.
              </p>
              <p className="text-text-secondary mb-8">
                Com mais de 12 anos de experiência e mais de 2.500 marcas registradas, somos referência 
                em proteção de marcas para emprendedores e empresas de todos os portes.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="card text-center">
                    <p className="text-3xl font-heading font-extrabold text-gradient">
                      {stat.value}
                    </p>
                    <p className="text-text-muted text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="relative"
            >
              <div className="bg-bg-card border border-border rounded-2xl p-12 card-glow">
                <div className="w-32 h-32 mx-auto mb-6 rounded-2xl bg-gradient-brand flex items-center justify-center">
                  <Shield className="w-16 h-16 text-white" />
                </div>
                <div className="text-center">
                  <p className="text-text-secondary text-sm mb-2">Fortaleza-CE</p>
                  <p className="text-text-muted text-xs">Desde 2012</p>
                </div>
              </div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-green text-white text-sm font-semibold px-4 py-2 rounded-full"
              >
                COBRIMOS ORÇAMENTOS
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-20"
          >
            <h2 className="text-2xl font-heading font-extrabold text-center mb-8">
              Nossos <span className="text-gradient">valores</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div key={value.title} className="card text-center card-glow">
                    <div className="w-14 h-14 rounded-xl bg-brand/10 mx-auto mb-4 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-brand" />
                    </div>
                    <h3 className="font-heading font-semibold text-white mb-1">
                      {value.title}
                    </h3>
                    <p className="text-text-muted text-sm">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-bg-card border border-border rounded-2xl p-8 mb-20"
          >
            <h2 className="text-2xl font-heading font-extrabold mb-6">
              Por que escolher a <span className="text-gradient">Regiweb</span>?
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {reasons.map((reason) => (
                <div key={reason} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green flex-shrink-0" />
                  <span className="text-text-secondary">{reason}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-brand p-[1px] rounded-2xl"
          >
            <div className="bg-bg-primary rounded-2xl p-8 text-center">
              <h3 className="font-heading font-semibold text-2xl text-white mb-2">
                Pronto para proteger sua marca?
              </h3>
              <p className="text-text-secondary mb-6">
                Primeira análise gratuita. Sem compromisso.
              </p>
              <Link href="/contato" className="btn-primary inline-flex items-center gap-2">
                Começar Agora
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}