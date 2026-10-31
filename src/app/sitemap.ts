import type { MetadataRoute } from "next";
import { clients } from "@/lib/clients";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://www.krivomkt.com.br/", changeFrequency: "monthly", priority: 1 },
    ...clients.map((c) => ({ url: `https://www.krivomkt.com.br/clientes/${c.slug}`, changeFrequency: "monthly" as const, priority: 0.6 })),
  ];
}
