"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, CheckCircle, ArrowRight, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen pt-20 relative overflow-hidden flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -30, 0],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-1/4 -left-32 w-96 h-96 bg-brand/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-green/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-bg-card border border-border rounded-full px-4 py-2">
              <Zap className="w-4 h-4 text-green" />
              <span className="text-sm text-text-secondary">
                Menor Investimento | Sem Taxas Ocultas | COBRIMOS ORÇAMENTOS
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold leading-tight tracking-tight">
              Registre sua{" "}
              <span className="text-gradient">marca</span>
              <br />
              no INPI com
              <br />
              segurança
            </h1>

            <p className="text-text-secondary text-lg max-w-lg">
              Empresa de Fortaleza-CE. O menor investimento do mercado. Sem mensalidade, sem taxas ocultas. Processo 100% online.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/contato" className="btn-primary flex items-center gap-2">
                Começar Agora
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/como-funciona" className="btn-secondary">
                Como Funciona
              </Link>
            </div>

            <div className="flex flex-wrap gap-8 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green" />
                <span className="text-sm text-text-secondary">+2.500 marcas registradas</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green" />
                <span className="text-sm text-text-secondary">Processo em 48h</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-bg-card border border-border rounded-2xl p-8 card-glow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-white">Registro de Marca</h3>
                  <p className="text-sm text-text-muted">Proteção completa</p>
                </div>
              </div>

              <ul className="space-y-4">
                {[
                  "Pesquisa de marca gratuita",
                  "Protocolo de registro",
                  "Acompanhamento completo",
                  "Certificado de registro",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green flex-shrink-0" />
                    <span className="text-text-secondary text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-center justify-between">
                  <span className="text-text-muted">Investimento único</span>
                  <span className="text-2xl font-heading font-bold text-gradient">Sob consulta</span>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-green text-white text-xs font-semibold px-3 py-1 rounded-full"
            >
              100% Online
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}