'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

export default function Contato() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'contato@regiweb.com.br' },
    { icon: Phone, label: 'Telefone', value: '(11) 99999-9999' },
    { icon: MapPin, label: 'Endereço', value: 'São Paulo, SP' },
    { icon: Clock, label: 'Atendimento', value: 'Seg a Sex, 9h às 18h' },
  ]

  return (
    <div className="pt-20">
      <section className="py-24 bg-bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-green/10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-heading font-bold mb-6">
              Fale <span className="text-gradient">conosco</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Nossa equipe está pronta para tirar suas dúvidas e ajudar você a proteger sua marca.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-heading font-bold text-white mb-8">
                  Entre em contato
                </h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 rounded-full bg-green/20 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-white mb-3">
                      Mensagem enviada!
                    </h3>
                    <p className="text-text-secondary">
                      Obrigado pelo contato. Retornaremos em breve.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-text-secondary text-sm mb-2">
                        Nome completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="input"
                        placeholder="Seu nome"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-text-secondary text-sm mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="input"
                          placeholder="seu@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-text-secondary text-sm mb-2">
                          Telefone
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="input"
                          placeholder="(11) 99999-9999"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-text-secondary text-sm mb-2">
                        Empresa (opicional)
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="input"
                        placeholder="Nome da sua empresa"
                      />
                    </div>

                    <div>
                      <label className="block text-text-secondary text-sm mb-2">
                        Mensagem *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="input resize-none"
                        placeholder="Como podemos ajudar?"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-primary w-full flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Enviar mensagem
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-8"
            >
              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-bg-card rounded-xl border border-border"
                  >
                    <div className="w-12 h-12 rounded-lg bg-brand/20 flex items-center justify-center shrink-0">
                      <info.icon className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <div className="text-text-muted text-sm">{info.label}</div>
                      <div className="text-white font-medium">{info.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-brand/20 to-green/20 rounded-2xl p-8 border border-brand/20">
                <h3 className="text-xl font-heading font-bold text-white mb-4">
                  Primeira consulta gratuita!
                </h3>
                <p className="text-text-secondary mb-6">
                  Não sabe por onde começar? Agende uma conversa sem compromisso 
                  e tire todas as suas dúvidas sobre registro de marca.
                </p>
                <a 
                  href="https://wa.me/5511999999999" 
                  target="_blank"
                  className="btn-primary inline-flex"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}