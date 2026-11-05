import { dimensions, largest, srcSet } from "@/lib/images";

const partners = ["socio-1", "socio-2", "socio-3", "socio-4"] as const;

const sizes = "(max-width: 640px) 45vw, (max-width: 1100px) 22vw, 280px";

const underline = "underline decoration-mist decoration-2 underline-offset-[0.14em]";

type TeamProps = {
  title?: React.ReactNode;
  text?: string;
  className?: string;
};

export function Team({
  title = (
    <>
      Por trás de cada projeto, <span className={underline}>gente de verdade</span>.
    </>
  ),
  text = "Somos os sócios da Krivo e acompanhamos cada entrega de perto, do diagnóstico ao resultado.",
  className = "pb-[clamp(72px,10vw,160px)]",
}: TeamProps) {
  return (
    <section
      id="equipe"
      className={`mx-auto box-border max-w-[1320px] px-[clamp(20px,4vw,48px)] ${className}`}
    >
      <div className="mb-[clamp(48px,6vw,96px)] flex flex-wrap items-end justify-between gap-x-[clamp(32px,6vw,96px)] gap-y-6">
        <h2 className="max-w-[640px] flex-[2_1_360px] font-display text-[clamp(28px,3.5vw,52px)] leading-[1.14] font-light tracking-[-0.03em]">
          {title}
        </h2>
        <p className="max-w-[400px] flex-[1_1_280px] text-[18px] leading-[1.6] text-muted">{text}</p>
      </div>
      <ul className="m-0 grid list-none grid-cols-2 gap-x-[clamp(16px,3vw,40px)] gap-y-[clamp(16px,3vw,40px)] p-0 min-[900px]:grid-cols-4">
        {partners.map((name, i) => (
          <li
            key={name}
            className={`group aspect-square overflow-hidden rounded-full bg-[radial-gradient(circle_at_50%_30%,#d6def0_0%,var(--color-mist)_100%)] ring-1 ring-line-soft transition-[box-shadow,transform] duration-500 ease-out hover:-translate-y-1 hover:ring-line-strong ${
              i % 2 === 1 ? "min-[900px]:translate-y-[clamp(24px,4vw,56px)] min-[900px]:hover:translate-y-[calc(clamp(24px,4vw,56px)-4px)]" : ""
            }`}
          >
            <picture>
              <source type="image/avif" srcSet={srcSet(name, "avif")} sizes={sizes} />
              <img
                src={largest(name, "webp")}
                srcSet={srcSet(name, "webp")}
                sizes={sizes}
                alt=""
                width={dimensions(name).width}
                height={dimensions(name).height}
                loading="lazy"
                decoding="async"
                className="block h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
            </picture>
          </li>
        ))}
      </ul>
      <div className="hidden min-[900px]:block h-[clamp(24px,4vw,56px)]" aria-hidden />
    </section>
  );
}
