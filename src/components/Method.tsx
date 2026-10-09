
const steps = [
  {
    title: "Diagnóstico",
    text: "Entendemos o negócio, o público e o momento atual da sua presença digital.",
  },
  {
    title: "Estratégia",
    text: "Definimos posicionamento, mensagens e prioridades em um plano claro.",
  },
  {
    title: "Criação",
    text: "Damos forma à identidade, ao conteúdo e aos canais da marca.",
  },
  {
    title: "Crescimento",
    text: "Acompanhamos os resultados e ajustamos a rota com base em dados.",
  },
];

export function Method() {
  return (
    <section id="metodo" className="p-3">
      <div className="box-border flex flex-col gap-[clamp(56px,9vw,140px)] rounded-[28px] bg-cloud bg-[url(/assets/bg-light.webp)] bg-cover bg-left bg-no-repeat px-[clamp(20px,5vw,72px)] py-[clamp(28px,5vw,72px)] mobile:bg-[position:30%_center]">
        <div className="flex flex-col gap-6">
          <h2 className="max-w-[9.5em] font-display text-[clamp(32px,4.4vw,64px)] leading-[1.06] font-light tracking-[-0.035em]">
            Da incerteza à autoridade, em quatro etapas.
          </h2>
        </div>
        <ol className="m-0 flex list-none flex-wrap gap-3 p-0">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="box-border flex min-h-[250px] flex-[1_1_230px] flex-col justify-between gap-10 rounded-[20px] border border-line-soft bg-white p-7"
            >
              <span className="text-[14px] text-muted">{String(index + 1).padStart(2, "0")}</span>
              <div className="flex flex-col gap-2.5">
                <h3 className="font-display text-[24px] font-normal tracking-[-0.025em]">
                  {step.title}
                </h3>
                <p className="min-h-[4.65em] text-[15px] leading-[1.55] text-muted">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
