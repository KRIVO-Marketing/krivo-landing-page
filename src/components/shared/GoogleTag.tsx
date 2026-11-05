import Script from "next/script";
import { SOURCE_PREFIX } from "@/lib/analytics";

const GA_ID = "G-86HVDHE5M5";

/**
 * Google tag (gtag.js) do GA4. afterInteractive, não lazyOnload: quem chega pelo navegador do
 * Instagram e sai rápido (ou clica no WhatsApp logo) precisa contar como sessão.
 * A propriedade de usuário `origem` repete o código de getRef (ig-murilo etc.): o Tempo real
 * do GA4 só mostra dimensões de usuário, não os parâmetros do evento. Sem UTM, não sobrescreve.
 */
export function GoogleTag() {
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="google-tag" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
(function () {
  var p = new URLSearchParams(location.search);
  var prefix = ${JSON.stringify(SOURCE_PREFIX)}[(p.get('utm_source') || '').toLowerCase()];
  var content = (p.get('utm_content') || '').toLowerCase().replace(/[^a-z0-9-]/g, '');
  if (prefix && content) gtag('set', 'user_properties', { origem: prefix + '-' + content });
})();
gtag('config', '${GA_ID}');`}
      </Script>
    </>
  );
}
