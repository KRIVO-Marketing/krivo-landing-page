import type { Client } from "@/lib/clients";

/** Estratégia complementar (ex.: coleta de avaliações). */
export function CaseStrategy({ strategy }: { strategy: NonNullable<Client["strategy"]> }) {
  return (
    <section className="flex flex-wrap items-center gap-x-10 gap-y-6 rounded-[24px] bg-cloud p-[clamp(24px,4vw,48px)]">
      <span aria-hidden className="inline-flex size-14 shrink-0 items-center justify-center rounded-full bg-white text-navy ring-1 ring-line">
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
          <path d="M8.5 8.5a5 5 0 0 1 0 7" />
          <path d="M12 6a8.5 8.5 0 0 1 0 12" />
          <path d="M15.5 3.5a12 12 0 0 1 0 17" />
        </svg>
      </span>
      <div className="flex min-w-0 flex-[1_1_320px] flex-col gap-2">
        <h2 className="font-display text-[clamp(22px,2.4vw,30px)] leading-[1.15] font-normal tracking-[-0.025em]">{strategy.title}</h2>
        <p className="max-w-[44em] text-[17px] leading-[1.6] text-navy/80">{strategy.text}</p>
      </div>
    </section>
  );
}
