
const covers = [
  "bg-navy-deep bg-[url(/assets/bg-hero.webp)] bg-top-left",
  "bg-cloud bg-[url(/assets/bg-light.webp)] bg-[position:58%_center]",
  "bg-navy-deep bg-[url(/assets/bg-close.webp)] bg-top-right",
];

export function Projects() {
  return (
    <section
      id="projetos"
      className="mx-auto box-border max-w-[1320px] px-[clamp(20px,4vw,48px)] py-[clamp(72px,10vw,160px)]"
    >
      <div className="flex flex-col gap-6 pb-[clamp(40px,5vw,72px)]">
        <h2 className="max-w-[14em] font-display text-[clamp(32px,4.4vw,64px)] leading-[1.06] font-light tracking-[-0.035em]">
          Marcas que passaram <span className="text-muted">a ser lembradas.</span>
        </h2>
      </div>
      <div className="flex flex-wrap gap-x-4 gap-y-10">
        {covers.map((cover) => (
          <article key={cover} className="flex min-w-0 flex-[1_1_280px] flex-col gap-5">
            <div
              className={`box-border flex aspect-[4/5] items-end rounded-[20px] bg-cover bg-no-repeat p-5 ${cover}`}
            >
              <span className="inline-flex h-8 items-center rounded-full bg-white px-3.5 text-[13px] text-navy">
                [Imagem do projeto]
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-display text-[22px] font-normal tracking-[-0.025em]">
                [Nome do projeto]
              </h3>
              <div className="flex flex-wrap gap-2">
                {["[Segmento]", "[Serviço]"].map((tag) => (
                  <span
                    key={tag}
                    className="box-content inline-flex h-[30px] items-center rounded-full border border-line-strong px-3 text-[13px] text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
