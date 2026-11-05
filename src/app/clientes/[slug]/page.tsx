import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseChannels } from "@/components/clientes/CaseChannels";
import { CaseFinalCta } from "@/components/clientes/CaseFinalCta";
import { CaseIntro } from "@/components/clientes/CaseIntro";
import { CaseNav } from "@/components/clientes/CaseNav";
import { CaseProof } from "@/components/clientes/CaseProof";
import { CaseSeo } from "@/components/clientes/CaseSeo";
import { CaseStory } from "@/components/clientes/CaseStory";
import { CaseStrategy } from "@/components/clientes/CaseStrategy";
import { clients, getClient } from "@/lib/clients";

export const dynamicParams = false;

export function generateStaticParams() {
  return clients.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/clientes/[slug]">): Promise<Metadata> {
  const client = getClient((await params).slug);
  if (!client) return {};
  return {
    title: `${client.name} | Case KRIVO`,
    description: client.summary,
    alternates: { canonical: `/clientes/${client.slug}` },
  };
}

export default async function ClientPage({ params }: PageProps<"/clientes/[slug]">) {
  const client = getClient((await params).slug);
  if (!client) notFound();

  return (
    <div className="overflow-x-clip bg-white font-sans text-[17px] leading-[1.6] text-navy [-webkit-font-smoothing:antialiased]">
      <CaseNav />
      <main className="mx-auto box-border flex max-w-[1200px] flex-col gap-[clamp(56px,6vw,96px)] px-[clamp(20px,4vw,48px)] pt-6 pb-[clamp(48px,6vw,96px)]">
        <CaseIntro client={client} />
        <CaseStory client={client} />
        {(client.proof || client.videos) && <CaseProof client={client} />}
        <CaseChannels client={client} />
        {client.seo && <CaseSeo seo={client.seo} />}
        {client.strategy && <CaseStrategy strategy={client.strategy} />}
        <CaseFinalCta />
      </main>
    </div>
  );
}
