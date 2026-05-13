import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Regiweb - Artigos sobre Registro de Marca",
  description: "Fique por dentro das novidades sobre registro de marcas, dicas do INPI e muito mais. Articles educativos sobre propriedade intelectual.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}