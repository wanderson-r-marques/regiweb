"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Shield } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-brand opacity-10 blur-3xl" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
      >
        <div className="inline-flex items-center gap-2 bg-bg-card border border-border rounded-full px-4 py-2 mb-6">
          <Shield className="w-4 h-4 text-brand" />
          <span className="text-sm text-text-secondary">COBRIMOS ORÇAMENTOS</span>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold mb-6">
          Pronto para proteger sua{" "}
          <span className="text-gradient">marca</span>?
        </h2>
        
        <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
          Sem mensalidade. Sem taxas ocultas. Pagamento único. Primeira análise gratuita.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Link href="/contato" className="btn-primary flex items-center gap-2">
            Começar Agora
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/pesquisar-marca" className="btn-secondary">
            Verificar Disponibilidade
          </Link>
        </div>

        <p className="text-text-muted text-sm">
          Primeira análise gratuita • Processo 100% online • Sem compromisso
        </p>
      </motion.div>
    </section>
  );
}