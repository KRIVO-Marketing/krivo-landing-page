import { Fragment } from "react";

const words = ["Estratégia", "Posicionamento", "Identidade visual", "Conteúdo", "Sites", "Performance"];
const track = [...words, ...words];

export function Marquee() {
  return (
    <div aria-hidden="true" className="overflow-hidden border-b border-line py-[26px]">
      <div className="flex w-max animate-marquee font-display text-[20px] font-light tracking-[-0.01em] whitespace-nowrap text-navy motion-reduce:animate-none">
        {[0, 1].map((group) => (
          <div key={group} className="flex items-center gap-7 pr-7">
            {track.map((word, index) => (
              <Fragment key={index}>
                <span>{word}</span>
                <span className="text-mist">→</span>
              </Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
