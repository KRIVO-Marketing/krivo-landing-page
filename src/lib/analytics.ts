declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Onde o botão do WhatsApp foi clicado; vira o parâmetro `posicao` do evento no GA4. */
export type CtaPosition = "menu" | "topo" | "rodape" | "contato";

// Prefixo do código de origem por utm_source (ex.: instagram + murilo → ig-murilo).
const SOURCE_PREFIX: Record<string, string> = {
  instagram: "ig",
  linkedin: "in",
  google: "g",
};

/** Código curto da origem da visita, lido da UTM. Sem UTM reconhecida, "site". */
export function getRef(search: string = window.location.search): string {
  const params = new URLSearchParams(search);
  const prefix = SOURCE_PREFIX[params.get("utm_source")?.toLowerCase() ?? ""];
  const content = params.get("utm_content")?.toLowerCase().replace(/[^a-z0-9-]/g, "");
  return prefix && content ? `${prefix}-${content}` : "site";
}

/** Envia um evento ao GA4. Se o gtag.js ainda não carregou, entra na fila do dataLayer. */
export function trackEvent(name: string, params: Record<string, string>) {
  if (typeof window.gtag === "function") {
    window.gtag("event", name, params);
    return;
  }
  window.dataLayer = window.dataLayer || [];
  // O gtag.js só processa entradas no formato `arguments`, não arrays comuns.
  const queue: (...args: unknown[]) => void = function () {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  queue("event", name, params);
}
