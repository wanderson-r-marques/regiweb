"use client";

import { motion } from "framer-motion";
import { Shield, Scale, TrendingUp, Copyright, BadgeCheck, Globe } from "lucide-react";

const benefits = [
  {
    title: "Proteção Exclusiva",
    description: "Sua marca é protegida em todo o território nacional",
    icon: Shield,
  },
  {
    title: "Defesa Judicial",
    description: "Direito exclusivo de processar quem usar indevidamente",
    icon: Scale,
  },
  {
    title: "Valorização do Negócio",
    description: "Marcas registradas valem mais e atraem investidores",
    icon: TrendingUp,
  },
  {
    title: "Marca é Direito",
    description: "Sem registro, você não tem proteção legal",
    icon: Copyright,
  },
  {
    title: "Credibilidade",
    description: "Cliente confiam mais em marcas registradas",
    icon: BadgeCheck,
  },
  {
    title: "Expansão Internacional",
    description: "Base para registrar sua marca em outros países",
    icon: Globe,
  },
];

export default function WhyRegister() {
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
            Por que registrar sua{" "}
            <span className="text-gradient">marca</span>?
          </h2>
          <p className="text-text-secondary">
            Proteja seu negócio e invista no futuro
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card card-glow"
              >
                <div className="w-12 h-12 rounded-xl bg-green/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-green" />
                </div>
                <h3 className="font-heading font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-text-muted text-sm">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}