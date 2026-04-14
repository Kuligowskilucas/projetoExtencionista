import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Qualificação em Tecnologias na Educação — IFPR Pinhais",
  description:
    "Curso de qualificação profissional em uso de tecnologias. IFPR Câmpus Pinhais · Comunidade Graciosa · 2026.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
