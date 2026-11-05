import { clients, type Client } from "@/lib/clients";
import { ArrowIcon } from "@/components/shared/ArrowIcon";

/** Um case: o resultado em destaque, a prova no Google e os vídeos produzidos. Pouco texto de propósito. */
function Case({ client }: { client: Client }) {
  return (
    <article className="flex flex-col gap-[clamp(32px,4vw,56px)]">
      <div className="flex flex-col gap-4">
        <h3 className="max-w-[18em] font-display text-[clamp(26px,3vw,40px)] leading-[1.15] font-normal tracking-[-0.03em]">
          {client.name}: <span className="text-muted">{client.headline}</span>
        </h3>
        <p className="m-0 flex flex-wrap gap-x-6 gap-y-1 text-[16px] font-medium text-navy/80">
          {client.facts.map((f) => (
            <span key={f.label}>
              <strong className="font-display text-[20px] font-normal tracking-[-0.02em] text-navy">{f.value}</strong> {f.label}
            </span>
          ))}
        </p>
      </div>

      <div className="grid items-center gap-x-16 gap-y-8 min-[900px]:grid-cols-[minmax(0,565px)_1fr]">
        <figure className="m-0 flex flex-col gap-3">
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
          <figcaption className="text-[15px] text-muted">{client.proof.caption}</figcaption>
        </figure>
        <p className="font-display text-[clamp(64px,9vw,128px)] leading-[0.95] font-light tracking-[-0.05em]">
          {client.rank.from}º <span aria-hidden>→</span> {client.rank.to}º
          <span className="sr-only"> lugar no Google</span>
        </p>
      </div>

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

      <ul className="m-0 flex list-none flex-wrap gap-3 p-0">
        {client.links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-line-strong px-5 text-[15px] font-medium text-navy transition-colors duration-250 hover:bg-cloud focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
            >
              Ver {l.label === "Site" ? "o site" : "o Instagram"} da {client.shortName}
              <span className="sr-only"> (abre em nova aba)</span>
              <ArrowIcon size={14} strokeWidth={1.6} />
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function Results() {
  return (
    <section
      id="resultados"
      className="mx-auto box-border max-w-[1320px] px-[clamp(20px,4vw,48px)] pb-[clamp(72px,10vw,160px)]"
    >
      <h2 className="max-w-[14em] pb-[clamp(40px,5vw,72px)] font-display text-[clamp(32px,4.4vw,64px)] leading-[1.06] font-light tracking-[-0.035em]">
        Resultado de verdade, <span className="text-muted">não promessa.</span>
      </h2>
      <div className="flex flex-col gap-[clamp(72px,10vw,140px)]">
        {clients.map((client) => (
          <Case key={client.slug} client={client} />
        ))}
      </div>
    </section>
  );
}
