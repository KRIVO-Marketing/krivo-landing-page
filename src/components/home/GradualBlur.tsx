"use client";

import { useEffect, useState } from "react";

const layers = [
  "backdrop-blur-[0.062rem] gradual-blur-1",
  "backdrop-blur-[0.125rem] gradual-blur-2",
  "backdrop-blur-[0.283rem] gradual-blur-3",
  "backdrop-blur-[0.562rem] gradual-blur-4",
  "backdrop-blur-[0.75rem] gradual-blur-5",
];

export function GradualBlur() {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
      // Esconde quando está a 50px do fim da página
      setIsAtBottom(scrollTop + clientHeight >= scrollHeight - 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sem opacidade parcial no pai: isso isolaria os filhos e o backdrop-blur sumiria.
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed bottom-0 left-0 z-[3] h-[56px] w-full transition-opacity duration-500 md:h-[80px] ${
        isAtBottom ? "opacity-0" : "opacity-100"
      }`}
    >
      {layers.map((layer) => (
        <div key={layer} className={`absolute inset-0 ${layer}`} />
      ))}
    </div>
  );
}
