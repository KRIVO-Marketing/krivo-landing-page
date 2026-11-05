import Image from "next/image";
import { WHATSAPP_DISPLAY } from "@/lib/whatsapp";
import { CTA_NOTE, DiagnosticoCta } from "@/components/shared/DiagnosticoCta";
import { WhatsAppLink } from "@/components/shared/WhatsAppLink";

const contacts = [
  { label: "WhatsApp", value: WHATSAPP_DISPLAY, whatsapp: true },
  { label: "E-mail", value: "krivomarketing@gmail.com", href: "mailto:krivomarketing@gmail.com" },
  { label: "Instagram", value: "@krivo.mkt", href: "https://www.instagram.com/krivo.mkt/" },
];

export function Footer() {
  return (
    <footer id="contato" className="p-3">
      <div data-lazy-bg="close" className="box-border flex flex-col gap-[clamp(56px,8vw,128px)] rounded-[28px] bg-navy-deep bg-cover bg-center bg-no-repeat px-[clamp(20px,5vw,72px)] pt-[clamp(28px,5vw,72px)] pb-[clamp(20px,2.6vw,36px)] text-white mobile:bg-bottom-left">
        <div className="flex flex-wrap items-start justify-between gap-12">
          <div id="cta-final" className="flex min-w-0 flex-[2_1_420px] flex-col gap-8">
            <h2 className="max-w-[11em] font-display text-[clamp(34px,5.2vw,80px)] leading-[1.04] font-normal tracking-[-0.04em]">
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
          <div className="box-border flex flex-[0_1_340px] flex-col rounded-[20px] bg-white px-7 py-2 text-navy mobile:flex-auto">
            {contacts.map((contact, index) => (
              <div
                key={contact.label}
                className={`flex flex-col gap-1 py-5 ${index > 0 ? "border-t border-line" : ""}`}
              >
                <span className="text-[13px] tracking-[0.1em] text-muted uppercase">
                  {contact.label}
                </span>
                {contact.whatsapp ? (
                  <WhatsAppLink position="contato" className="font-display text-[19px] font-normal tracking-[-0.02em]">
                    {contact.value}
                  </WhatsAppLink>
                ) : (
                  <a
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-[19px] font-normal tracking-[-0.02em]"
                  >
                    {contact.value}
                  </a>
                )}
              </div>
            ))}
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
            <span>Ser visto, reconhecido e lembrado.</span>
            <a
              href="#topo"
              className="inline-flex min-h-11 items-center text-white opacity-90 hover:opacity-100"
            >
              Voltar ao topo ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
