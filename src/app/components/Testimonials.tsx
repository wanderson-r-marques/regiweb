"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Silva",
    company: "Tech Solutions",
    quote: "Processo simples e rápido. Minha marca foi registrada sem nenhuma complication. Recomendo!",
  },
  {
    name: "Ana Oliveira",
    company: "Beleza Cosméticos",
    quote: "Atendimento excelente! Sempre me mantiveram informada sobre cada etapa do processo.",
  },
  {
    name: "Pedro Santos",
    company: "Sabor Restaurante",
    quote: "O menor preço que encontrei, sem esconder taxas. Resultado excepcional.",
  },
  {
    name: "Maria Costa",
    company: "Moda Fashion",
    quote: "Profissionais sérios e eficientes. Minha marca está protegida e valorizada.",
  },
  {
    name: "João Mendes",
    company: "Construtora JM",
    quote: "Fizeram tudo online de forma prática. Não precisei ir a nenhum escritório.",
  },
  {
    name: "Laura Ferreira",
    company: "Educa Cursos",
    quote: "COBRIMOS ORÇAMENTOS é real! Melhoraram o preço que eu tinha. Super recomendo.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-4">
            O que nossos{" "}
            <span className="text-gradient">clientes</span> dizem
          </h2>
          <p className="text-text-secondary">
            +2.500 clientes satisfeitos em todo o Brasil
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card card-glow relative"
            >
              <Quote className="w-8 h-8 text-brand/20 absolute top-4 right-4" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-green text-green" />
                ))}
              </div>

              <p className="text-text-secondary text-sm mb-6 relative z-10">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center text-white font-semibold text-sm">
                  {testimonial.name[0]}
                </div>
                <div>
                  <p className="font-medium text-white text-sm">{testimonial.name}</p>
                  <p className="text-text-muted text-xs">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}