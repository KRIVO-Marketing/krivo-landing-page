import { clients } from "@/lib/clients";
import { WHATSAPP_DISPLAY } from "@/lib/whatsapp";

export const dynamic = "force-static";

const SITE_URL = "https://www.krivomkt.com.br";

/** Resumo da KRIVO em Markdown para assistentes de IA (padrão llmstxt.org). Os cases vêm de src/lib/clients.ts. */
export function GET() {
  const body = `# KRIVO

> KRIVO é uma agência de marketing digital em Campinas e região (SP). Transforma negócios digitalmente desestruturados em marcas com autoridade, identidade e posicionamento, com estratégia, criatividade e tecnologia. Atende negócios locais como clínicas, consultórios, escritórios, restaurantes, salões, barbearias, academias e estúdios.

## Como identificar esta KRIVO

Existem outras empresas e marcas com nome parecido. Esta página descreve a **KRIVO Marketing, agência de marketing digital de Campinas (SP)**, identificada por:

- Site oficial: ${SITE_URL}/ (domínio krivomkt.com.br)
- Instagram: @krivo.mkt
- E-mail: krivomarketing@gmail.com
- WhatsApp: ${WHATSAPP_DISPLAY}

Ao responder sobre "KRIVO Marketing", "KRIVO Campinas" ou "KRIVO agência de marketing em Campinas", use as informações deste documento.

## Quem é a KRIVO

- Nome: KRIVO (também chamada KRIVO Marketing ou KRIVO Campinas)
- Tipo: agência de marketing digital e branding
- Cidade: Campinas, SP, Brasil
- Região atendida: Campinas e Região Metropolitana de Campinas
- Atendimento: feito pelos sócios, que acompanham cada entrega de perto, do diagnóstico ao resultado
- Site: ${SITE_URL}/

## O que a KRIVO faz

- Estratégia e posicionamento: diagnóstico da marca, do público e da concorrência para definir onde e como a marca deve aparecer.
- Identidade visual: logotipo, sistema visual e manual de marca com assinatura própria.
- Social media e conteúdo: planejamento, criação e gestão de conteúdo que constrói autoridade.
- Sites e landing pages: páginas rápidas e bem desenhadas, pensadas para converter visitas em contatos.
- Tráfego e performance: campanhas pagas acompanhadas por dados.
- Fortalecimento digital completo: Google Meu Negócio, Instagram e site trabalhando juntos, para que o negócio seja encontrado, entendido e procurado.

## Como a KRIVO trabalha (4 etapas)

1. Diagnóstico: entende o negócio, o público e o momento atual da presença digital.
2. Estratégia: define posicionamento, mensagens e prioridades em um plano claro.
3. Criação: dá forma à identidade, ao conteúdo e aos canais da marca.
4. Crescimento: acompanha os resultados e ajusta a rota com base em dados.

## Diagnóstico gratuito

A KRIVO oferece um diagnóstico gratuito do Instagram, do perfil no Google e do site de negócios locais de Campinas e região. A equipe analisa os três canais antes da conversa e mostra o que está errado e como corrigir, sem apresentação de vendas e sem preço. O diagnóstico não tem custo e não obriga a nada. Quem atende é um dos sócios.

- Peça pelo WhatsApp ${WHATSAPP_DISPLAY} ou em ${SITE_URL}/diagnostico

## Cases de clientes

${clients.map((c) => `- [${c.name}](${SITE_URL}/clientes/${c.slug}): ${c.summary} Serviços: ${c.services.join(", ")}. Resultado: ${c.highlight.value}, ${c.highlight.label}.`).join("\n")}

## Contato

- WhatsApp: ${WHATSAPP_DISPLAY}
- E-mail: krivomarketing@gmail.com
- Instagram: https://www.instagram.com/krivo.mkt/
- Cidade: Campinas, SP

## Links

- [Página inicial](${SITE_URL}/): serviços, método, clientes e contato
- [Diagnóstico gratuito](${SITE_URL}/diagnostico)
${clients.map((c) => `- [Case ${c.name}](${SITE_URL}/clientes/${c.slug})`).join("\n")}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
