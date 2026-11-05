"use client";

import { useMemo } from "react";
import { motion, useTransform, type MotionValue } from "motion/react";

type ScrollTextProps = {
  text: string;
  progress: MotionValue<number>;
  /** Posição do primeiro caractere dentro da linha inteira (número + título + descrição). */
  charOffset: number;
  totalChars: number;
  /** Cores por estágio: apagado → (destaque) → final. */
  colors: string[];
};

// Largura da janela de transição de cada letra, relativa à linha toda.
const SPREAD = 0.35;

function ScrollChar({
  char,
  progress,
  charIndex,
  totalChars,
  colors,
}: {
  char: string;
  progress: MotionValue<number>;
  charIndex: number;
  totalChars: number;
  colors: string[];
}) {
  const start = charIndex / (totalChars + totalChars * SPREAD);
  const mid = start + (SPREAD * 0.35) / (1 + SPREAD);
  const end = start + SPREAD / (1 + SPREAD);
  const stops = colors.length === 3 ? [start, mid, end] : [start, end];

  const color = useTransform(progress, stops, colors);

  return <motion.span style={{ color }}>{char}</motion.span>;
}

export function ScrollText({ text, progress, charOffset, totalChars, colors }: ScrollTextProps) {
  const chars = useMemo(() => text.split(""), [text]);

  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {chars.map((char, i) =>
          char === " " ? (
            " "
          ) : (
            <ScrollChar
              key={i}
              char={char}
              progress={progress}
              charIndex={charOffset + i}
              totalChars={totalChars}
              colors={colors}
            />
          ),
        )}
      </span>
    </>
  );
}
