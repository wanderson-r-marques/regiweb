import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre | Regiweb - Quem Somos",
  description: "Conheça a Regiweb. Empresa de Fortaleza-CE especializada em registro de marcas no INPI.",
};

export default function SobreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}