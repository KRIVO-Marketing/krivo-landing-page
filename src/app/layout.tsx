import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const GA_ID = "G-86HVDHE5M5";

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
      <body>
        {/* Google tag (gtag.js) */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="google-tag" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
        </Script>
        {children}
      </body>
    </html>
  );
}
