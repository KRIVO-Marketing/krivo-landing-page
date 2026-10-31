export const WHATSAPP_DISPLAY = "+55 19 99679-2750";

const WHATSAPP_NUMBER = "5519996792750";
const WHATSAPP_TEXT = "Quero crescer com a KRIVO.";

/** Mensagem da /diagnostico: o "@____" é para a pessoa completar com o @ do negócio. */
export const DIAGNOSTICO_TEXT = "Vim pelo site e quero meu diagnóstico gratuito. Meu negócio é @____";

/** Saudação conforme o horário de Brasília: 5h–11h59 dia, 12h–17h59 tarde, resto noite. */
export function getGreeting(date: Date = new Date()): string {
  const hour = Number(
    new Intl.DateTimeFormat("pt-BR", {
      hour: "numeric",
      hourCycle: "h23",
      timeZone: "America/Sao_Paulo",
    }).format(date),
  );

  if (hour >= 5 && hour < 12) return "Bom dia";
  if (hour >= 12 && hour < 18) return "Boa tarde";
  return "Boa noite";
}

/** `ref` é o código de origem (ex.: ig-murilo), para os sócios contarem conversas por link. */
export function getWhatsAppUrl(
  greeting: string = "Olá",
  ref?: string,
  message: string = WHATSAPP_TEXT,
): string {
  const text = `${greeting}! ${message}${ref ? ` (ref: ${ref})` : ""}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}