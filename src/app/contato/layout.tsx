import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato | Regiweb - Fale Conosco",
  description: "Entre em contato com a Regiweb. Solicite seu orçamento para registro de marca no INPI.",
};

export default function ContatoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}