"use client";

import { useEffect, useState } from "react";
import { DiagnosticoCta } from "./DiagnosticoCta";

/** Botão fixo no rodapé da tela (só celular). Some enquanto o botão do topo ou o final estão visíveis. */
export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const targets = ["cta-topo", "cta-final"]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (!("IntersectionObserver" in window) || targets.length === 0) return;

    const onScreen = new Set<Element>();
    const io = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) onScreen.add(entry.target);
        else onScreen.delete(entry.target);
      }
      setVisible(onScreen.size === 0);
    });
    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-10 hidden bg-white/90 px-4 pt-3 pb-[max(12px,env(safe-area-inset-bottom))] shadow-[0_-8px_24px_rgba(34,56,98,0.12)] backdrop-blur-md transition-transform duration-300 ease-out mobile:block ${
        visible ? "translate-y-0" : "pointer-events-none translate-y-full"
      }`}
      inert={!visible}
    >
      <DiagnosticoCta position="fixo" tone="dark" />
    </div>
  );
}
