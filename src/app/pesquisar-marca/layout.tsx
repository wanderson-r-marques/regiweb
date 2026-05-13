import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pesquisar Marca | Regiweb - Verifique Disponibilidade",
  description: "Pesquise se sua marca está disponível para registro no INPI. Primeira análise gratuita.",
};

export default function PesquisarMarcaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}