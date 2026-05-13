import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre Nós - Regiweb Fortaleza | Registro de Marcas',
  description: 'Conheça a Regiweb, empresa de Fortaleza-CE especializada em registro de marcas no INPI. Menor investimento do Brasil, sem mensalidade, sem taxas ocultas. +2.500 marcas registradas.',
  keywords: 'sobre regiweb, quem somos registro marca, empresa registro marca Fortaleza',
}

export default function SobreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}