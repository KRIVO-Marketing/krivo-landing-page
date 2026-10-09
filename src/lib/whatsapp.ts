export const WHATSAPP_DISPLAY = "+55 19 99679-2750";

const WHATSAPP_NUMBER = "5519996792750";
const WHATSAPP_TEXT = "Quero crescer com a KRIVO.";

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

export function getWhatsAppUrl(greeting: string = "Olá"): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`${greeting}! ${WHATSAPP_TEXT}`)}`;
}

/** Link neutro, usado na renderização inicial do servidor. */
export const WHATSAPP_URL = getWhatsAppUrl();
