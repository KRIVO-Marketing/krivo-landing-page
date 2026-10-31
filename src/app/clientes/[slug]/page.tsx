import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowIcon } from "@/components/ArrowIcon";
import { CtaLink } from "@/components/CtaLink";
import { LazyBackgrounds } from "@/components/LazyBackgrounds";
import { clients, getClient, initials, type ClientService } from "@/lib/clients";

export const dynamicParams = false;

export function generateStaticParams() {
  return clients.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/clientes/[slug]">): Promise<Metadata> {
  const client = getClient((await params).slug);
  if (!client) return {};
  return {
    title: `${client.name} | Case KRIVO`,
    description: client.summary,
    alternates: { canonical: `/clientes/${client.slug}` },
  };
}

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

export default async function ClientPage({ params }: PageProps<"/clientes/[slug]">) {
  const client = getClient((await params).slug);
  if (!client) notFound();

  return (
    <div className="overflow-x-hidden bg-white font-sans text-[16px] leading-[1.55] text-navy [-webkit-font-smoothing:antialiased]">
      <header className="p-3">
        <div data-lazy-bg="close" className="box-border flex items-center justify-between gap-6 rounded-[20px] bg-navy-deep bg-cover bg-center bg-no-repeat px-[clamp(20px,4vw,48px)] py-5 text-white">
          <Link href="/" aria-label="KRIVO, voltar ao início">
            <Image src="/assets/krivo-logo.svg" alt="KRIVO" width={482} height={159} unoptimized className="block h-8 w-auto" />
          </Link>
          <Link href="/#clientes" className="inline-flex h-10 items-center gap-2 rounded-full border border-[rgba(255,255,255,0.6)] bg-[rgba(26,44,85,0.55)] px-5 text-[15px] font-medium text-white">
            <span className="rotate-180">
              <ArrowIcon size={16} strokeWidth={1.6} />
            </span>
            Todos os clientes
          </Link>
        </div>
      </header>

      <main className="mx-auto box-border flex max-w-[1200px] flex-col gap-[clamp(16px,2vw,24px)] px-[clamp(20px,4vw,48px)] py-[clamp(40px,6vw,88px)]">
        {/* Cabeçalho */}
        <div className="flex flex-wrap items-center justify-between gap-6 pb-[clamp(8px,2vw,24px)]">
          <div className="flex items-center gap-5">
            {client.logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={client.logo} alt="" width={72} height={72} className="block size-[72px] shrink-0 rounded-full object-cover ring-1 ring-line" />
            ) : (
              <span aria-hidden className="inline-flex size-[72px] shrink-0 items-center justify-center rounded-full bg-cloud font-display text-[24px] tracking-[-0.02em] ring-1 ring-line">
                {initials(client.name)}
              </span>
            )}
            <div className="flex flex-col gap-2">
              {client.segment && <span className="text-[13px] tracking-[0.1em] text-muted uppercase">{client.segment}</span>}
              <h1 className="font-display text-[clamp(32px,5vw,64px)] leading-[1.04] font-light tracking-[-0.035em]">{client.name}</h1>
            </div>
          </div>
          {client.links && (
            <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
              {client.links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-line-strong px-4 py-2 text-[14px] text-navy transition-colors duration-250 hover:bg-cloud"
                  >
                    {l.label}
                    <ArrowIcon size={14} strokeWidth={1.6} />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Resultado: destaque escuro + números */}
        <div className="grid gap-[clamp(16px,2vw,24px)] min-[900px]:grid-cols-[1.6fr_1fr]">
          <div data-lazy-bg="close" className="flex flex-col justify-between gap-10 rounded-[24px] bg-navy-deep bg-cover bg-center bg-no-repeat px-[clamp(24px,4vw,56px)] py-[clamp(28px,4vw,56px)] text-white">
            <span className="text-[13px] tracking-[0.1em] text-white uppercase text-shadow-halo">Resultado em 1 semana</span>
            <div className="flex flex-col gap-4">
              <span className="font-display text-[clamp(64px,11vw,152px)] leading-[0.95] font-light tracking-[-0.045em]">
                {client.highlight.value}
              </span>
              <span className="max-w-[24em] text-[clamp(17px,1.6vw,20px)] leading-[1.45] text-white text-shadow-halo">{client.highlight.label}</span>
            </div>
          </div>
          <div className="grid gap-[clamp(16px,2vw,24px)]">
            {client.facts?.map((f) => (
              <div key={f.label} className="flex flex-col justify-center gap-2 rounded-[24px] bg-cloud px-[clamp(24px,3vw,40px)] py-6">
                <span className="font-display text-[clamp(44px,6vw,80px)] leading-none font-light tracking-[-0.04em]">{f.value}</span>
                <span className="text-[15px] text-muted">{f.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* História */}
        <div className="grid gap-x-10 gap-y-4 rounded-[24px] border border-line px-[clamp(24px,4vw,56px)] py-[clamp(24px,3.4vw,44px)] text-[clamp(17px,1.5vw,19px)] leading-[1.6] min-[900px]:grid-cols-2">
          {client.story.map((p, i) => (
            <p key={p} className={i === 0 ? "text-navy" : "text-muted"}>
              {p}
            </p>
          ))}
        </div>

        {/* Um card por canal */}
        <div className="grid gap-[clamp(16px,2vw,24px)] min-[900px]:grid-cols-3">
          {client.channels.map((c) => (
            <article key={c.service} className="flex flex-col gap-5 rounded-[24px] bg-cloud p-[clamp(24px,2.6vw,36px)]">
              <div className="flex items-center gap-3 text-[13px] tracking-[0.1em] text-muted uppercase">
                <span className="inline-flex size-11 items-center justify-center rounded-full bg-white text-navy ring-1 ring-line">
                  <Icon service={c.service} />
                </span>
                {c.service}
              </div>
              <h2 className="font-display text-[clamp(24px,2.4vw,32px)] leading-[1.15] font-normal tracking-[-0.03em]">{c.headline}</h2>
              <p className="text-[15px] leading-[1.55] text-muted">{c.delivered}</p>
              <ul className="m-0 mt-auto flex list-none flex-col gap-2.5 border-t border-line pt-5 p-0">
                {c.points.map((point) => (
                  <li key={point} className="flex gap-3 text-[15px] leading-[1.5]">
                    <span aria-hidden className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-navy" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* SEO / AEO */}
        {client.seo && (
          <div className="flex flex-col gap-[clamp(20px,3vw,32px)] rounded-[24px] bg-cloud p-[clamp(24px,4vw,56px)]">
            <div className="flex flex-col gap-3">
              <span className="text-[13px] tracking-[0.1em] text-muted uppercase">Visibilidade · Google e IA</span>
              <h2 className="max-w-[18em] font-display text-[clamp(26px,3.4vw,44px)] leading-[1.1] font-normal tracking-[-0.03em]">{client.seo.title}</h2>
              <p className="max-w-[44em] text-[clamp(16px,1.4vw,18px)] leading-[1.6] text-muted">{client.seo.intro}</p>
            </div>
            <ul className="m-0 grid list-none grid-cols-1 gap-3 p-0 min-[640px]:grid-cols-2 min-[1000px]:grid-cols-3">
              {client.seo.items.map((item) => (
                <li key={item.title} className="flex flex-col gap-2 rounded-[18px] bg-white p-5 ring-1 ring-line-soft">
                  <h3 className="font-display text-[18px] font-normal tracking-[-0.02em]">{item.title}</h3>
                  <p className="text-[15px] leading-[1.5] text-muted">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Estratégia */}
        {client.strategy && (
          <div className="flex flex-col gap-3 rounded-[24px] border border-line-strong px-[clamp(24px,4vw,56px)] py-[clamp(28px,4vw,48px)]">
            <span className="text-[13px] tracking-[0.1em] text-muted uppercase">Estratégia</span>
            <h2 className="font-display text-[clamp(26px,3vw,40px)] leading-[1.1] font-normal tracking-[-0.03em]">{client.strategy.title}</h2>
            <p className="max-w-[44em] text-[clamp(16px,1.4vw,18px)] leading-[1.6] text-muted">{client.strategy.text}</p>
          </div>
        )}

        {/* CTA */}
        <div data-lazy-bg="close" className="mt-[clamp(16px,3vw,40px)] flex flex-wrap items-center justify-between gap-8 rounded-[24px] bg-navy-deep bg-cover bg-center bg-no-repeat px-[clamp(24px,4vw,56px)] py-[clamp(28px,4vw,48px)] text-white">
          <p className="max-w-[14em] font-display text-[clamp(26px,3.4vw,44px)] leading-[1.1] font-normal tracking-[-0.03em]">
            Sua marca pode ser o próximo case.
          </p>
          <CtaLink />
        </div>
      </main>
      <LazyBackgrounds />
    </div>
  );
}
