import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pesquisar Marca no INPI - Regiweb Fortaleza | Verificar Disponibilidade',
  description: 'Pesquise se sua marca está disponível no INPI. Regiweb Fortaleza - menor investimento do Brasil. Sem mensalidade, sem taxas ocultas. Primeira análise gratuita.',
  keywords: 'pesquisar marca INPI, verificar disponibilidade marca, consulta marca Fortaleza',
}

export default function PesquisarMarcaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}