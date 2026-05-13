"use client";

import { motion } from "framer-motion";
import { TrendingDown, Award, Globe, BadgeCheck, Headphones, FileCheck, Users } from "lucide-react";

const differentiators = [
  {
    title: "Menor Investimento do Mercado",
    description: "Preços competitivos sem comprometer a qualidade do serviço",
    icon: TrendingDown,
  },
  {
    title: "Especialistas Certificados",
    description: "Equipe com anos de experiência em registro de marcas",
    icon: Award,
  },
  {
    title: "Processo 100% Online",
    description: "Faça tudo sem sair de casa, do orçamento ao certificado",
    icon: Globe,
  },
  {
    title: "Garantia de Satisfação",
    description: "Se não ficarmos satisfeitos, você não paga",
    icon: BadgeCheck,
  },
  {
    title: "Suporte Dedicado",
    description: "Atendimento personalizado durante todo o processo",
    icon: Headphones,
  },
  {
    title: "Documentação Completa",
    description: "Preparamos todos os documentos necessários",
    icon: FileCheck,
  },
  {
    title: "+2.500 Marcas Registradas",
    description: "Experiência comprovada com clientes em todo o Brasil",
    icon: Users,
  },
];

export default function Differentiators() {
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
            Por que escolher a{" "}
            <span className="text-gradient">Regiweb</span>?
          </h2>
          <p className="text-text-secondary">
            Oferecemos a melhor experiência em registro de marcas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card card-glow group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-brand p-[1px] mb-4 group-hover:scale-110 transition-transform">
                  <div className="w-full h-full rounded-xl bg-bg-card flex items-center justify-center">
                    <Icon className="w-7 h-7 text-brand" />
                  </div>
                </div>
                <h3 className="font-heading font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-text-muted text-sm">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}