import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KRIVO — Home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Mesmo carregamento do design original: next/font injeta um fallback
            baseado em Arial que muda os glifos fora do subset (→, ↑). */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- layout raiz, vale para todas as páginas */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;500;600&family=Lexend:wght@300;400;500&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
