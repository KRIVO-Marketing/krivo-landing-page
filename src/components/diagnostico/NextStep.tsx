import { DiagnosticoCta } from "./DiagnosticoCta";

export function NextStep() {
  return (
    <section className="mx-auto box-border max-w-[1320px] px-[clamp(20px,4vw,48px)] pb-[clamp(72px,10vw,160px)]">
      <div className="flex flex-col gap-8 border-t border-line pt-[clamp(40px,5vw,72px)]">
        <h2 className="max-w-[16em] font-display text-[clamp(28px,3.5vw,52px)] leading-[1.14] font-light tracking-[-0.03em]">
          Depois do diagnóstico, você decide.
        </h2>
        <p className="max-w-[640px] text-[18px] leading-[1.6] text-muted">
          Se fizer sentido trabalhar junto, a Krivo cuida do seu Instagram, do seu perfil no Google
          e do seu site, sem depender de você no dia a dia. Se não fizer, você fica com o
          diagnóstico do mesmo jeito.
        </p>
        <DiagnosticoCta position="meio" tone="dark" className="self-start" />
      </div>
    </section>
  );
}
