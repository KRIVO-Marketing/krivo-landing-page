import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://www.krivomkt.com.br/", changeFrequency: "monthly", priority: 1 },
    { url: "https://www.krivomkt.com.br/diagnostico", changeFrequency: "monthly", priority: 0.9 },
  ];
}
