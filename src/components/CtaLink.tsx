import { ArrowIcon } from "./ArrowIcon";

export function CtaLink() {
  return (
    <a
      href="#contato"
      className="inline-flex h-[54px] items-center gap-3.5 rounded-full bg-white pr-2 pl-[26px] text-[16px] font-medium text-navy transition-[translate,background-color] duration-250 ease-[ease] hover:-translate-y-0.5"
    >
      Iniciar um projeto
      <span className="inline-flex size-[38px] items-center justify-center rounded-full bg-navy text-white">
        <ArrowIcon size={18} strokeWidth={1.6} />
      </span>
    </a>
  );
}
