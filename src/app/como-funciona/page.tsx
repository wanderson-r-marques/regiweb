"use client";

import { motion } from "framer-motion";
import { Search, FileText, Eye, Award, CheckCircle, Shield, ArrowRight } from "lucide-react";
import Link from "next/link";

const phases = [
  {
    title: "Pesquisa",
    description: "Verificamos a disponibilidade da sua marca",
    icon: Search,
    items: ["Análise no banco do INPI", "Verificação de similaridade", "Relatório de viabilidade"],
  },
  {
    title: "Protocolo",
    description: "Protocolamos sua marca no INPI",
    icon: FileText,
    items: ["Preparação de documentos", "Protocolo oficial", "Acompanhamento"],
  },
  {
    title: "Vigilância",
    description: "Monitoramos sua marca durante o processo",
    icon: Eye,
    items: ["Acompanhamento do processo", "Alertas de publicações", "Resposta a oposições"],
  },
  {
    title: "Concessão",
    description: "Você recebe o certificado de registro",
    icon: Award,
    items: ["Certificado oficial INPI", "Proteção nacional", "Validade de 10 anos"],
  },
];

const includedServices = [
  {
    title: "Pesquisa Gratuita",
    description: "Análise completa de disponibilidade",
    icon: Search,
  },
  {
    title: "Documentação",
    description: "Preparação de todos os documentos",
    icon: FileText,
  },
  {
    title: "Acompanhamento",
    description: "Suporte durante todo o processo",
    icon: Eye,
  },
  {
    title: "Certificado",
    description: "Entrega do registro oficial",
    icon: Award,
  },
];

export default function ComoFuncionaPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">
              Como funciona o{" "}
              <span className="text-gradient">processo</span>?
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Em apenas 4 fases simples, sua marca está protegida em todo o território nacional
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <motion.div
                  key={phase.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="card card-glow text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-brand mx-auto mb-4 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-xs text-brand font-medium">FASE {index + 1}</span>
                  <h3 className="font-heading font-semibold text-xl text-white mt-1 mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-text-muted text-sm mb-4">{phase.description}</p>
                  <ul className="space-y-2 text-left">
                    {phase.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-text-secondary">
                        <CheckCircle className="w-4 h-4 text-green flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-bg-card border border-border rounded-2xl p-8 mb-20"
          >
            <h2 className="text-2xl font-heading font-extrabold text-center mb-8">
              O que está <span className="text-gradient">incluído</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {includedServices.map((service) => {
                const Icon = service.icon;
                return (
                  <div key={service.title} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-green/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-green" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">{service.title}</h4>
                      <p className="text-text-muted text-xs">{service.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-bg-card border border-border rounded-2xl p-8"
          >
            <h2 className="text-2xl font-heading font-extrabold mb-6">
              Informações <span className="text-gradient">legais</span>
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                <p className="text-text-secondary text-sm">
                  O registro de marca é válido em todo o território nacional brasileiro.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                <p className="text-text-secondary text-sm">
                  A proteção tem validade de 10 anos, renováveis por iguais períodos.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                <p className="text-text-secondary text-sm">
                  O certificado de registro é emitido diretamente pelo INPI.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-extrabold mb-4">
            Pronto para proteger sua marca?
          </h2>
          <p className="text-text-secondary mb-8">
            Primeira análise gratuita. Sem compromisso.
          </p>
          <Link href="/contato" className="btn-primary inline-flex items-center gap-2">
            Começar Agora
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}