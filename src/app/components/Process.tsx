"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search, FileText, CheckCircle } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Pesquisa de Marca",
    description: "Verificamos se a marca está disponível para registro",
    icon: Search,
    items: [
      "Análise completa no banco de dados do INPI",
      "Verificação de similaridades",
      "Relatório detalhado de viabilidade",
    ],
  },
  {
    id: 2,
    title: "Registro no INPI",
    description: "Protocolamos sua marca no Instituto Nacional",
    icon: FileText,
    items: [
      "Preparação da documentação",
      "Protocolo de registro",
      "Acompanhamento do processo",
    ],
  },
  {
    id: 3,
    title: "Certificado de Registro",
    description: "Você recebe o certificado oficial do INPI",
    icon: CheckCircle,
    items: [
      "Certificado oficial de registro",
      "Proteção em todo território nacional",
      "Validade de 10 anos renováveis",
    ],
  },
];

export default function Process() {
  const [openStep, setOpenStep] = useState<number | null>(1);

  return (
    <section className="py-20 bg-bg-card">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-4">
            Como funciona o{" "}
            <span className="text-gradient">processo</span>?
          </h2>
          <p className="text-text-secondary">
            Em apenas 3 etapas simples, sua marca está protegida
          </p>
        </motion.div>

        <div className="space-y-4">
          {steps.map((step) => {
            const Icon = step.icon;
            const isOpen = openStep === step.id;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: step.id * 0.1 }}
                className="bg-bg-primary border border-border rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenStep(isOpen ? null : step.id)}
                  className="w-full flex items-center gap-4 p-6 text-left"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs text-brand font-medium">ETAPA {step.id}</span>
                    <h3 className="text-lg font-heading font-semibold text-white mt-1">
                      {step.title}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-text-muted" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pl-24">
                        <p className="text-text-secondary text-sm mb-4">{step.description}</p>
                        <ul className="space-y-2">
                          {step.items.map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-text-muted">
                              <CheckCircle className="w-4 h-4 text-green flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}