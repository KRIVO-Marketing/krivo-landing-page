import { smallest, srcSet } from "@/lib/images";

const partners = ["socio-1", "socio-2", "socio-3", "socio-4"] as const;

/** Fotos dos sócios + frase de atendimento. `ringClass` define a cor do anel (igual ao fundo). */
export function PartnersLine({ ringClass = "ring-navy-deep" }: { ringClass?: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex shrink-0">
        {partners.map((name, i) => (
          <picture key={name} className={`block shrink-0 ${i > 0 ? "-ml-3" : ""}`}>
            <source type="image/avif" srcSet={srcSet(name, "avif")} sizes="44px" />
            <img
              src={smallest(name, "webp")}
              srcSet={srcSet(name, "webp")}
              sizes="44px"
              alt=""
              width={44}
              height={44}
              loading="lazy"
              decoding="async"
              className={`block size-11 rounded-full bg-mist object-cover object-top ring-2 ${ringClass}`}
            />
          </picture>
        ))}
      </div>
      <p className="text-[15px] leading-snug text-white/90 text-shadow-halo">Quem te atende são os sócios da Krivo, aqui de Campinas.</p>
    </div>
  );
}
