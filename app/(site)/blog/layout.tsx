import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - Artigos sobre Registro de Marca | Regiweb Fortaleza',
  description: 'Artigos, dicas e guias sobre registro de marcas no INPI. Aprenda como proteger sua marca com o menor investimento do mercado. Regiweb Fortaleza - sem taxas ocultas.',
  keywords: 'blog registro marca, artigos registro marca, dicas INPI, guia registro marca',
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}