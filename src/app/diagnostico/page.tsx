import type { Metadata } from "next";
import { DiagnosticoHero } from "@/components/diagnostico/DiagnosticoHero";
import { Faq } from "@/components/diagnostico/Faq";
import { FinalCta } from "@/components/diagnostico/FinalCta";
import { HowItWorks } from "@/components/diagnostico/HowItWorks";
import { NextStep } from "@/components/diagnostico/NextStep";
import { Problem } from "@/components/diagnostico/Problem";
import { StickyCta } from "@/components/diagnostico/StickyCta";
import { LazyBackgrounds } from "@/components/LazyBackgrounds";
import { Team } from "@/components/Team";
import { largest } from "@/lib/images";

const TITLE = "Diagnóstico gratuito | KRIVO, Campinas";
const DESCRIPTION =
  "Você cuida do seu negócio. A gente cuida de como ele aparece. Diagnóstico gratuito do seu Instagram, perfil no Google e site, para negócios locais de Campinas e região.";

// O metadata da página substitui (merge raso) os campos do layout: openGraph e twitter vão completos.
export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/diagnostico" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/diagnostico",
    siteName: "KRIVO",
    title: "Você cuida do seu negócio. A gente cuida de como ele aparece.",
    description: DESCRIPTION,
    images: [{ url: largest("bg-hero", "webp"), alt: "KRIVO" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Você cuida do seu negócio. A gente cuida de como ele aparece.",
    description: DESCRIPTION,
    images: [largest("bg-hero", "webp")],
  },
};

export default function Diagnostico() {
  return (
    <div className="overflow-x-hidden bg-white font-sans text-[16px] leading-[1.55] text-navy [-webkit-font-smoothing:antialiased] mobile:pb-[88px]">
      <DiagnosticoHero />
      <main>
        <Problem />
        <HowItWorks />
        <Team
          title="Quem vai te atender"
          text="Quem te atende no diagnóstico é quem você vê no nosso Instagram. Somos os sócios da Krivo, de Campinas."
          className="py-[clamp(72px,10vw,160px)]"
        />
        <NextStep />
        <Faq />
      </main>
      <FinalCta />
      <StickyCta />
      <LazyBackgrounds />
    </div>
  );
}
