import Image from "next/image";
import { CtaLink } from "./CtaLink";

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#metodo", label: "Método" },
  // Link oculto junto com a seção Projetos (ainda sem clientes):
  // { href: "#projetos", label: "Projetos" },
];

export function Hero() {
  return (
    <header className="p-3">
      <div className="box-border flex min-h-[clamp(640px,56vw,840px)] flex-col justify-between gap-18 rounded-[28px] bg-navy-deep bg-[url(/assets/bg-hero.webp)] bg-cover bg-center bg-no-repeat p-[clamp(20px,2.6vw,36px)] text-white mobile:bg-[position:12%_center]">
        <nav aria-label="Principal" className="flex items-center justify-between gap-6">
          <a href="#topo" aria-label="KRIVO, início" className="flex min-h-11 items-center">
            <Image
              src="/assets/krivo-logo.svg"
              alt="KRIVO"
              width={482}
              height={159}
              unoptimized
              loading="eager"
              className="block h-[26px] w-auto"
            />
          </a>
          <div className="flex items-center gap-10 text-[15px] font-medium text-shadow-halo mobile:hidden">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-3 text-white opacity-90 transition-opacity duration-200 ease-[ease] hover:opacity-100"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#contato"
            className="inline-flex h-11 items-center rounded-full bg-white px-[22px] text-[15px] font-medium whitespace-nowrap text-navy transition-[translate,background-color] duration-250 ease-[ease] hover:-translate-y-0.5"
          >
            Iniciar um projeto
          </a>
        </nav>

        <div className="flex flex-col gap-[clamp(24px,2.8vw,40px)]">
          <h1 className="max-w-[8.2em] font-display text-[clamp(44px,7.6vw,116px)] leading-none font-normal tracking-[-0.04em]">
            Ser visto, reconhecido e lembrado.
          </h1>
          <div className="flex max-w-[520px] flex-col gap-7">
            <p className="text-[clamp(16px,1.3vw,19px)] leading-normal text-white text-shadow-halo">
              A KRIVO transforma negócios digitalmente desestruturados em marcas com autoridade,
              identidade e posicionamento.
            </p>
            <div className="flex flex-wrap gap-3">
              <CtaLink />
              <a
                href="#servicos"
                className="box-border inline-flex h-[54px] items-center rounded-full border border-[rgba(255,255,255,0.6)] bg-[rgba(26,44,85,0.55)] px-[26px] text-[16px] font-medium text-white transition-[translate,background-color] duration-250 ease-[ease] hover:-translate-y-0.5"
              >
                Ver serviços
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
