'use client'

import Link from 'next/link'
import { Shield, Mail, Phone, MapPin } from 'lucide-react'

const footerLinks = {
  institucional: [
    { label: 'Sobre Nós', href: '/sobre' },
    { label: 'Como Funciona', href: '/como-funciona' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contato', href: '/contato' },
  ],
  servicos: [
    { label: 'Pesquisar Marca', href: '/pesquisar-marca' },
    { label: 'Registro de Marca', href: '/contato' },
    { label: 'Monitoramento', href: '/contato' },
    { label: 'Renovação', href: '/contato' },
  ],
  ajuda: [
    { label: 'Perguntas Frequentes', href: '/blog' },
    { label: 'Guia de Registro', href: '/blog' },
    { label: 'Termos de Uso', href: '#' },
    { label: 'Política de Privacidade', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand to-green flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-heading font-bold text-white">
                Regi<span className="text-brand">web</span>
              </span>
            </Link>
            <p className="text-text-secondary mb-6 max-w-sm">
              Empresa de <span className="text-brand font-medium">Fortaleza-CE</span>. Simplificamos o registro de marcas para que você possa focar no crescimento do seu negócio. 
              <span className="text-green font-medium"> Menor investimento do mercado: pagamento único, sem mensalidade, sem taxas ocultas. COBRIMOS ORÇAMENTOS.</span>
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-text-secondary">
                <Mail className="w-5 h-5 text-brand" />
                <span>contato@regiweb.com.br</span>
              </div>
              <div className="flex items-center gap-3 text-text-secondary">
                <Phone className="w-5 h-5 text-brand" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-3 text-text-secondary">
                <MapPin className="w-5 h-5 text-brand" />
                <span>Fortaleza, Ceará</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-heading font-bold mb-4">Institucional</h4>
            <ul className="space-y-3">
              {footerLinks.institucional.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-text-secondary hover:text-brand transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-heading font-bold mb-4">Serviços</h4>
            <ul className="space-y-3">
              {footerLinks.servicos.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-text-secondary hover:text-brand transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-heading font-bold mb-4">Ajuda</h4>
            <ul className="space-y-3">
              {footerLinks.ajuda.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-text-secondary hover:text-brand transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm">
            © 2024 Regiweb. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <span className="text-text-muted text-sm">Desenvolvido com</span>
            <span className="text-brand text-sm font-medium">♥ no Brasil</span>
          </div>
        </div>
      </div>
    </footer>
  )
}