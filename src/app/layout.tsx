import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Regiweb Fortaleza - Menor Investimento do Mercado | Registro de Marca no INPI",
  description: "Empresa de Fortaleza-CE. O menor investimento do mercado para registro de marca no INPI. Sem mensalidade, sem taxas ocultas. COBRIMOS ORÇAMENTOS. +2.500 marcas registradas.",
  keywords: "registro de marca, INPI, registro marca Fortaleza, menor investimento, marca sem mensalidade, sem taxas ocultas, registro marca Ceará",
  openGraph: {
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}