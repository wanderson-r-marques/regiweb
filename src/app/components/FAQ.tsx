"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Quanto tempo leva para registrar uma marca?",
    answer: "O processo completo de registro de marca no INPI pode levar de 6 a 12 meses, dependendo da complexidade do processo e se houver alguma contestation.",
  },
  {
    question: "Quanto preciso investir para registrar minha marca?",
    answer: "Oferecemos o menor investimento do mercado, sem mensalidade e sem taxas ocultas. O pagamento é único e feito uma única vez. Entre em contato para receber um orçamento personalizado.",
  },
  {
    question: "Preciso ter empresa para registrar uma marca?",
    answer: "Não necessariamente. Pessoas físicas também podem registrar marcas. No entanto, o registro em nome de empresa oferece mais proteção e valorização.",
  },
  {
    question: "O que é o INPI e por que é importante?",
    answer: "O INPI (Instituto Nacional da Propriedade Industrial) é o órgão responsável pelo registro de marcas e patentes no Brasil. Apenas com registro no INPI sua marca tem proteção legal.",
  },
  {
    question: "O que acontece se alguém usar minha marca sem autorização?",
    answer: "Com o registro, você tem o direito exclusivo de usar sua marca e pode tomar medidas legais contra quem usá-la indevidamente, incluindo ações de danos.",
  },
  {
    question: "Posso começar a usar minha marca antes do registro?",
    answer: "Sim, mas é recomendável fazer uma pesquisa prévia e solicitar o registro o quanto antes, pois você só fica protegido legalmente após a concessão do registro.",
  },
  {
    question: "Quais documentos preciso para registrar?",
    answer: "Os documentos básicos incluem: CNPJ ou CPF, comprovante de endereço e a imagem da marca (quando aplicável). Nossa equipe ajuda em todo o processo.",
  },
  {
    question: "O que são classes de produtos e serviços?",
    answer: "O INPI utiliza um sistema de classificação chamado NICE, com 45 classes (34 produtos e 11 serviços). Você deve registrar sua marca na classe correspondente ao seu negócio.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-bg-card">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-4">
            Perguntas{" "}
            <span className="text-gradient">frequentes</span>
          </h2>
          <p className="text-text-secondary">
            Tire suas dúvidas sobre registro de marca
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-bg-primary border border-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-heading font-semibold text-white pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-brand flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-text-muted flex-shrink-0" />
                )}
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 pt-0">
                      <p className="text-text-secondary">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}