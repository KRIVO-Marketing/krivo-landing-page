import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Site 100% estático: gera a pasta `out/` para hospedar na Cloudflare Pages.
  output: "export",
  images: { unoptimized: true },
  // Fixa a raiz do projeto (evita o Next pegar um package-lock.json de uma pasta acima).
  turbopack: { root: import.meta.dirname },
};

export default nextConfig;
