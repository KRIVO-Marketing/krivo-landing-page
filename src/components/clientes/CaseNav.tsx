import Link from "next/link";
import { WhatsAppLink } from "@/components/shared/WhatsAppLink";

const backPill =
  "inline-flex h-11 items-center gap-2 rounded-full bg-cloud px-4 text-[15px] font-medium text-navy ring-1 ring-line transition-colors duration-250 hover:bg-[#e4e9f6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy";

/** Barra flutuante (camada funcional): voltar à esquerda, ação principal à direita. */
export function CaseNav() {
  return (
    <header className="sticky top-3 z-20 mx-auto box-border max-w-[1200px] px-[clamp(12px,4vw,48px)] pt-3">
      <nav
        aria-label="Principal"
        className="flex items-center justify-between gap-3 rounded-full border border-white/70 bg-white/85 p-2 text-navy shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_8px_30px_rgba(34,56,98,0.14)] ring-1 ring-line-soft backdrop-blur-2xl backdrop-saturate-150 [@media(prefers-reduced-transparency:reduce)]:bg-white [@media(prefers-reduced-transparency:reduce)]:backdrop-blur-none"
      >
        <Link href="/#clientes" className={backPill}>
          <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 5l-7 7 7 7" />
          </svg>
          Clientes
        </Link>
        <Link href="/" aria-label="KRIVO, ir ao início" className="hidden min-[560px]:flex">
          {/* Logo (SVG branco) recolorido em navy via máscara */}
          <span
            aria-hidden
            className="block h-6 w-[72px] bg-navy"
            style={{ WebkitMask: "url(/assets/krivo-logo.svg) center / contain no-repeat", mask: "url(/assets/krivo-logo.svg) center / contain no-repeat" }}
          />
        </Link>
        <WhatsAppLink
          position="menu"
          className="inline-flex h-11 items-center rounded-full bg-navy px-5 text-[15px] font-medium whitespace-nowrap text-white transition-[translate] duration-250 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy motion-reduce:transition-none motion-reduce:hover:translate-y-0"
        >
          Falar com a KRIVO
        </WhatsAppLink>
      </nav>
    </header>
  );
}
