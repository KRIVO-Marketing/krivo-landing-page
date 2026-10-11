"use client";

import { getGreeting, getWhatsAppUrl, WHATSAPP_URL } from "@/lib/whatsapp";

type WhatsAppLinkProps = {
  className?: string;
  children: React.ReactNode;
};

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
