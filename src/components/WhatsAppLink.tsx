"use client";

import { type CtaPosition, getRef, trackEvent } from "@/lib/analytics";
import { getGreeting, getWhatsAppUrl } from "@/lib/whatsapp";

type WhatsAppLinkProps = {
  className?: string;
  position: CtaPosition;
  /** Texto da mensagem pré-preenchida (sem a saudação). Padrão: mensagem da home. */
  message?: string;
  children: React.ReactNode;
};

export function WhatsAppLink({ className, position, message, children }: WhatsAppLinkProps) {
  function applyGreeting(event: React.SyntheticEvent<HTMLAnchorElement>) {
    event.currentTarget.href = getWhatsAppUrl(getGreeting(), getRef(), message);
  }

  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    applyGreeting(event);
    trackEvent("clique_diagnostico", { posicao: position, ref: getRef() });
  }

  return (
    <a
      // Link neutro, usado na renderização inicial do servidor.
      href={getWhatsAppUrl(undefined, undefined, message)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onMouseEnter={applyGreeting}
      onFocus={applyGreeting}
      onTouchStart={applyGreeting}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
