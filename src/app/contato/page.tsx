"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle } from "lucide-react";

export default function ContatoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">
              Entre em{" "}
              <span className="text-gradient">contato</span>
            </h1>
            <p className="text-text-secondary text-lg">
              Estamos prontos para ajudar você a proteger sua marca
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="card text-center py-16"
                  >
                    <CheckCircle className="w-16 h-16 text-green mx-auto mb-4" />
                    <h3 className="font-heading font-semibold text-xl text-white mb-2">
                      Mensagem enviada!
                    </h3>
                    <p className="text-text-secondary">
                      Entraremos em contato em breve.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="card space-y-4">
                    <div>
                      <label className="block text-sm text-text-secondary mb-2">
                        Nome *
                      </label>
                      <input
                        type="text"
                        required
                        className="input"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-text-secondary mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          className="input"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="seu@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-text-secondary mb-2">
                          Telefone
                        </label>
                        <input
                          type="tel"
                          className="input"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(00) 00000-0000"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-text-secondary mb-2">
                        Empresa
                      </label>
                      <input
                        type="text"
                        className="input"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Nome da sua empresa"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-text-secondary mb-2">
                        Mensagem *
                      </label>
                      <textarea
                        required
                        rows={4}
                        className="input resize-none"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Como podemos ajudar?"
                      />
                    </div>
                    <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                      <Send className="w-4 h-4" />
                      Enviar Mensagem
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className="card">
                <h3 className="font-heading font-semibold text-white mb-4">
                  Informações de contato
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-text-muted text-xs">Email</p>
                      <p className="text-white text-sm">contato@regiweb.com.br</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-green/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-green" />
                    </div>
                    <div>
                      <p className="text-text-muted text-xs">Telefone</p>
                      <p className="text-white text-sm">(85) 99999-9999</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-text-muted text-xs">Localização</p>
                      <p className="text-white text-sm">Fortaleza-CE</p>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/5585999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="card block bg-green/10 border-green/50 hover:border-green transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-green flex items-center justify-center">
                    <MessageCircle className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-white">
                      Fale pelo WhatsApp
                    </p>
                    <p className="text-text-secondary text-sm">
                      Resposta mais rápida
                    </p>
                  </div>
                </div>
              </a>

              <div className="card">
                <h3 className="font-heading font-semibold text-white mb-4">
                  Atendimento
                </h3>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green" />
                    Primeira análise gratuita
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green" />
                    Sem compromisso
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green" />
                    Atendimento 100% online
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green" />
                    Suporte dedicado
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}