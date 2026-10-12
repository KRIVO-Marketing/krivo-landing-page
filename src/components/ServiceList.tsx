"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { ServiceStep } from "./ServiceStep";

type ServiceListProps = {
  services: { title: string; text: string }[];
};

export function ServiceList({ services }: ServiceListProps) {
  const listRef = useRef<HTMLDivElement>(null);

  // A linha central vai se preenchendo conforme a lista passa pela tela.
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 0.65", "end 0.35"],
  });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <div ref={listRef} className="relative">
      <div aria-hidden="true" className="absolute inset-y-0 left-3 w-px bg-line md:left-1/2">
        <motion.div className="h-full origin-top bg-navy" style={{ scaleY: fill }} />
      </div>
      {services.map((service, index) => (
        <ServiceStep
          key={service.title}
          number={String(index + 1).padStart(2, "0")}
          title={service.title}
          text={service.text}
          isLeft={index % 2 === 0}
        />
      ))}
    </div>
  );
}
