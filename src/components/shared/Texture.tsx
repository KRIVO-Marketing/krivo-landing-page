import { dimensions, largest, srcSet } from "@/lib/images";

/** Textura da KRIVO como imagem no HTML (mesma técnica do hero da home): não depende de JavaScript para aparecer. */
export function Texture({ name }: { name: "bg-hero" | "bg-close" }) {
  const sizes = "(max-width: 1200px) 100vw, 1200px";
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
          loading="lazy"
          decoding="async"
          className="block h-full w-full object-cover object-center"
        />
      </picture>
    </span>
  );
}
