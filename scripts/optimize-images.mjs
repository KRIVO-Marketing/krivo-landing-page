// Gera AVIF + WebP responsivos em public/assets/ a partir de assets-src/ e escreve src/lib/image-manifest.json.
// Uso: node scripts/optimize-images.mjs
import sharp from "sharp";
import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile, readdir, rm } from "node:fs/promises";

const SRC = "assets-src";
const OUT = "public/assets";
const AVIF_QUALITY = 60;
const WEBP_QUALITY = 80;

const jobs = {
  "bg-hero": [960, 1440, 1920, 2400],
  "bg-close": [1280, 1920, 2400],
  "bg-light": [1280, 1920, 2200],
  sobre: [480, 880, 1410],
};

const manifest = {};
await mkdir(OUT, { recursive: true });
for (const f of await readdir(OUT)) if (/\.(avif|webp)$/.test(f)) await rm(`${OUT}/${f}`);

for (const [name, widths] of Object.entries(jobs)) {
  const input = await readFile(`${SRC}/${name}.webp`);
  const meta = await sharp(input).metadata();
  manifest[name] = { width: meta.width, height: meta.height, variants: [] };
  for (const w of widths) {
    const pipeline = () => (w >= meta.width ? sharp(input) : sharp(input).resize({ width: w, kernel: "lanczos3" }));
    const avif = await pipeline().avif({ quality: AVIF_QUALITY, effort: 6, chromaSubsampling: "4:4:4" }).toBuffer();
    const webp = await pipeline().webp({ quality: WEBP_QUALITY, effort: 6 }).toBuffer();
    const entry = { w: Math.min(w, meta.width) };
    for (const [ext, buf] of [["avif", avif], ["webp", webp]]) {
      const hash = createHash("sha1").update(buf).digest("hex").slice(0, 8);
      const file = `${name}-${entry.w}.${hash}.${ext}`;
      await writeFile(`${OUT}/${file}`, buf);
      entry[ext] = `/assets/${file}`;
      entry[`${ext}Bytes`] = buf.length;
    }
    manifest[name].variants.push(entry);
    console.log(name, entry.w, "avif", entry.avifBytes, "webp", entry.webpBytes);
  }
}
await mkdir("src/lib", { recursive: true });
await writeFile("src/lib/image-manifest.json", JSON.stringify(manifest, null, 2) + "\n");

// CSS dos fundos abaixo da dobra (carregados via LazyBackgrounds): AVIF com fallback WebP, 1280 no mobile 1x, 1920 no mobile em tela 2x+ (mesma nitidez do hero).
const bgRule = (key, name) => {
  const [small, mid, large] = manifest[name].variants;
  const set = (v) => `image-set(url(${v.avif}) type("image/avif"), url(${v.webp}) type("image/webp"))`;
  return `[data-lazy-bg="${key}"].bg-loaded {
  background-image: url(${large.webp});
  background-image: ${set(large)};
}
@media (max-width: 760px) {
  [data-lazy-bg="${key}"].bg-loaded {
    background-image: url(${small.webp});
    background-image: ${set(small)};
  }
}
@media (max-width: 760px) and (min-resolution: 2dppx) {
  [data-lazy-bg="${key}"].bg-loaded {
    background-image: url(${mid.webp});
    background-image: ${set(mid)};
  }
}
`;
};
await writeFile(
  "src/app/backgrounds.generated.css",
  `/* Gerado por scripts/optimize-images.mjs — não editar à mão. */\n${bgRule("close", "bg-close")}${bgRule("light", "bg-light")}`,
);
