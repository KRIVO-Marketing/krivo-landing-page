import Image from "next/image";
import { CTA_NOTE, DiagnosticoCta } from "./DiagnosticoCta";

export function FinalCta() {
  return (
    <footer className="p-3">
      <div
        data-lazy-bg="close"
        className="box-border flex flex-col gap-[clamp(56px,8vw,128px)] rounded-[28px] bg-navy-deep bg-cover bg-center bg-no-repeat px-[clamp(20px,5vw,72px)] pt-[clamp(28px,5vw,72px)] pb-[clamp(20px,2.6vw,36px)] text-white mobile:bg-bottom-left"
      >
        <div id="cta-final" className="flex max-w-[720px] flex-col gap-8">
          <h2 className="font-display text-[clamp(34px,5.2vw,80px)] leading-[1.04] font-normal tracking-[-0.04em]">
            Seu diagnóstico começa com uma mensagem.
          </h2>
          <p className="max-w-[520px] text-[18px] leading-[1.6] text-shadow-halo">
            A gente olha seu Instagram, seu perfil no Google e seu site e te mostra o que corrigir
            primeiro.
          </p>
          <div className="flex flex-col gap-3">
            <DiagnosticoCta position="rodape" className="self-start" />
            <p className="text-[15px] text-white/85 text-shadow-halo">{CTA_NOTE}</p>
          </div>
        </div>
        <div className="flex flex-col gap-[clamp(20px,2.6vw,36px)]">
          <Image
            src="/assets/krivo-logo.svg"
            alt="KRIVO"
            width={482}
            height={159}
            unoptimized
            className="block h-auto w-full"
          />
          <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-2 border-t border-[rgba(255,255,255,0.4)] pt-5 text-[14px] font-medium text-shadow-halo">
            <span>© 2026 KRIVO Marketing Digital · Campinas, SP</span>
            <a
              href="https://www.instagram.com/krivo.mkt/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center text-white opacity-90 hover:text-white hover:opacity-100"
            >
              @krivo.mkt no Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
