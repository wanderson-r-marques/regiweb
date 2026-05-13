import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fale Conosco - Regiweb Fortaleza | Registro de Marca',
  description: 'Entre em contato com a Regiweb de Fortaleza-CE. Menor investimento do mercado. Sem mensalidade, sem taxas ocultas. COBRIMOS ORÇAMENTOS.',
  keywords: 'contato registro marca, falar especialista registro marca, whatsapp registro marca Fortaleza',
}

export default function ContatoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}