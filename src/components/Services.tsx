import { ServiceList } from "./ServiceList";

const services = [
  {
    title: "Estratégia & posicionamento",
    text: "Diagnóstico da marca, do público e da concorrência para definir onde e como você deve aparecer.",
  },
  {
    title: "Identidade visual",
    text: "Marcas com assinatura própria: logotipo, sistema visual e manual para aplicar com consistência.",
  },
  {
    title: "Social media & conteúdo",
    text: "Planejamento, criação e gestão de conteúdo que constrói autoridade e mantém sua marca presente.",
  },
  {
    title: "Sites & landing pages",
    text: "Páginas rápidas, bem desenhadas e pensadas para converter visitas em contatos.",
  },
  {
    title: "Tráfego & performance",
    text: "Campanhas pagas acompanhadas por dados, com foco em oportunidades reais de crescimento.",
  },
];

export function Services() {
  return (
    <section
      id="servicos"
      className="mx-auto box-border max-w-[1320px] px-[clamp(20px,4vw,48px)] pb-[clamp(72px,10vw,160px)]"
    >
      <div className="flex flex-col gap-6 pb-[clamp(40px,5vw,72px)]">
        <h2 className="max-w-[14em] font-display text-[clamp(32px,4.4vw,64px)] leading-[1.06] font-light tracking-[-0.035em]">
          Soluções para cada etapa <span className="text-muted">da sua presença digital.</span>
        </h2>
      </div>
      <ServiceList services={services} />
    </section>
  );
}
