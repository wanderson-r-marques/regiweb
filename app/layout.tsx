import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Regiweb - Registro de Marcas Simplificado',
  description: 'Simplifique o registro da sua marca com o Regiweb. Processo rápido, seguro e sem burocracia.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-bg-primary text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}