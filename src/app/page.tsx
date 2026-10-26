import { preload } from "react-dom";
import { About } from "@/components/About";
import { Channels } from "@/components/Channels";
import { Footer } from "@/components/Footer";
import { GradualBlur } from "@/components/GradualBlur";
import { Hero } from "@/components/Hero";
import { LazyBackgrounds } from "@/components/LazyBackgrounds";
import { Method } from "@/components/Method";
import { Services } from "@/components/Services";
import { Team } from "@/components/Team";
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
        <Channels />
      </main>
      <Footer />
      <GradualBlur />
      <LazyBackgrounds />
    </div>
  );
}
