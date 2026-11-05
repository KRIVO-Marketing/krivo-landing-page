import { eyebrow, section, sectionTitle } from "@/components/clientes/styles";
import type { Client } from "@/lib/clients";

/** Visibilidade: lista plana em duas colunas. */
export function CaseSeo({ seo }: { seo: NonNullable<Client["seo"]> }) {
  return (
    <section aria-labelledby="visibilidade" className={section}>
      <div className="flex flex-col gap-3">
        <p className={eyebrow}>Visibilidade · Google e IA</p>
        <h2 id="visibilidade" className={`${sectionTitle} max-w-[18em]`}>
          {seo.title}
        </h2>
        {seo.intro && <p className="max-w-[40em] text-[18px] leading-[1.6] text-navy/80">{seo.intro}</p>}
      </div>
      <ul className="m-0 grid list-none gap-x-12 p-0 min-[760px]:grid-cols-2">
        {seo.items.map((item) => (
          <li key={item.title} className="flex flex-col gap-1 border-t border-line py-5">
            <h3 className="font-display text-[19px] font-normal tracking-[-0.02em]">{item.title}</h3>
            <p className="text-[16px] leading-[1.55] text-navy/80">{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
