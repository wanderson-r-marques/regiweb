import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://regiweb.com.br'),
  title: 'Regiweb Fortaleza - Menor Investimento do Mercado | Registro de Marca no INPI',
  description: 'Empresa de Fortaleza-CE. O menor investimento do mercado para registro de marca no INPI. Sem mensalidade, sem taxas ocultas. COBRIMOS ORÇAMENTOS. +2.500 marcas registradas.',
  keywords: 'registro de marca, INPI, registro marca Fortaleza, menor investimento, marca sem mensalidade, sem taxas ocultas, registro marca Ceará',
  openGraph: {
    title: 'Regiweb Fortaleza - Menor Investimento do Mercado para Registro de Marca',
    description: 'Empresa de Fortaleza-CE. O menor investimento do mercado. Sem mensalidade, sem taxas ocultas. COBRIMOS ORÇAMENTOS.',
    type: 'website',
    locale: 'pt_BR',
  },
  robots: 'index, follow',
  verification: {
    google: 'google-site-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="bg-bg-primary text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}