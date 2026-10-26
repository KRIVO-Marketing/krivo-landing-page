// Perguntas sobre fidelidade e sobre gravar vídeo ficam de fora até os sócios definirem a política.
const questions = [
  {
    q: "É grátis mesmo?",
    a: "É. O diagnóstico não tem custo e não te obriga a nada. Ele existe para você ver como a gente trabalha antes de decidir qualquer coisa.",
  },
  {
    q: "Vou ouvir uma apresentação de vendas?",
    a: "Não. A conversa é sobre o seu negócio: o que está errado e como corrigir. Se depois você quiser saber como a Krivo pode ajudar, é só perguntar.",
  },
  {
    q: "Quem vai me atender?",
    a: "Um dos sócios da Krivo. Quem te atende no diagnóstico é quem você vê no nosso Instagram.",
  },
  {
    q: "Já me frustrei com agência. O que muda?",
    a: "Por isso a gente começa pelo diagnóstico: você vê o que enxergamos no seu negócio antes de pagar qualquer coisa e decide com calma.",
  },
  {
    q: "Vocês garantem resultado?",
    a: "Não. Ninguém sério consegue garantir agenda cheia. O que a gente faz é mostrar com clareza o que está errado e como corrigir.",
  },
  {
    q: "Vocês atendem o meu segmento?",
    a: "Atendemos negócios locais de Campinas e região, como clínicas, consultórios, escritórios, restaurantes, salões, barbearias, academias e estúdios. No diagnóstico a gente diz com sinceridade se faz sentido para o seu caso.",
  },
];

export function Faq() {
  return (
    <section className="mx-auto box-border max-w-[1320px] px-[clamp(20px,4vw,48px)] py-[clamp(72px,10vw,160px)]">
      <div className="flex flex-wrap items-start gap-x-[clamp(32px,6vw,96px)] gap-y-10">
        <h2 className="flex-[1_1_280px] font-display text-[clamp(30px,4.4vw,64px)] leading-[1.08] font-light tracking-[-0.035em]">
          Perguntas frequentes
        </h2>
        <div className="flex min-w-0 flex-[2_1_480px] flex-col">
          {questions.map(({ q, a }) => (
            <details key={q} className="group border-t border-line last:border-b">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-6 py-5 font-display text-[clamp(18px,1.6vw,22px)] font-normal tracking-[-0.02em] [&::-webkit-details-marker]:hidden">
                {q}
                <span
                  aria-hidden="true"
                  className="text-[24px] leading-none text-muted transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="max-w-[620px] pb-6 text-[16px] leading-[1.6] text-muted">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
