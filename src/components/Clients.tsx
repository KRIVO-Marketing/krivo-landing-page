import Link from "next/link";
import { clients, initials, type Client } from "@/lib/clients";
import { ArrowIcon } from "./ArrowIcon";

function ClientCard({ client, wide }: { client: Client; wide: boolean }) {
  return (
    <Link
      href={`/clientes/${client.slug}`}
      aria-label={`Ver case da ${client.name}. Resultado: ${client.highlight.value.replace("→", "para")}, ${client.highlight.short ?? client.highlight.label}`}
      className={`group relative isolate flex h-full flex-col justify-between gap-10 overflow-hidden rounded-[28px] bg-white text-navy shadow-[0_2px_6px_rgba(34,56,98,0.04),0_24px_60px_-12px_rgba(34,56,98,0.16)] transition-transform duration-300 ease-out hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${
        wide ? "min-h-[clamp(300px,30vw,380px)] p-[clamp(24px,4vw,56px)]" : "min-h-[340px] p-7"
      }`}
    >
      <div className="flex items-center gap-4">
        {client.logo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={client.logo} alt="" width={56} height={56} className="block size-14 shrink-0 rounded-full object-cover" />
        ) : (
          <span aria-hidden className="inline-flex size-14 shrink-0 items-center justify-center rounded-full bg-white font-display text-[18px] text-navy">
            {initials(client.name)}
          </span>
        )}
        <div className="flex min-w-0 flex-col gap-0.5">
          <h3 className="font-display text-[clamp(20px,2vw,26px)] leading-[1.15] font-normal tracking-[-0.025em]">{client.name}</h3>
          <p className="text-[15px] leading-[1.4] text-navy/80">{client.summary}</p>
        </div>
      </div>

      <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-5">
        <div className="flex flex-col gap-1">
          <span
            className={`font-display leading-[0.95] font-light tracking-[-0.045em] ${
              wide ? "text-[clamp(56px,8vw,120px)]" : "text-[clamp(48px,5vw,72px)]"
            }`}
          >
            {client.highlight.value}
          </span>
          <span className="text-[15px] text-navy/80">{client.highlight.short ?? client.highlight.label}</span>
        </div>
        <span className="inline-flex h-[54px] items-center gap-3.5 rounded-full bg-white pr-2 pl-[26px] text-[16px] font-medium text-navy shadow-[0_2px_4px_rgba(34,56,98,0.06),0_10px_24px_-4px_rgba(34,56,98,0.2)] transition-[translate,box-shadow] group-hover:shadow-[0_2px_4px_rgba(34,56,98,0.06),0_14px_30px_-4px_rgba(34,56,98,0.26)] duration-250 group-hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0">
          Ver case
          <span className="inline-flex size-[38px] items-center justify-center rounded-full bg-navy text-white">
            <ArrowIcon size={18} strokeWidth={1.6} />
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
