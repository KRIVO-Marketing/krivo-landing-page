import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowIcon } from "@/components/ArrowIcon";
import { CTA_NOTE, DiagnosticoCta } from "@/components/diagnostico/DiagnosticoCta";
import { PartnersLine } from "@/components/diagnostico/PartnersLine";
import { Texture } from "@/components/Texture";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { clients, getClient, type ClientService } from "@/lib/clients";

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

// Padrões repetidos na página: eyebrow (14px, acima do mínimo de 11 pt), título de seção e texto secundário com contraste ≥ 5:1.
const eyebrow = "text-[14px] tracking-[0.08em] text-navy/75 uppercase";
const sectionTitle = "font-display text-[clamp(28px,3.4vw,44px)] leading-[1.1] font-normal tracking-[-0.03em]";
const section = "flex flex-col gap-[clamp(28px,4vw,48px)]";
const backPill =
  "inline-flex h-11 items-center gap-2 rounded-full bg-cloud px-4 text-[15px] font-medium text-navy ring-1 ring-line transition-colors duration-250 hover:bg-[#e4e9f6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy";

export default async function ClientPage({ params }: PageProps<"/clientes/[slug]">) {
  const client = getClient((await params).slug);
  if (!client) notFound();

  return (
    <div className="overflow-x-clip bg-white font-sans text-[17px] leading-[1.6] text-navy [-webkit-font-smoothing:antialiased]">
      {/* Barra flutuante (camada funcional): voltar à esquerda, ação principal à direita */}
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

      <main className="mx-auto box-border flex max-w-[1200px] flex-col gap-[clamp(56px,6vw,96px)] px-[clamp(20px,4vw,48px)] pt-6 pb-[clamp(48px,6vw,96px)]">
        {/* Cabeçalho simples: nome do cliente e números de apoio */}
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

        {/* História: etiqueta acima, destaque à esquerda e apoio + links à direita */}
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

        {/* Prova: print do Google e vídeos produzidos */}
        {(client.proof || client.videos) && (
          <section aria-labelledby="prova" className={section}>
            <div className="flex flex-col gap-3">
              <p className={eyebrow}>Na prática</p>
              <h2 id="prova" className={`${sectionTitle} max-w-[16em]`}>
                O resultado no Google e o conteúdo que criamos.
              </h2>
            </div>
            {client.proof && (
              <div className="grid items-center gap-x-16 gap-y-8 min-[900px]:grid-cols-[minmax(0,565px)_1fr]">
                <figure className="m-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={client.proof.src}
                    alt={client.proof.alt}
                    width={client.proof.width}
                    height={client.proof.height}
                    loading="lazy"
                    decoding="async"
                    className="block h-auto w-full rounded-[20px] ring-1 ring-line"
                  />
                </figure>
                <div className="flex flex-col gap-3">
                  {client.rank && (
                    <p className="font-display text-[clamp(56px,8vw,112px)] leading-[0.95] font-light tracking-[-0.05em]">
                      {client.rank.from}º <span aria-hidden>→</span> {client.rank.to}º
                      <span className="sr-only"> lugar</span>
                    </p>
                  )}
                  <p className="max-w-[24em] text-[17px] leading-[1.5] text-navy/80">{client.proof.caption}</p>
                </div>
              </div>
            )}
            {client.videos && (
              <div className="flex flex-col gap-4">
                <h3 className="font-display text-[clamp(22px,2.2vw,28px)] leading-[1.2] font-normal tracking-[-0.025em]">Vídeos feitos para a {client.name.replace(/^Barbearia /, "")}</h3>
                <div className="grid items-start gap-6 min-[900px]:grid-cols-[3.16fr_1fr]">
                  {client.videos.map((v) => (
                    <video
                      key={v.src}
                      controls
                      playsInline
                      preload="none"
                      poster={v.poster}
                      width={v.width}
                      height={v.height}
                      aria-label={v.title}
                      className={`block h-auto w-full rounded-[20px] bg-navy-deep ring-1 ring-line ${v.height > v.width ? "mx-auto max-w-[360px] min-[900px]:max-w-none" : ""}`}
                    >
                      <source src={v.src} type="video/mp4" />
                    </video>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* Canais: colunas separadas por linhas finas, sem caixas */}
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

        {/* Visibilidade: lista plana em duas colunas */}
        {client.seo && (
          <section aria-labelledby="visibilidade" className={section}>
            <div className="flex flex-col gap-3">
              <p className={eyebrow}>Visibilidade · Google e IA</p>
              <h2 id="visibilidade" className={`${sectionTitle} max-w-[18em]`}>
                {client.seo.title}
              </h2>
              {client.seo.intro && <p className="max-w-[40em] text-[18px] leading-[1.6] text-navy/80">{client.seo.intro}</p>}
            </div>
            <ul className="m-0 grid list-none gap-x-12 p-0 min-[760px]:grid-cols-2">
              {client.seo.items.map((item) => (
                <li key={item.title} className="flex flex-col gap-1 border-t border-line py-5">
                  <h3 className="font-display text-[19px] font-normal tracking-[-0.02em]">{item.title}</h3>
                  <p className="text-[16px] leading-[1.55] text-navy/80">{item.text}</p>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Estratégia */}
        {client.strategy && (
          <section className="flex flex-wrap items-center gap-x-10 gap-y-6 rounded-[24px] bg-cloud p-[clamp(24px,4vw,48px)]">
            <span aria-hidden className="inline-flex size-14 shrink-0 items-center justify-center rounded-full bg-white text-navy ring-1 ring-line">
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
                <path d="M8.5 8.5a5 5 0 0 1 0 7" />
                <path d="M12 6a8.5 8.5 0 0 1 0 12" />
                <path d="M15.5 3.5a12 12 0 0 1 0 17" />
              </svg>
            </span>
            <div className="flex min-w-0 flex-[1_1_320px] flex-col gap-2">
              <h2 className="font-display text-[clamp(22px,2.4vw,30px)] leading-[1.15] font-normal tracking-[-0.025em]">{client.strategy.title}</h2>
              <p className="max-w-[44em] text-[17px] leading-[1.6] text-navy/80">{client.strategy.text}</p>
            </div>
          </section>
        )}

        {/* CTA final: segundo e último bloco texturizado */}
        <section className="relative isolate box-border flex flex-col gap-[clamp(24px,2.8vw,40px)] overflow-hidden rounded-[28px] bg-navy-deep p-[clamp(28px,5vw,64px)] text-white">
          <Texture name="bg-close" />
          {/* Escurece o lado do texto para manter a leitura sobre o granulado */}
          <span aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(26,44,85,0.7),rgba(26,44,85,0)_75%)]" />
          <h2 className="max-w-[13em] font-display text-[clamp(36px,5.2vw,72px)] leading-[1.04] font-normal tracking-[-0.04em] text-shadow-halo">
            Sua marca pode ser o próximo case.
          </h2>
          <div className="flex max-w-[560px] flex-col gap-7">
            <p className="text-[clamp(17px,1.4vw,20px)] leading-normal text-white text-shadow-halo">
              Diagnóstico gratuito do seu Instagram, perfil no Google e site, para negócios locais de Campinas e região.
            </p>
            <div className="flex flex-col gap-3">
              <DiagnosticoCta position="rodape" className="self-start" />
              <p className="text-[15px] text-white/85">{CTA_NOTE}</p>
            </div>
            <PartnersLine />
          </div>
        </section>
      </main>
    </div>
  );
}
