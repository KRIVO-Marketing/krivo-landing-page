"use client";

import { type CtaPosition, getRef, trackEvent } from "@/lib/analytics";
import { getGreeting, getWhatsAppUrl, WHATSAPP_URL } from "@/lib/whatsapp";

type WhatsAppLinkProps = {
  className?: string;
  position: CtaPosition;
  children: React.ReactNode;
};

function applyGreeting(event: React.SyntheticEvent<HTMLAnchorElement>) {
  event.currentTarget.href = getWhatsAppUrl(getGreeting(), getRef());
}

export function WhatsAppLink({ className, position, children }: WhatsAppLinkProps) {
  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    applyGreeting(event);
    trackEvent("clique_diagnostico", { posicao: position, ref: getRef() });
  }

  return (
    <a
      href={WHATSAPP_URL}
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
