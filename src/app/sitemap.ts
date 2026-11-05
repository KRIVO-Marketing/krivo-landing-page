import type { MetadataRoute } from "next";
import { clients } from "@/lib/clients";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/diagnostico`, changeFrequency: "monthly", priority: 0.9 },
    ...clients.map((c) => ({ url: `${SITE_URL}/clientes/${c.slug}`, changeFrequency: "monthly" as const, priority: 0.6 })),
  ];
}
