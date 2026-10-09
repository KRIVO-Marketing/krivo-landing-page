import { ArrowIcon } from "./ArrowIcon";

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
      <div className="-mx-4 flex flex-col border-b border-line">
        {services.map((service, index) => (
          <a
            key={service.title}
            href="#contato"
            className="group flex flex-wrap items-baseline gap-x-8 gap-y-2.5 border-t border-line px-4 py-[30px] text-navy transition-[background-color] duration-250 ease-[ease] hover:bg-[#f4f6fb]"
          >
            <span className="flex-[0_0_48px] text-[14px] text-muted">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="flex-[1_1_300px] font-display text-[clamp(24px,2.7vw,38px)] leading-[1.15] font-light tracking-[-0.03em]">
              {service.title}
            </span>
            <span className="max-w-[460px] flex-[1_1_320px] text-[16px] leading-[1.55] text-muted">
              {service.text}
            </span>
            <span className="inline-flex flex-none self-center transition-transform duration-250 ease-[ease] group-hover:translate-x-1.5 mobile:hidden">
              <ArrowIcon size={22} strokeWidth={1.4} />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
