import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Como Funciona | Regiweb - Processo de Registro de Marca",
  description: "Entenda como funciona o processo de registro de marca no INPI. Em apenas 3 etapas, sua marca está protegida.",
};

export default function ComoFuncionaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}