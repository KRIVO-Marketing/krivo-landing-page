import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { GradualBlur } from "@/components/GradualBlur";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Method } from "@/components/Method";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <div
      id="topo"
      className="overflow-x-hidden bg-white font-sans text-[16px] leading-[1.55] text-navy [-webkit-font-smoothing:antialiased]"
    >
      <Hero />
      <Marquee />
      <main>
        <About />
        <Services />
        <Method />
        <Projects />
      </main>
      <Footer />
      <GradualBlur />
    </div>
  );
}
