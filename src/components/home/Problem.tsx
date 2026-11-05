const symptoms = [
  "Você posta, ganha curtida e a agenda continua igual.",
  "Não sobra tempo para cuidar de Instagram, Google e site.",
  "Quem procura seu negócio no Google acha pouca coisa.",
];

export function Problem() {
  return (
    <section className="mx-auto box-border max-w-[1320px] px-[clamp(20px,4vw,48px)] py-[clamp(72px,10vw,160px)]">
      <h2 className="max-w-[14em] pb-[clamp(40px,5vw,72px)] font-display text-[clamp(30px,4.4vw,64px)] leading-[1.08] font-light tracking-[-0.035em]">
        Talvez você já tenha passado por isso.
      </h2>
      <ul className="m-0 flex list-none flex-wrap gap-x-10 gap-y-8 p-0">
        {symptoms.map((symptom, index) => (
          <li key={symptom} className="flex flex-[1_1_260px] flex-col gap-4 border-t border-line pt-6">
            <span className="text-[14px] text-muted">{String(index + 1).padStart(2, "0")}</span>
            <p className="font-display text-[clamp(20px,1.8vw,24px)] leading-[1.3] font-normal tracking-[-0.02em]">
              {symptom}
            </p>
          </li>
        ))}
      </ul>
      <p className="max-w-[560px] pt-[clamp(40px,5vw,72px)] text-[18px] leading-[1.6] text-muted">
        O diagnóstico existe para mostrar onde está o problema e o que resolver primeiro.
      </p>
    </section>
  );
}
