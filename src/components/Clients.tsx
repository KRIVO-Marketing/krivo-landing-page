import Link from "next/link";
import { clients, initials } from "@/lib/clients";
import { ArrowIcon } from "./ArrowIcon";

export function Clients() {
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
      <ul className="m-0 grid list-none grid-cols-1 gap-4 p-0 min-[640px]:grid-cols-2 min-[1000px]:grid-cols-3">
        {clients.map((client) => (
          <li key={client.slug}>
            <Link
              href={`/clientes/${client.slug}`}
              className="group box-border flex h-full min-h-[280px] flex-col justify-between gap-10 rounded-[20px] bg-cloud p-7 ring-1 ring-line-soft transition-[box-shadow,transform] duration-300 ease-out hover:-translate-y-1 hover:ring-line-strong"
            >
              <div className="flex items-start justify-between gap-4">
                {client.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={client.logo} alt={client.name} width={56} height={56} className="block size-14 rounded-full object-cover ring-1 ring-line" />
                ) : (
                  <span
                    aria-hidden
                    className="inline-flex size-14 items-center justify-center rounded-full bg-white font-display text-[18px] tracking-[-0.02em] text-navy ring-1 ring-line"
                  >
                    {initials(client.name)}
                  </span>
                )}
                <span className="inline-flex size-10 items-center justify-center rounded-full border border-line-strong text-navy transition-colors duration-300 group-hover:bg-navy group-hover:text-white">
                  <ArrowIcon size={16} strokeWidth={1.6} />
                </span>
              </div>
              <div className="flex flex-col gap-3">
                {client.segment && <span className="text-[13px] tracking-[0.1em] text-muted uppercase">{client.segment}</span>}
                <h3 className="font-display text-[26px] leading-[1.15] font-normal tracking-[-0.025em]">{client.name}</h3>
                <p className="text-[15px] leading-[1.55] text-muted">{client.summary}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
