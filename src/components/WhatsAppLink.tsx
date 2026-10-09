"use client";

import { getGreeting, getWhatsAppUrl, WHATSAPP_URL } from "@/lib/whatsapp";

type WhatsAppLinkProps = {
  className?: string;
  children: React.ReactNode;
};

// A página é gerada no build, então a saudação (bom dia/tarde/noite) não pode
// ficar no HTML. O link nasce neutro e ganha a saudação, no horário de Brasília,
// logo antes de ser usado (mouse, foco, toque ou clique).
function applyGreeting(event: React.SyntheticEvent<HTMLAnchorElement>) {
  event.currentTarget.href = getWhatsAppUrl(getGreeting());
}

export function WhatsAppLink({ className, children }: WhatsAppLinkProps) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onMouseEnter={applyGreeting}
      onFocus={applyGreeting}
      onTouchStart={applyGreeting}
      onClick={applyGreeting}
    >
      {children}
    </a>
  );
}
