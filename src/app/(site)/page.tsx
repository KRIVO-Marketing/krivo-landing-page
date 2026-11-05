import { preload } from "react-dom";
import { About } from "@/components/home/About";
import { Faq } from "@/components/home/Faq";
import { Footer } from "@/components/home/Footer";
import { GradualBlur } from "@/components/home/GradualBlur";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Method } from "@/components/home/Method";
import { NextStep } from "@/components/home/NextStep";
import { Problem } from "@/components/home/Problem";
import { Results } from "@/components/home/Results";
import { Services } from "@/components/home/Services";
import { StickyCta } from "@/components/home/StickyCta";
import { Team } from "@/components/home/Team";
import { LazyBackgrounds } from "@/components/shared/LazyBackgrounds";
import { HERO_SIZES, largest, srcSet } from "@/lib/images";

export default function Home() {
  // Imagem do LCP: sem o preload ela só seria descoberta depois do CSS.
  preload(largest("bg-hero", "avif"), { as: "image", type: "image/avif", fetchPriority: "high", imageSrcSet: srcSet("bg-hero", "avif"), imageSizes: HERO_SIZES });

  return (
    <div
      id="topo"
      className="overflow-x-hidden bg-white font-sans text-[16px] leading-[1.55] text-navy [-webkit-font-smoothing:antialiased] mobile:pb-[88px]"
    >
      <Hero />
      <main>
        <Problem />
        <About />
        <Results />
        <HowItWorks />
        <Team />
        <Services />
        <Method />
        <NextStep />
        <Faq />
      </main>
      <Footer />
      <StickyCta />
      <GradualBlur />
      <LazyBackgrounds />
    </div>
  );
}
