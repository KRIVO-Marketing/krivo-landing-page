import Image from "next/image";
import { smallest, srcSet } from "@/lib/images";
import { CTA_NOTE, DiagnosticoCta } from "./DiagnosticoCta";

const partners = ["socio-1", "socio-2", "socio-3", "socio-4"] as const;

export function DiagnosticoHero() {
  return (
    <header className="p-3">
      {/* Fundo em CSS, sem imagem: o texto vira o LCP e a primeira tela abre rápido no celular. */}
      <div className="relative isolate overflow-hidden rounded-[28px] bg-navy-deep bg-[radial-gradient(120%_80%_at_85%_0%,#3a5590_0%,transparent_60%),radial-gradient(90%_70%_at_0%_100%,#1a2c55_0%,transparent_70%)]">
        <div className="box-border flex min-h-[min(100svh-24px,820px)] flex-col justify-between gap-12 p-[clamp(20px,2.6vw,36px)] text-white">
          {/* Sem menu e sem links: a página tem uma ação só. */}
          <Image
            src="/assets/krivo-logo.svg"
            alt="KRIVO"
            width={482}
            height={159}
            unoptimized
            loading="eager"
            className="block h-[26px] w-auto self-start"
          />

          <div className="flex flex-col gap-[clamp(24px,2.8vw,40px)]">
            <h1 className="max-w-[13em] font-display text-[clamp(36px,6.2vw,92px)] leading-[1.04] font-normal tracking-[-0.04em]">
              Você cuida do seu negócio. A gente cuida de como ele aparece.
            </h1>
            <div className="flex max-w-[560px] flex-col gap-7">
              <p className="text-[clamp(17px,1.4vw,20px)] leading-normal text-white">
                Diagnóstico gratuito do seu Instagram, perfil no Google e site, para negócios
                locais de Campinas e região.
              </p>
              <div id="cta-topo" className="flex flex-col gap-3">
                <DiagnosticoCta position="topo" className="self-start" />
                <p className="text-[15px] text-white/85">{CTA_NOTE}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex shrink-0">
                  {partners.map((name, i) => (
                    <picture key={name} className={`block shrink-0 ${i > 0 ? "-ml-3" : ""}`}>
                      <source type="image/avif" srcSet={srcSet(name, "avif")} sizes="44px" />
                      <img
                        src={smallest(name, "webp")}
                        srcSet={srcSet(name, "webp")}
                        sizes="44px"
                        alt=""
                        width={44}
                        height={44}
                        decoding="async"
                        className="block size-11 rounded-full bg-mist object-cover object-top ring-2 ring-navy-deep"
                      />
                    </picture>
                  ))}
                </div>
                <p className="text-[15px] leading-snug text-white/85">
                  Quem te atende são os sócios da Krivo, aqui de Campinas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
