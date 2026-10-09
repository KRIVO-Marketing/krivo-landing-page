"use client";

import { useRef } from "react";
import { useReducedMotion, useScroll, useTransform } from "motion/react";
import { ScrollText } from "./ScrollText";

// Mesmos valores dos tokens de globals.css (cloud, mist, muted, navy).
const CLOUD = "#f1f3fb";
const MIST = "#a4b2d4";
const MUTED = "#626f94";
const NAVY = "#223862";

type ServiceStepProps = {
  number: string;
  title: string;
  text: string;
  isLeft: boolean;
};

export function ServiceStep({ number, title, text, isLeft }: ServiceStepProps) {
  const stepRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  // Cada etapa acende quando seu topo sobe da parte baixa para o meio da tela.
  const { scrollYProgress } = useScroll({
    target: stepRef,
    offset: ["start 0.7", "start 0.3"],
  });

  // Número + título ocupam quase todo o trajeto, letra por letra; a descrição acende no final.
  const titleProgress = useTransform(scrollYProgress, [0, 0.75], [0, 1]);
  const textProgress = useTransform(scrollYProgress, [0.4, 1], [0, 1]);

  const headChars = number.length + title.length;

  // Com movimento reduzido a etapa já aparece nas cores finais.
  const palette = (stages: string[]) => (reduceMotion ? [stages.at(-1)!, stages.at(-1)!] : stages);

  return (
    <div
      ref={stepRef}
      className="flex min-h-[48vh] items-center py-12 pl-9 md:py-16 md:pl-0"
    >
      <div
        className={`flex w-full flex-col gap-3 md:w-1/2 ${
          isLeft
            ? "md:flex-row-reverse md:items-baseline md:justify-start md:gap-5 md:pr-16 md:text-right"
            : "md:ml-auto md:pl-16"
        }`}
      >
        <span className="font-sans text-[14px] md:pt-1">
          <ScrollText
            text={number}
            progress={titleProgress}
            charOffset={0}
            totalChars={headChars}
            colors={palette([CLOUD, MIST, MUTED])}
          />
        </span>
        <div className="flex flex-col gap-5">
          <h3 className="font-display text-[clamp(32px,4.4vw,64px)] leading-[1.06] font-light tracking-[-0.035em]">
            <ScrollText
              text={title}
              progress={titleProgress}
              charOffset={number.length}
              totalChars={headChars}
              colors={palette([CLOUD, MIST, NAVY])}
            />
          </h3>
          <p className="max-w-[460px] text-[16px] leading-[1.55] md:max-w-none">
            <ScrollText
              text={text}
              progress={textProgress}
              charOffset={0}
              totalChars={text.length}
              colors={palette([CLOUD, MIST, MUTED])}
            />
          </p>
        </div>
      </div>
    </div>
  );
}
