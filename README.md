# KRIVO — Home

Landing page da KRIVO em Next.js (App Router) + Tailwind CSS v4, refatorada a partir do
mockup em `design-reference/` com fidelidade visual 1:1.

## Rodando

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de produção
npm run lint
```

## Estrutura

- `src/app/layout.tsx` — HTML raiz, metadados e fontes (Albert Sans + Lexend)
- `src/app/globals.css` — Tailwind e tokens do design (`@theme`: cores, fontes, sombra de texto, marquee)
- `src/app/page.tsx` — composição da página
- `src/components/` — uma seção por arquivo (`Hero`, `Marquee`, `About`, `Services`, `Method`, `Projects`, `Footer`) e peças compartilhadas (`CtaLink`, `ArrowIcon`)
- `public/assets/` — imagens e logo
- `design-reference/` — export original do design (não faz parte do build).
