import { eyebrow, section, sectionTitle } from "@/components/clientes/styles";
import type { Client } from "@/lib/clients";

/** Prova: print do Google e vídeos produzidos. */
export function CaseProof({ client }: { client: Client }) {
  return (
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
  );
}
