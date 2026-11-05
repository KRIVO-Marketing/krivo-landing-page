import { CTA_NOTE, DiagnosticoCta } from "@/components/shared/DiagnosticoCta";
import { PartnersLine } from "@/components/shared/PartnersLine";
import { Texture } from "@/components/shared/Texture";

/** CTA final: segundo e último bloco texturizado. */
export function CaseFinalCta() {
  return (
    <section className="relative isolate box-border flex flex-col gap-[clamp(24px,2.8vw,40px)] overflow-hidden rounded-[28px] bg-navy-deep p-[clamp(28px,5vw,64px)] text-white">
      <Texture name="bg-close" />
      {/* Escurece o lado do texto para manter a leitura sobre o granulado */}
      <span aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(26,44,85,0.7),rgba(26,44,85,0)_75%)]" />
      <h2 className="max-w-[13em] font-display text-[clamp(36px,5.2vw,72px)] leading-[1.04] font-normal tracking-[-0.04em] text-shadow-halo">
        Sua marca pode ser o próximo case.
      </h2>
      <div className="flex max-w-[560px] flex-col gap-7">
        <p className="text-[clamp(17px,1.4vw,20px)] leading-normal text-white text-shadow-halo">
          Diagnóstico gratuito do seu Instagram, perfil no Google e site, para negócios locais de Campinas e região.
        </p>
        <div className="flex flex-col gap-3">
          <DiagnosticoCta position="rodape" className="self-start" />
          <p className="text-[15px] text-white/85">{CTA_NOTE}</p>
        </div>
        <PartnersLine />
      </div>
    </section>
  );
}
