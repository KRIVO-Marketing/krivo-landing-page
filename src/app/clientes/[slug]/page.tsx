import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowIcon } from "@/components/ArrowIcon";
import { CtaLink } from "@/components/CtaLink";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { clients, getClient, type Client, type ClientService } from "@/lib/clients";
import { dimensions, largest, srcSet } from "@/lib/images";

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

/** Textura da KRIVO como imagem no HTML (mesma técnica do hero da home): não depende de JavaScript para aparecer. */
function Texture({ name, priority = false, tall = false, imgClassName = "" }: { name: "bg-hero" | "bg-close"; priority?: boolean; tall?: boolean; imgClassName?: string }) {
  // Card alto e estreito (celular): object-cover escala pela ALTURA, então a imagem renderiza ~1,6x a altura em largura.
  // Sem isso o navegador escolheria a variante de 960px e ampliaria quase 2x (granulado borrado).
  const sizes = tall ? "(max-width: 899px) 1400px, (max-width: 1200px) 100vw, 1200px" : "(max-width: 1200px) 100vw, 1200px";
  return (
    <span aria-hidden className="pointer-events-none absolute inset-0 -z-10 block">
      <picture>
        <source type="image/avif" srcSet={srcSet(name, "avif")} sizes={sizes} />
        <img
          src={largest(name, "webp")}
          srcSet={srcSet(name, "webp")}
          sizes={sizes}
          alt=""
          width={dimensions(name).width}
          height={dimensions(name).height}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
          className={`block h-full w-full object-cover object-center ${imgClassName}`}
        />
      </picture>
    </span>
  );
}

/** Escada do ranking no Google: a marca sobe de `from` para `to`. */
function RankLadder({ client }: { client: Client }) {
  if (!client.rank) return null;
  const { from, to, slots } = client.rank;
  return (
    <div className="flex w-full max-w-[360px] flex-col gap-2" role="img" aria-label={`Ranking no Google: de ${from}º para ${to}º lugar`}>
      <span className="mb-1 w-fit rounded-full bg-[rgba(26,44,85,0.65)] px-3 py-1 text-[14px] tracking-[0.08em] text-white uppercase">Ranking no Google, na região</span>
      {Array.from({ length: slots }, (_, i) => i + 1).map((pos) => {
        const now = pos === to;
        const before = pos === from;
        return (
          <div
            key={pos}
            className={`flex h-[52px] items-center gap-2.5 rounded-2xl px-4 min-[480px]:gap-3 ${
              now ? "bg-white text-navy shadow-[0_12px_32px_rgba(10,20,50,0.35)]" : "border border-white/25 bg-[rgba(26,44,85,0.65)] text-white"
            } ${before ? "border-dashed" : ""}`}
          >
            <span className="w-6 shrink-0 font-display text-[17px] tracking-[-0.02em] min-[480px]:w-8">{pos}º</span>
            {now ? (
              <>
                {client.logo && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={client.logo} alt="" width={28} height={28} className="size-7 rounded-full object-cover" />
                )}
                <span className="font-display text-[15px] font-normal tracking-[-0.02em] whitespace-nowrap min-[480px]:text-[16px]">{client.name}</span>
                <span className="ml-auto text-[13px] font-medium min-[480px]:text-[14px]">agora</span>
              </>
            ) : before ? (
              <span className="text-[14px]">antes</span>
            ) : (
              <span className="text-[14px] text-white/80">outro perfil</span>
            )}
          </div>
        );
      })}
    </div>
  );
}

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
        {/* Resultado: único bloco texturizado da página, junto com o CTA final */}
        <section
          aria-labelledby="resultado"
          className="relative isolate box-border grid gap-x-12 gap-y-12 overflow-hidden rounded-[28px] bg-navy-deep p-[clamp(24px,4vw,56px)] text-white min-[900px]:grid-cols-[1.25fr_1fr] min-[900px]:items-end"
        >
          {/* Zoom (só no desktop) ancorado à esquerda: o lado claro do granulado sai do quadro e o escuro fica atrás do conteúdo */}
          <Texture name="bg-hero" priority tall imgClassName="origin-left min-[900px]:scale-[1.25]" />
          <span aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(26,44,85,0.55),rgba(26,44,85,0)_65%)]" />
          <div className="flex flex-col gap-[clamp(32px,5vw,64px)]">
            <h1 className="font-display text-[clamp(28px,3.4vw,44px)] leading-[1.1] font-normal tracking-[-0.03em] text-shadow-halo">{client.name}</h1>

            <div className="flex flex-col gap-4">
              <p id="resultado" className="font-display text-[clamp(72px,12vw,176px)] leading-[0.92] font-light tracking-[-0.05em]">
                {client.highlight.value}
              </p>
              <p className="max-w-[22em] text-[clamp(18px,1.7vw,22px)] leading-[1.4] font-medium text-white text-shadow-halo">{client.highlight.short ?? client.highlight.label}</p>
              {client.facts && (
                <p className="m-0 flex flex-wrap gap-x-6 gap-y-1 text-[17px] leading-none font-medium text-white text-shadow-halo">
                  {client.facts.map((f) => (
                    <span key={f.label}>
                      <strong className="font-display text-[22px] font-normal tracking-[-0.02em]">{f.value}</strong> {f.label}
                    </span>
                  ))}
                </p>
              )}
            </div>
          </div>
          <RankLadder client={client} />
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
        <section className="relative isolate box-border flex flex-wrap items-center justify-between gap-8 overflow-hidden rounded-[28px] bg-navy-deep p-[clamp(28px,5vw,64px)] text-white">
          <Texture name="bg-close" />
          <h2 className="max-w-[12em] font-display text-[clamp(30px,4vw,52px)] leading-[1.08] font-normal tracking-[-0.035em] text-shadow-halo">
            Sua marca pode ser o próximo case.
          </h2>
          <CtaLink position="rodape" />
        </section>
      </main>
    </div>
  );
}
