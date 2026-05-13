"use client";

import { motion } from "framer-motion";
import { AlertTriangle, XCircle, DollarSign, Users, Building, Clock } from "lucide-react";
import Link from "next/link";

const risks = [
  {
    title: "Marca clonada",
    description: "Concorrentes usam sua marca para lucrar",
    severity: "high",
    icon: AlertTriangle,
  },
  {
    title: "Perda total de direitos",
    description: "Terceiros registram primeiro e você perde",
    severity: "high",
    icon: XCircle,
  },
  {
    title: "Processos judiciais",
    description: "Ações legais custam caro e demoram",
    severity: "high",
    icon: DollarSign,
  },
  {
    title: "Prejuízo de imagem",
    description: "Sua marca pode ser associada a outros",
    severity: "medium",
    icon: Users,
  },
  {
    title: "Limitação de crescimento",
    description: "Não pode expandir com marca irregular",
    severity: "medium",
    icon: Building,
  },
  {
    title: "Tempo perdido",
    description: "Refazer tudo do zero leva muito tempo",
    severity: "low",
    icon: Clock,
  },
];

const severityColors = {
  high: "border-red-500/50 hover:border-red-500",
  medium: "border-yellow-500/50 hover:border-yellow-500",
  low: "border-border hover:border-border-light",
};

export default function Risks() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-4">
            Os riscos de{" "}
            <span className="text-gradient">não registrar</span>
          </h2>
          <p className="text-text-secondary">
            Proteja sua marca antes que seja tarde
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {risks.map((risk, index) => {
            const Icon = risk.icon;
            return (
              <motion.div
                key={risk.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`card card-glow border ${severityColors[risk.severity as keyof typeof severityColors]}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-white mb-1">
                      {risk.title}
                    </h3>
                    <p className="text-text-muted text-sm">{risk.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/contato" className="btn-primary inline-flex items-center gap-2">
            Proteger Minha Marca
          </Link>
        </motion.div>
      </div>
    </section>
  );
}