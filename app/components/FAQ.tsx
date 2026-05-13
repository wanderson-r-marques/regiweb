'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: 'Quanto tempo leva para registrar uma marca?',
    answer: 'O tempo médio do processo no INPI é de 12 a 18 meses, desde o protocolo até a concessão do certificado. Mas você pode usar a marca com o protocolo desde o início.',
  },
  {
    question: 'Qual o investimento para registrar uma marca?',
    answer: 'Oferecemos o menor investimento do mercado com transparência total. Sem mensalidade, sem taxas ocultas. Solicite um orçamento e comprove o menor custo do Brasil. COBRIMOS ORÇAMENTOS de concorrentes.',
  },
  {
    question: 'Preciso ter empresa para registrar uma marca?',
    answer: 'Não. Pessoas físicas também podem registrar marcas. Pode ser para uso futuro ou para proteger um projeto que ainda não virou empresa.',
  },
  {
    question: 'O que é o INPI?',
    answer: 'O INPI (Instituto Nacional da Propriedade Industrial) é o órgão brasileiro responsável pelo registro de marcas, patentes e outros ativos de propriedade intelectual.',
  },
  {
    question: 'O que acontece se não registrar minha marca?',
    answer: 'Sem registro, sua marca não tem proteção legal. Outro pessoa pode registrar nome igual ou parecido e você pode ser obrigado a parar de usar sua marca.',
  },
  {
    question: 'Posso usar a marca antes dela estar registrada?',
    answer: 'Sim! Após o protocolo no INPI, você já pode usar o símbolo ™ (Trade Mark) indicando que pediu o registro. Após o deferimento, pode usar o ® (Registered).',
  },
  {
    question: 'Quais documentos preciso para registrar?',
    answer: 'Basta fornecer seus dados pessoais (CPF, RG, endereço) e os dados da marca (nome,logan,descrição). Nossa equipe prepara toda a documentação necessária.',
  },
  {
    question: 'O que são classes de produtos e serviços?',
    answer: 'As classes determinam em quais setores sua marca será protegida. Existem 45 classes (34 de produtos e 11 de serviços). Nossa equipe orienta a escolher as classes corretas.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 bg-bg-primary relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green/5 to-transparent" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-heading font-bold mb-4">
            Perguntas <span className="text-gradient">frequentes</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Tire suas dúvidas sobre o processo de registro de marca
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-bg-card rounded-xl border border-border overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-bg-card-hover/50 transition-colors"
              >
                <span className="text-lg font-medium text-white pr-4">
                  {faq.question}
                </span>
                <div className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                  openIndex === index ? 'bg-brand text-white' : 'bg-bg-primary text-text-muted'
                }`}>
                  {openIndex === index ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </div>
              </button>

              <motion.div
                initial={false}
                animate={{ 
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6">
                  <p className="text-text-secondary leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-text-secondary mb-4">
            Ainda tem dúvidas?
          </p>
          <a 
            href="/contato" 
            className="btn-primary inline-flex"
          >
            Falar com um especialista
          </a>
        </motion.div>
      </div>
    </section>
  )
}