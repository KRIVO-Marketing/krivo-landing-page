import { About } from "@/components/About";
import { Channels } from "@/components/Channels";
import { Footer } from "@/components/Footer";
import { GradualBlur } from "@/components/GradualBlur";
import { Hero } from "@/components/Hero";
import { LazyBackgrounds } from "@/components/LazyBackgrounds";
import dynamic from "next/dynamic";
import { Method } from "@/components/Method";

const Services = dynamic(() => import("@/components/Services").then((m) => m.Services), {
  ssr: true,
});

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
      </main>
      <Footer />
      <GradualBlur />
      <LazyBackgrounds />
    </div>
  );
}
