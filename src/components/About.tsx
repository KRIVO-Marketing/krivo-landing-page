import Image from "next/image";

const pillars = [
  {
    title: "Estratégia",
    text: "Diagnóstico, posicionamento e um plano claro antes de qualquer peça.",
  },
  {
    title: "Criatividade",
    text: "Identidade e conteúdo com assinatura própria, feitos para serem lembrados.",
  },
  {
    title: "Tecnologia",
    text: "Sites, dados e automação para transformar atenção em oportunidade.",
  },
];

const underline = "underline decoration-mist decoration-2 underline-offset-[0.14em]";

export function About() {
  return (
    <section
      id="sobre"
      className="mx-auto box-border max-w-[1320px] px-[clamp(20px,4vw,48px)] py-[clamp(72px,10vw,160px)]"
    >
      <div className="flex flex-wrap items-start gap-x-[clamp(32px,6vw,96px)] gap-y-12">
        <div className="flex max-w-[440px] flex-[1_1_280px] flex-col gap-10">
          <Image
            src="/assets/sobre.webp"
            alt=""
            width={1410}
            height={1316}
            unoptimized
            fetchPriority="low"
            className="block h-auto w-full"
          />
        </div>
        <div className="flex min-w-0 flex-[2_1_480px] flex-col gap-[clamp(40px,5vw,72px)]">
          <h2 className="font-display text-[clamp(28px,3.5vw,52px)] leading-[1.14] font-light tracking-[-0.03em]">
            Mais do que estar presente no digital, é preciso{" "}
            <span className={underline}>ser visto</span>,{" "}
            <span className={underline}>reconhecido</span> e{" "}
            <span className={underline}>lembrado</span>.
          </h2>
          <p className="max-w-[560px] text-[18px] leading-[1.6] text-muted">
            Por meio da criatividade, da estratégia e da tecnologia, trazemos clareza à
            comunicação, fortalecemos a presença digital e geramos oportunidades reais de
            crescimento para empresas de Campinas e região.
          </p>
          <div className="flex flex-wrap gap-x-10 gap-y-8">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="flex flex-[1_1_180px] flex-col gap-2.5 border-t border-line pt-5"
              >
                <h3 className="font-display text-[20px] font-normal tracking-[-0.02em]">
                  {pillar.title}
                </h3>
                <p className="text-[15px] leading-[1.55] text-muted">{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
