import Link from "next/link";
import { clients, initials, type Client } from "@/lib/clients";
import { ArrowIcon } from "./ArrowIcon";

// Vidro só no botão flutuante (camada funcional). Com "reduzir transparência" vira opaco; com "aumentar contraste" ganha borda forte.
const glassButton =
  "inline-flex h-12 items-center gap-3 rounded-full border border-white/80 bg-white/45 pr-2 pl-5 text-[15px] font-medium text-navy shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_8px_24px_rgba(34,56,98,0.15)] backdrop-blur-xl backdrop-saturate-150 transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100 [@media(prefers-reduced-transparency:reduce)]:bg-white [@media(prefers-reduced-transparency:reduce)]:backdrop-blur-none contrast-more:border-navy/50 contrast-more:bg-white";

function ClientCard({ client, wide }: { client: Client; wide: boolean }) {
  return (
    <Link
      href={`/clientes/${client.slug}`}
      aria-label={`Ver case da ${client.name}. Resultado: ${client.highlight.value.replace("→", "para")}, ${client.highlight.short ?? client.highlight.label}`}
      className={`group relative isolate flex h-full flex-col justify-between gap-10 overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#f1f3fb_0%,#dfe5f4_55%,#c9d3ea_100%)] ring-1 ring-line-soft transition-transform duration-300 ease-out hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${
        wide ? "min-h-[clamp(300px,30vw,380px)] p-[clamp(24px,4vw,56px)]" : "min-h-[340px] p-7"
      }`}
    >
      {/* Uma mancha de cor atrás do botão de vidro, para ele ter o que refratar */}
      <span aria-hidden className="pointer-events-none absolute -right-16 -bottom-20 -z-10 size-[360px] rounded-full bg-[#8fa3d4] opacity-60 blur-3xl" />

      <div className="flex items-center gap-4">
        {client.logo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={client.logo} alt="" width={56} height={56} className="block size-14 shrink-0 rounded-full object-cover shadow-[0_8px_24px_rgba(34,56,98,0.25)] ring-2 ring-white" />
        ) : (
          <span aria-hidden className="inline-flex size-14 shrink-0 items-center justify-center rounded-full bg-white font-display text-[18px] text-navy shadow-[0_8px_24px_rgba(34,56,98,0.2)]">
            {initials(client.name)}
          </span>
        )}
        <div className="flex min-w-0 flex-col gap-0.5">
          <h3 className="font-display text-[clamp(20px,2vw,26px)] leading-[1.15] font-normal tracking-[-0.025em] text-navy">{client.name}</h3>
          <p className="text-[15px] leading-[1.4] text-navy/80">{client.summary}</p>
        </div>
      </div>

      <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-5">
        <div className="flex flex-col gap-1">
          <span
            className={`font-display leading-[0.95] font-light tracking-[-0.045em] text-navy ${
              wide ? "text-[clamp(56px,8vw,120px)]" : "text-[clamp(48px,5vw,72px)]"
            }`}
          >
            {client.highlight.value}
          </span>
          <span className="text-[15px] text-navy/80">{client.highlight.short ?? client.highlight.label}</span>
        </div>
        <span className={glassButton}>
          Ver case
          <span className="inline-flex size-8 items-center justify-center rounded-full bg-navy text-white">
            <ArrowIcon size={16} strokeWidth={1.6} />
          </span>
        </span>
      </div>
    </Link>
  );
}

export function Clients() {
  // 1 cliente: card largo. 2: dois iguais. 3 ou mais: grade de 3.
  const wide = clients.length === 1;
  const grid =
    clients.length === 1
      ? "grid-cols-1"
      : clients.length === 2
        ? "grid-cols-1 min-[760px]:grid-cols-2"
        : "grid-cols-1 min-[760px]:grid-cols-2 min-[1100px]:grid-cols-3";

  return (
    <section
      id="clientes"
      className="mx-auto box-border max-w-[1320px] px-[clamp(20px,4vw,48px)] py-[clamp(72px,10vw,160px)]"
    >
      <div className="flex flex-col gap-6 pb-[clamp(40px,5vw,72px)]">
        <h2 className="max-w-[14em] font-display text-[clamp(32px,4.4vw,64px)] leading-[1.06] font-light tracking-[-0.035em]">
          Marcas que passaram <span className="text-muted">a ser lembradas com a KRIVO.</span>
        </h2>
      </div>
      <ul className={`m-0 grid list-none gap-4 p-0 ${grid}`}>
        {clients.map((client) => (
          <li key={client.slug}>
            <ClientCard client={client} wide={wide} />
          </li>
        ))}
      </ul>
    </section>
  );
}
