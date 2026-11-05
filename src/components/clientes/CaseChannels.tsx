import { eyebrow, section, sectionTitle } from "@/components/clientes/styles";
import type { Client, ClientService } from "@/lib/clients";

const icons: Record<ClientService, React.ReactNode> = {
  "Google Meu Negócio": (
    <>
      <path d="M12 21s-6-5.2-6-10a6 6 0 0 1 12 0c0 4.8-6 10-6 10z" />
      <circle cx="12" cy="11" r="2.2" />
    </>
  ),
  Instagram: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="17" cy="7" r="0.6" />
    </>
  ),
  Site: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M3 9.5h18" />
    </>
  ),
};

function Icon({ service }: { service: ClientService }) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      {icons[service]}
    </svg>
  );
}

/** Canais: colunas separadas por linhas finas, sem caixas. */
export function CaseChannels({ client }: { client: Client }) {
  return (
    <section aria-labelledby="canais" className={section}>
      <div className="flex flex-col gap-3">
        <p className={eyebrow}>O que foi feito</p>
        <h2 id="canais" className={`${sectionTitle} max-w-[16em]`}>
          Google, Instagram e site, trabalhando juntos.
        </h2>
      </div>
      <div className="grid gap-x-10 gap-y-12 min-[900px]:grid-cols-3">
        {client.channels.map((c) => (
          <article key={c.service} className="flex flex-col gap-4 border-t border-line-strong pt-6">
            <div className="flex items-center gap-3 text-navy">
              <Icon service={c.service} />
              <span className="text-[15px] font-medium">{c.service}</span>
            </div>
            <h3 className="font-display text-[clamp(22px,2.2vw,28px)] leading-[1.2] font-normal tracking-[-0.025em]">{c.headline}</h3>
            <p className="text-[17px] leading-[1.55] text-navy/80">{c.delivered}</p>
            <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
              {c.points.map((point) => (
                <li key={point} className="flex gap-3 text-[16px] leading-[1.5]">
                  <span aria-hidden className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-navy" />
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
