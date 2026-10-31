import manifest from "./image-manifest.json";

type Name = keyof typeof manifest;

// Gerado por scripts/optimize-images.mjs: nomes com hash, então podem ser cacheados como immutable.
export function srcSet(name: Name, format: "avif" | "webp") {
  return manifest[name].variants.map((v) => `${v[format]} ${v.w}w`).join(", ");
}

export function largest(name: Name, format: "avif" | "webp") {
  const variants = manifest[name].variants;
  return variants[variants.length - 1][format];
}

export function smallest(name: Name, format: "avif" | "webp") {
  return manifest[name].variants[0][format];
}

export function dimensions(name: Name) {
  return { width: manifest[name].width, height: manifest[name].height };
}

// Hero é object-fit: cover. No mobile a altura manda (~800px de largura renderizada), não a largura da viewport.
export const HERO_SIZES = "(max-width: 760px) 800px, 100vw";
