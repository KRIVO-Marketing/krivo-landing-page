# KRIVO — Site

Site da KRIVO em Next.js (App Router, export estático) + Tailwind CSS v4, hospedado na Cloudflare Workers.

## Rodando

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de produção (gera out/)
npm run lint
```

## Estrutura

- `src/app/` — só o que o Next exige na raiz: `layout.tsx` (HTML raiz), ícones (`favicon.ico`, `icon.svg`, `apple-icon.png`), `robots.ts`, `sitemap.ts` e `llms.txt/`
  - `(site)/` — as páginas: `page.tsx` (home), `diagnostico/`, `clientes/[slug]/` (case por cliente). O nome entre parênteses não entra na URL
- `src/components/` — um componente por arquivo, separados pela página que os usa:
  - `home/` — seções da home (`Hero`, `About`, `Services`, `Method`, `Channels`, `Clients`, `Footer`…)
  - `diagnostico/` — seções da página /diagnostico
  - `clientes/` — seções da página de case (`CaseIntro`, `CaseProof`, `CaseChannels`…) e `styles.ts` com as classes repetidas
  - `shared/` — peças usadas por mais de uma página (`GoogleTag`, `WhatsAppLink`, `DiagnosticoCta`, `Team`, `ArrowIcon`, `Texture`…)
- `src/lib/` — dados e configuração: `site.ts` (URL e descrição do site), `seo.ts` (metadados e schema.org), `clients.ts` (cases), `analytics.ts` (GA4), `whatsapp.ts`, `images.ts` + `image-manifest.json` (gerado)
- `src/styles/` — `globals.css` (Tailwind, fontes e tokens do design) e `backgrounds.generated.css` (gerado pelo script de imagens)
- `assets-src/` — imagens-fonte (WebP) do script de otimização
- `scripts/optimize-images.mjs` — gera AVIF/WebP responsivos em `public/assets/`, além de `src/lib/image-manifest.json` e `src/styles/backgrounds.generated.css` (`node scripts/optimize-images.mjs`)
- `public/` — `assets/` (imagens geradas e logo), `clients/` (logos e mídia dos cases), `fonts/`, `_redirects` (links curtos com UTM), `_headers`
