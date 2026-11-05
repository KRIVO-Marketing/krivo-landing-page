import Image from "next/image";
import { HERO_SIZES, dimensions, largest, srcSet } from "@/lib/images";
import { DIAGNOSTICO_TEXT } from "@/lib/whatsapp";
import { ArrowIcon } from "@/components/shared/ArrowIcon";
import { CTA_NOTE, DiagnosticoCta } from "@/components/shared/DiagnosticoCta";
import { PartnersLine } from "@/components/shared/PartnersLine";
import { WhatsAppLink } from "@/components/shared/WhatsAppLink";

const navLinks = [
  { href: "#resultados", label: "Resultados" },
  { href: "#diagnostico", label: "Diagnóstico" },
  { href: "#metodo", label: "Como trabalhamos" },
  { href: "#perguntas", label: "Perguntas" },
];

export function Hero() {
  const { width, height } = dimensions("bg-hero");
  return (
    <header className="p-3">
      <div className="relative isolate overflow-hidden rounded-[28px] bg-navy-deep">
        <picture>
          <source type="image/avif" srcSet={srcSet("bg-hero", "avif")} sizes={HERO_SIZES} />
          <img
            src={largest("bg-hero", "webp")}
            srcSet={srcSet("bg-hero", "webp")}
            sizes={HERO_SIZES}
            alt=""
            width={width}
            height={height}
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 -z-10 h-full w-full object-cover object-center mobile:object-[12%_center]"
          />
        </picture>
        {/* Véu suave no topo: acalma o granulado atrás do menu */}
        <span aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-40 bg-[linear-gradient(180deg,rgba(26,44,85,0.75),rgba(26,44,85,0))]" />
        <div className="box-border flex min-h-[clamp(640px,56vw,840px)] flex-col justify-between gap-18 p-[clamp(20px,2.6vw,36px)] text-white">
        <nav aria-label="Principal" className="flex items-center justify-between gap-3 min-[460px]:gap-6">
          <a href="#topo" aria-label="KRIVO, início" className="flex min-h-11 shrink-0 items-center">
            <Image
              src="/assets/krivo-logo.svg"
              alt="KRIVO"
              width={482}
              height={159}
              unoptimized
              loading="eager"
              className="block h-[26px] w-auto"
            />
          </a>
          <div className="hidden items-center gap-2 text-[15px] font-medium whitespace-nowrap text-shadow-halo min-[1024px]:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex h-11 items-center px-4 text-white transition-opacity duration-200 ease-[ease] hover:opacity-70"
              >
                {link.label}
              </a>
            ))}
          </div>
          <WhatsAppLink
            position="menu"
            message={DIAGNOSTICO_TEXT}
            className="inline-flex h-11 shrink-0 items-center rounded-full bg-white px-4 text-[14px] font-medium whitespace-nowrap text-navy min-[380px]:px-[22px] min-[380px]:text-[15px] transition-[translate,background-color] duration-250 ease-[ease] hover:-translate-y-0.5"
          >
            Quero meu diagnóstico
          </WhatsAppLink>
        </nav>

        <div className="flex flex-col gap-[clamp(24px,2.8vw,40px)]">
          <h1 className="max-w-[13em] font-display text-[clamp(36px,6.2vw,92px)] leading-[1.04] font-normal tracking-[-0.04em]">
            Seu negócio é bom. Seu Instagram e seu Google não mostram isso.
          </h1>
          <div className="flex max-w-[560px] flex-col gap-7">
            <p className="text-[clamp(17px,1.4vw,20px)] leading-normal text-white text-shadow-halo">
              A Krivo cuida do seu Instagram, do seu perfil no Google e do seu site, para quem procura
              seu serviço em Campinas te achar e confiar.
            </p>
            <div id="cta-topo" className="flex flex-col gap-3">
              <DiagnosticoCta position="topo" className="self-start" />
              <p className="text-[15px] text-white/85 text-shadow-halo">{CTA_NOTE}</p>
            </div>
            {/* Prova perto da oferta: o case real logo abaixo do botão */}
            <a
              href="#resultados"
              className="self-start py-2.5 text-[15px] leading-snug font-medium text-white text-shadow-halo underline decoration-white/40 underline-offset-4 hover:text-white hover:decoration-white"
            >
              {/* Seta em linha com o texto: quando a frase quebra, ela acompanha a última palavra */}
              Caso real: Barbearia Quintana, do 5º ao 2º no Google em uma{" "}
              <span className="whitespace-nowrap">
                semana{" "}
                <span className="inline-block align-[-2px]">
                  <ArrowIcon size={14} strokeWidth={1.6} />
                </span>
              </span>
            </a>
            <PartnersLine />
          </div>
        </div>
        </div>
      </div>
    </header>
  );
}
