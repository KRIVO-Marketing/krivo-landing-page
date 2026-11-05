import { preload } from "react-dom";
import { About } from "@/components/home/About";
import { Channels } from "@/components/home/Channels";
import { Footer } from "@/components/home/Footer";
import { GradualBlur } from "@/components/home/GradualBlur";
import { Hero } from "@/components/home/Hero";
import { Method } from "@/components/home/Method";
import { Results } from "@/components/home/Results";
import { Services } from "@/components/home/Services";
import { LazyBackgrounds } from "@/components/shared/LazyBackgrounds";
import { Team } from "@/components/shared/Team";
import { HERO_SIZES, largest, srcSet } from "@/lib/images";

export default function Home() {
  // Imagem do LCP: sem o preload ela só seria descoberta depois do CSS. Fica aqui (e não no layout)
  // para a /diagnostico, que não usa essa imagem, não baixá-la.
  preload(largest("bg-hero", "avif"), { as: "image", type: "image/avif", fetchPriority: "high", imageSrcSet: srcSet("bg-hero", "avif"), imageSizes: HERO_SIZES });

  return (
    <div
      id="topo"
      className="overflow-x-hidden bg-white font-sans text-[16px] leading-[1.55] text-navy [-webkit-font-smoothing:antialiased]"
    >
      <Hero />
      <main>
        <About />
        <Team />
        <Services />
        <Method />
        <Results />
        <Channels />
      </main>
      <Footer />
      <GradualBlur />
      <LazyBackgrounds />
    </div>
  );
}
