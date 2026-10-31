import { type Pillar, PillarIcon } from "./PillarIcon";

const channels: { title: string; text: string; pillar: Pillar }[] = [
  {
    title: "Google Meu Negócio",
    text: "Perfil completo e otimizado para a sua empresa ser encontrada por quem busca na sua região.",
    pillar: "google",
  },
  {
    title: "Instagram",
    text: "Perfil estratégico e conteúdo consistente para construir autoridade e manter sua marca presente.",
    pillar: "instagram",
  },
  {
    title: "Sites",
    text: "Páginas rápidas e bem desenhadas, pensadas para converter visitas em contatos.",
    pillar: "site",
  },
];

export function Channels() {
  return (
    <section
      id="canais"
      className="mx-auto box-border max-w-[1320px] px-[clamp(20px,4vw,48px)] py-[clamp(72px,10vw,160px)]"
    >
      <div className="flex flex-col gap-6 pb-[clamp(40px,5vw,72px)]">
        <h2 className="max-w-[14em] font-display text-[clamp(32px,4.4vw,64px)] leading-[1.06] font-light tracking-[-0.035em]">
          Onde a sua marca precisa estar. <span className="text-muted">Nós cuidamos.</span>
        </h2>
      </div>
      <div className="flex flex-wrap gap-x-10 gap-y-8">
        {channels.map((channel) => (
          <div
            key={channel.title}
            className="flex flex-[1_1_260px] flex-col gap-8 border-t border-line pt-6"
          >
            <PillarIcon pillar={channel.pillar} />
            <div className="flex flex-col gap-2.5">
              <h3 className="font-display text-[24px] font-normal tracking-[-0.025em]">
                {channel.title}
              </h3>
              <p className="max-w-[360px] text-[15px] leading-[1.55] text-muted">{channel.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
