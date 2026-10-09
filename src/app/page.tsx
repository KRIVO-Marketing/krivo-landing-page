import { About } from "@/components/About";
import { Channels } from "@/components/Channels";
import { Footer } from "@/components/Footer";
import { GradualBlur } from "@/components/GradualBlur";
import { Hero } from "@/components/Hero";
import { Method } from "@/components/Method";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <div
      id="topo"
      className="overflow-x-hidden bg-white font-sans text-[16px] leading-[1.55] text-navy [-webkit-font-smoothing:antialiased]"
    >
      <Hero />
      <main>
        <About />
        <Services />
        <Method />
        <Channels />
        {/* Seção Projetos oculta até haver clientes: <Projects /> (import de "@/components/Projects") */}
      </main>
      <Footer />
      <GradualBlur />
    </div>
  );
}
