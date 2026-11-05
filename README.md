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

- `src/app/` — rotas: `page.tsx` (home), `diagnostico/`, `clientes/[slug]/` (case por cliente), `layout.tsx` (HTML raiz, metadados, Google tag), `sitemap.ts`, `robots.ts`, `llms.txt/`
- `src/components/` — um componente por arquivo, separados pela página que os usa:
  - `home/` — seções da home (`Hero`, `About`, `Services`, `Method`, `Channels`, `Clients`, `Footer`…)
  - `diagnostico/` — seções da página /diagnostico
  - `clientes/` — seções da página de case (`CaseIntro`, `CaseProof`, `CaseChannels`…) e `styles.ts` com as classes repetidas
  - `shared/` — peças usadas por mais de uma página (`WhatsAppLink`, `DiagnosticoCta`, `Team`, `ArrowIcon`, `Texture`…)
- `src/lib/` — dados e utilitários: `clients.ts` (cases), `analytics.ts` (GA4), `whatsapp.ts`, `images.ts` + `image-manifest.json` (gerado)
- `assets-src/` — imagens-fonte (WebP) do script de otimização; `assets-src/originais/` guarda as fotos originais dos sócios (não entram no build)
- `scripts/optimize-images.mjs` — gera AVIF/WebP responsivos em `public/assets/` e `src/lib/image-manifest.json` (`node scripts/optimize-images.mjs`)
- `public/` — `assets/` (imagens geradas e logo), `clients/` (logos e mídia dos cases), `fonts/`, `_redirects` (links curtos com UTM), `_headers`
