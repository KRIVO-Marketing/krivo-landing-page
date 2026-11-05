import type { Client } from "@/lib/clients";

/** Cabeçalho simples: nome do cliente e números de apoio. */
export function CaseIntro({ client }: { client: Client }) {
  return (
    <section aria-labelledby="cliente" className="flex flex-col gap-4 pt-[clamp(16px,3vw,40px)]">
      <h1 id="cliente" className="font-display text-[clamp(40px,6vw,80px)] leading-[1.02] font-normal tracking-[-0.04em]">
        {client.name}
      </h1>
      {client.facts && (
        <p className="m-0 flex flex-wrap gap-x-6 gap-y-1 text-[17px] leading-none font-medium text-navy/80">
          {client.facts.map((f) => (
            <span key={f.label}>
              <strong className="font-display text-[22px] font-normal tracking-[-0.02em] text-navy">{f.value}</strong> {f.label}
            </span>
          ))}
        </p>
      )}
    </section>
  );
}
