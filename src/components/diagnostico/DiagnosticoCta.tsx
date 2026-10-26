import type { CtaPosition } from "@/lib/analytics";
import { DIAGNOSTICO_TEXT } from "@/lib/whatsapp";
import { ArrowIcon } from "../ArrowIcon";
import { WhatsAppLink } from "../WhatsAppLink";

export const CTA_LABEL = "Quero meu diagnóstico gratuito";
export const CTA_NOTE = "20 minutos, sem custo e sem compromisso";

type DiagnosticoCtaProps = {
  position: CtaPosition;
  /** "light": botão branco sobre fundo escuro; "dark": botão azul sobre fundo claro. */
  tone?: "light" | "dark";
  className?: string;
};

export function DiagnosticoCta({ position, tone = "light", className = "" }: DiagnosticoCtaProps) {
  const colors =
    tone === "light"
      ? "bg-white text-navy hover:text-navy"
      : "bg-navy text-white hover:text-white";
  const iconColors = tone === "light" ? "bg-navy text-white" : "bg-white text-navy";

  return (
    <WhatsAppLink
      position={position}
      message={DIAGNOSTICO_TEXT}
      className={`inline-flex h-[56px] items-center justify-between gap-3.5 rounded-full pr-2 pl-[26px] text-[16px] font-medium transition-[translate] duration-250 ease-[ease] hover:-translate-y-0.5 mobile:w-full ${colors} ${className}`}
    >
      {CTA_LABEL}
      <span className={`inline-flex size-[40px] shrink-0 items-center justify-center rounded-full ${iconColors}`}>
        <ArrowIcon size={18} strokeWidth={1.6} />
      </span>
    </WhatsAppLink>
  );
}
