import { type Pillar, PillarIcon } from "../PillarIcon";

const pillars: { title: string; text: string; pillar: Pillar }[] = [
  {
    title: "Instagram",
    text: "Perfil, bio, frequência e se o conteúdo fala com quem você quer atender.",
    pillar: "instagram",
  },
  {
    title: "Perfil no Google",
    text: "Se o seu negócio aparece para quem procura na região e o que as pessoas encontram.",
    pillar: "google",
  },
  {
    title: "Site",
    text: "Se ele abre rápido no celular e deixa claro como falar com você.",
    pillar: "site",
  },
];

const steps = [
  {
    title: "Você chama no WhatsApp",
    text: "Manda uma mensagem com o @ do seu negócio. A mensagem já vai pronta.",
  },
  {
    title: "A gente analisa",
    text: "Olhamos seu Instagram, seu perfil no Google e seu site antes da conversa.",
  },
  {
    title: "Conversa de 20 minutos",
    text: "Mostramos o que está errado e como corrigir. Sem apresentação de vendas e sem preço.",
  },
];

export function HowItWorks() {
  return (
    <section className="p-3">
      {/* Fundo liso (sem o granulado do Método): aqui há texto corrido direto sobre o fundo. */}
      <div className="box-border flex flex-col gap-[clamp(48px,7vw,112px)] rounded-[28px] bg-cloud px-[clamp(20px,5vw,72px)] py-[clamp(40px,6vw,88px)]">
        <div className="flex flex-col gap-6">
          <h2 className="max-w-[12em] font-display text-[clamp(30px,4.4vw,64px)] leading-[1.08] font-light tracking-[-0.035em]">
            O que é o diagnóstico gratuito
          </h2>
          <p className="max-w-[600px] text-[18px] leading-[1.6] text-navy">
            Uma análise dos três lugares onde o cliente procura o seu negócio. Você sai sabendo o
            que está errado em cada um e o que corrigir primeiro.
          </p>
        </div>

        <ul className="m-0 flex list-none flex-wrap gap-3 p-0">
          {pillars.map((item) => (
            <li
              key={item.title}
              className="box-border flex flex-[1_1_240px] flex-col gap-6 rounded-[20px] border border-line-soft bg-white p-7"
            >
              <PillarIcon pillar={item.pillar} />
              <div className="flex flex-col gap-2.5">
                <h3 className="font-display text-[22px] font-normal tracking-[-0.025em]">{item.title}</h3>
                <p className="text-[16px] leading-[1.55] text-muted">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-6">
          <h3 className="font-display text-[clamp(24px,2.6vw,36px)] leading-[1.15] font-light tracking-[-0.03em]">
            Como funciona
          </h3>
          <ol className="m-0 flex list-none flex-wrap gap-3 p-0">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="box-border flex flex-[1_1_240px] flex-col gap-8 rounded-[20px] border border-line-soft bg-white p-7"
              >
                <span className="text-[14px] text-muted">{String(index + 1).padStart(2, "0")}</span>
                <div className="flex flex-col gap-2.5">
                  <h4 className="font-display text-[22px] font-normal tracking-[-0.025em]">{step.title}</h4>
                  <p className="text-[16px] leading-[1.55] text-muted">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <p className="max-w-[640px] font-display text-[clamp(20px,2vw,28px)] leading-[1.3] font-light tracking-[-0.02em]">
          A gente não promete agenda cheia. Mostra o que está errado e como corrigir.
        </p>
      </div>
    </section>
  );
}
