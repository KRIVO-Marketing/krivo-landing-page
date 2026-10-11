import type { Metadata } from "next";
import Script from "next/script";
import { preload } from "react-dom";
import "./globals.css";

const GA_ID = "G-86HVDHE5M5";

const SITE_URL = "https://www.krivomkt.com.br";
const DESCRIPTION =
  "A KRIVO transforma negócios digitalmente desestruturados em marcas com autoridade, identidade e posicionamento, com estratégia, criatividade e tecnologia.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "KRIVO | Marketing, branding e posicionamento digital",
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "KRIVO",
    title: "KRIVO | Ser visto, reconhecido e lembrado",
    description: DESCRIPTION,
    images: [{ url: "/assets/bg-hero.webp", alt: "KRIVO" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "KRIVO | Ser visto, reconhecido e lembrado",
    description: DESCRIPTION,
    images: ["/assets/bg-hero.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "KRIVO",
  url: SITE_URL,
  logo: `${SITE_URL}/assets/krivo-logo.svg`,
  description: DESCRIPTION,
  email: "krivomarketing@gmail.com",
  sameAs: ["https://www.instagram.com/krivo.mkt/"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Fontes críticas: descobertas mais cedo para evitar FOIT/layout shift.
  preload("/fonts/albert-sans-latin.woff2", { as: "font", type: "font/woff2", crossOrigin: "anonymous" });
  preload("/fonts/lexend-latin.woff2", { as: "font", type: "font/woff2", crossOrigin: "anonymous" });

  return (
    <html lang="pt-BR">
      <head>
        {/* Preload responsivo do Hero (LCP): mobile baixa ~119KB em vez de 1.6MB */}
        <link
          rel="preload"
          as="image"
          href="/assets/bg-hero-mobile.webp"
          type="image/webp"
          media="(max-width: 760px)"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/assets/bg-hero.webp"
          type="image/webp"
          media="(min-width: 761px)"
          fetchPriority="high"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        {/* Google tag (gtag.js): carregado em tempo ocioso para desobstruir LCP e FCP */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="lazyOnload" />
        <Script id="google-tag" strategy="lazyOnload">
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
