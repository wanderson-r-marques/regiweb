import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Clientes - Regiweb Fortaleza | Registro de Marcas',
  description: 'Veja empresas que confiam na Regiweb para proteger suas marcas. +2.500 marcas registradas em todo o Brasil.',
  keywords: 'clientes regiweb, marcas registradas, registro de marca',
}

export default function ClientesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}