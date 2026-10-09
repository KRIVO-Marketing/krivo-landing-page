const channels = [
  {
    title: "Google Meu Negócio",
    text: "Perfil completo e otimizado para a sua empresa ser encontrada por quem busca na sua região.",
    icon: (
      <>
        <path d="M12 21s-6-5.2-6-10a6 6 0 0 1 12 0c0 4.8-6 10-6 10z" />
        <circle cx="12" cy="11" r="2.2" />
      </>
    ),
  },
  {
    title: "Instagram",
    text: "Perfil estratégico e conteúdo consistente para construir autoridade e manter sua marca presente.",
    icon: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="5" />
        <circle cx="12" cy="12" r="3.6" />
        <circle cx="17" cy="7" r="0.6" />
      </>
    ),
  },
  {
    title: "Sites",
    text: "Páginas rápidas e bem desenhadas, pensadas para converter visitas em contatos.",
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2.5" />
        <path d="M3 9.5h18" />
        <circle cx="6.2" cy="7.3" r="0.4" />
        <circle cx="8.2" cy="7.3" r="0.4" />
      </>
    ),
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
            <span className="inline-flex size-12 items-center justify-center rounded-full border border-line-strong text-navy">
              <svg
                viewBox="0 0 24 24"
                width="22"
                height="22"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {channel.icon}
              </svg>
            </span>
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
