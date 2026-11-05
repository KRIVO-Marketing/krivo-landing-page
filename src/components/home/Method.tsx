import { DiagnosticoCta } from "@/components/shared/DiagnosticoCta";

const steps = [
  {
    title: "Diagnóstico gratuito",
    text: "Olhamos seu Instagram, seu perfil no Google e seu site e mostramos o que corrigir primeiro.",
  },
  {
    title: "Alinhamento",
    text: "Uma conversa inicial para entender seu negócio, seu cliente e o que vem primeiro.",
  },
  {
    title: "Captação e criação",
    text: "Nosso time de captação produz as fotos e os vídeos. Você não precisa mandar nada.",
  },
  {
    title: "Acompanhamento",
    text: "Cuidamos do Instagram, do Google e do site no dia a dia e ajustamos o que não estiver funcionando.",
  },
];

export function Method() {
  return (
    <section id="metodo" className="p-3">
      <div data-lazy-bg="light" className="box-border flex flex-col gap-[clamp(56px,9vw,140px)] rounded-[28px] bg-cloud bg-cover bg-left bg-no-repeat px-[clamp(20px,5vw,72px)] py-[clamp(28px,5vw,72px)] max-[1023px]:bg-[length:auto_700px] max-[1023px]:bg-[position:30%_top] max-[1023px]:bg-repeat-y">
        <div className="flex flex-col gap-6">
          <h2 className="max-w-[9.5em] font-display text-[clamp(32px,4.4vw,64px)] leading-[1.06] font-light tracking-[-0.035em]">
            Como a gente trabalha, em quatro etapas.
          </h2>
        </div>
        <div className="flex flex-col gap-3">
          <ol className="m-0 grid list-none gap-3 p-0 min-[560px]:grid-cols-2 min-[1100px]:grid-cols-4">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="box-border flex flex-col justify-between gap-6 min-[560px]:min-h-[250px] min-[560px]:gap-10 rounded-[20px] border border-line-soft bg-white p-7"
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
          {/* Decisão depois do diagnóstico: em cartão branco, texto corrido não fica sobre o granulado */}
          <div className="box-border flex flex-col gap-6 rounded-[20px] border border-line-soft bg-white p-[clamp(24px,4vw,48px)]">
            <h3 className="font-display text-[clamp(26px,3vw,40px)] leading-[1.14] font-light tracking-[-0.03em]">
              Depois do diagnóstico, você decide.
            </h3>
            <p className="max-w-[640px] text-[17px] leading-[1.6] text-muted">
              Se fizer sentido trabalhar junto, a Krivo cuida do seu Instagram, do seu perfil no Google e
              do seu site, sem depender de você no dia a dia. Identidade visual e anúncios, quando fizer
              sentido. Se não fizer, você fica com o diagnóstico do mesmo jeito.
            </p>
            <DiagnosticoCta position="meio" tone="dark" className="self-start" />
          </div>
        </div>
      </div>
    </section>
  );
}
