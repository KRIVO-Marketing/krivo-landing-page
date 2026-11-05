import { eyebrow } from "@/components/clientes/styles";
import { ArrowIcon } from "@/components/shared/ArrowIcon";
import type { Client } from "@/lib/clients";

/** História: etiqueta acima, destaque à esquerda e apoio + links à direita. */
export function CaseStory({ client }: { client: Client }) {
  return (
    <section className="flex flex-col gap-6">
      <p className={eyebrow}>O resultado</p>
      <div className="grid gap-x-16 gap-y-8 min-[900px]:grid-cols-[1.4fr_1fr] min-[900px]:items-end">
        <p className="font-display text-[clamp(24px,2.6vw,34px)] leading-[1.25] font-normal tracking-[-0.025em]">{client.story[0]}</p>
        <div className="flex flex-col gap-5">
          {client.story.slice(1).map((p) => (
            <p key={p} className="max-w-[28em] text-[18px] leading-[1.6] text-navy/80">
              {p}
            </p>
          ))}
          {client.links && (
            <ul className="m-0 flex list-none flex-wrap gap-3 p-0">
              {client.links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center gap-2 rounded-full border border-line-strong px-5 text-[15px] font-medium text-navy transition-colors duration-250 hover:bg-cloud focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
                  >
                    Abrir {l.label === "Site" ? "site" : l.label}
                    <span className="sr-only"> (abre em nova aba)</span>
                    <ArrowIcon size={14} strokeWidth={1.6} />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
