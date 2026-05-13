import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Como Funciona o Registro de Marca - Regiweb Fortaleza',
  description: 'Entenda as 4 fases do registro de marca no INPI. Regiweb Fortaleza - menor investimento do mercado, sem mensalidade, sem taxas ocultas.',
  keywords: 'como registrar marca, processo registro marca INPI, fases registro marca',
}

export default function ComoFuncionaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}