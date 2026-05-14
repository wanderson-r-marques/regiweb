'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Carlos Silva',
    company: 'Café Gourmet',
    text: 'Processo super rápido e transparente. O atendimento foi excelente do início ao fim. Recomendo para todos que precisam registrar sua marca.',
    rating: 5,
  },
  {
    name: 'Juliana Martins',
    company: 'Studio de Design',
    text: 'Tinha medo da burocracia, mas o Regiweb fez tudo muito fácil. Minha marca foi registrada em tempo recorde. Muito satisfeita!',
    rating: 5,
  },
  {
    name: 'Roberto Alves',
    company: 'Tech Solutions',
    text: 'Equipe muito profissional. Sempre tiravam minhas dúvidas rapidamente. O melhor investimento que fiz para meu negócio.',
    rating: 5,
  },
  {
    name: 'Mariana Costa',
    company: 'Espaço Beleza',
    text: 'Serviço impecável! Desde o primeiro contato, fui muito bem atendidas. Minha marca está protegida e minha empresa crescendo.',
    rating: 5,
  },
  {
    name: 'Paulo Henrique',
    company: 'Restaurante Sabor',
    text: 'Excelente experiência. O processo foi 100% online e não precisei sair de casa. Minha marca está registrada e estou tranquilo.',
    rating: 5,
  },
  {
    name: 'Fernanda Lima',
    company: 'Academia Fit',
    text: 'Recomendo de olhos fechados! O suporte é humanizado e o preço é justo. Minha marca foi registrada sem complicações.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-green/5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-heading font-bold mb-4">
            O que nossos <span className="text-gradient">clientes</span> dizem
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            A satisfação dos nossos clientes é o maior prêmio que podemos receber.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-bg-primary rounded-xl p-6 border border-border hover:border-brand/30 transition-colors group"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <div className="relative mb-4">
                <Quote className="w-8 h-8 text-brand/20 absolute -top-1 -left-1" />
                <p className="text-text-secondary leading-relaxed pl-4">
                  "{testimonial.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand to-green flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{testimonial.name}</h4>
                    <p className="text-text-muted text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-text-muted">
            <span className="text-green font-bold">+2.500</span> clientes satisfeitos em todo o Brasil
          </p>
        </motion.div>
      </div>
    </section>
  )
}