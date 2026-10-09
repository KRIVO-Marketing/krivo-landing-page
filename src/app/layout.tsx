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
  // Imagem do LCP: sem o preload ela só seria descoberta depois do CSS.
  preload("/assets/bg-hero.webp", { as: "image", type: "image/webp", fetchPriority: "high" });
  preload("/fonts/albert-sans-latin.woff2", { as: "font", type: "font/woff2", crossOrigin: "anonymous" });
  preload("/fonts/lexend-latin.woff2", { as: "font", type: "font/woff2", crossOrigin: "anonymous" });

  return (
    <html lang="pt-BR">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
