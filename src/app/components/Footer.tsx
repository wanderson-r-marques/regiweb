import Link from "next/link";
import { Shield, Mail, Phone, MapPin } from "lucide-react";

const institutionalLinks = [
  { href: "/sobre", label: "Sobre Nós" },
  { href: "/como-funciona", label: "Como Funciona" },
  { href: "/blog", label: "Blog" },
];

const serviceLinks = [
  { href: "/pesquisar-marca", label: "Pesquisar Marca" },
  { href: "/contato", label: "Registro de Marca" },
];

const helpLinks = [
  { href: "/contato", label: "Fale Conosco" },
  { href: "/contato", label: "FAQ" },
];

export default function Footer() {
  return (
    <footer className="bg-bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-brand flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="font-heading font-bold text-xl text-white">
                Regi<span className="text-gradient">web</span>
              </span>
            </Link>
            <p className="text-text-secondary text-sm">
              Empresa de Fortaleza-CE. O menor investimento do mercado para registro de marca no INPI. Sem mensalidade, sem taxas ocultas.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Institucional</h4>
            <ul className="space-y-2">
              {institutionalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-text-secondary hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Serviços</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-text-secondary hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-text-secondary text-sm">
                <Mail className="w-4 h-4 text-brand" />
                <span>contato@regiweb.com.br</span>
              </li>
              <li className="flex items-center gap-2 text-text-secondary text-sm">
                <Phone className="w-4 h-4 text-green" />
                <span>(85) 99999-9999</span>
              </li>
              <li className="flex items-center gap-2 text-text-secondary text-sm">
                <MapPin className="w-4 h-4 text-brand" />
                <span>Fortaleza-CE</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-text-muted text-sm">
            © {new Date().getFullYear()} Regiweb. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}