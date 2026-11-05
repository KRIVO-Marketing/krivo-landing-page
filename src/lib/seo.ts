import type { Metadata } from "next";
import { largest } from "@/lib/images";
import { SITE_DESCRIPTION, SITE_URL } from "@/lib/site";

/** Metadados padrão do site; cada página pode sobrescrever título, descrição e canonical. */
export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "KRIVO | Agência de Marketing em Campinas",
  keywords: ["KRIVO", "KRIVO Campinas", "agência de marketing Campinas", "marketing digital Campinas", "branding Campinas", "posicionamento de marca"],
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "KRIVO",
    title: "KRIVO | Ser visto, reconhecido e lembrado",
    description: SITE_DESCRIPTION,
    images: [{ url: largest("bg-hero", "webp"), alt: "KRIVO" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "KRIVO | Ser visto, reconhecido e lembrado",
    description: SITE_DESCRIPTION,
    images: [largest("bg-hero", "webp")],
  },
};

/** Dados estruturados (schema.org) da KRIVO, em todas as páginas. */
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": `${SITE_URL}/#organization`,
  name: "KRIVO",
  alternateName: ["KRIVO Marketing", "KRIVO Campinas"],
  url: SITE_URL,
  telephone: "+55-19-99679-2750",
  address: { "@type": "PostalAddress", addressLocality: "Campinas", addressRegion: "SP", addressCountry: "BR" },
  areaServed: [{ "@type": "City", name: "Campinas" }, { "@type": "AdministrativeArea", name: "Região Metropolitana de Campinas" }, { "@type": "Country", name: "Brasil" }],
  knowsAbout: ["Marketing digital", "Branding", "Posicionamento de marca", "Gestão de redes sociais", "Criação de sites"],
  logo: `${SITE_URL}/assets/krivo-logo.svg`,
  description: SITE_DESCRIPTION,
  email: "krivomarketing@gmail.com",
  sameAs: ["https://www.instagram.com/krivo.mkt/"],
};
