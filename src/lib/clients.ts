export type ClientService = "Google Meu Negócio" | "Instagram" | "Site";

export type Client = {
  slug: string;
  name: string;
  /** Segmento e cidade (opcional), exibidos no card e no topo da página. */
  segment?: string;
  /** Caminho em /public (opcional). Sem logo, o card mostra o monograma. */
  logo?: string;
  services: ClientService[];
  /** Frase curta que aparece no card do mural. */
  summary: string;
  /** Destaque principal do case: número ou posição grande + legenda. */
  highlight: { value: string; label: string };
  /** Contexto e resultado, um parágrafo por item. */
  story: string[];
  /** Números de apoio exibidos em linha abaixo do destaque. */
  facts?: { value: string; label: string }[];
  /** Links públicos do cliente. */
  links?: { label: string; href: string }[];
  /** Um bloco por canal: manchete de impacto, o que foi feito e os pontos fortes. */
  channels: { service: ClientService; headline: string; delivered: string; points: string[] }[];
  /** Bloco de SEO / AEO (busca tradicional e assistentes de IA). */
  seo?: { title: string; intro: string; items: { title: string; text: string }[] };
  /** Estratégia complementar (ex.: coleta de avaliações). */
  strategy?: { title: string; text: string };
};

// Para adicionar um cliente: acrescente um item abaixo. A página /clientes/<slug> é gerada no build.
export const clients: Client[] = [
  {
    slug: "barbearia-quintana",
    name: "Barbearia Quintana",
    logo: "/clients/quintana.webp",
    services: ["Google Meu Negócio", "Instagram", "Site"],
    summary: "Fortalecimento digital completo: Google, Instagram e site.",
    highlight: { value: "3º → 2º", label: "posição no Google na região, com 1 semana de contrato" },
    facts: [
      { value: "4,9", label: "nota no Google" },
      { value: "45", label: "avaliações no Google" },
    ],
    links: [
      { label: "Site", href: "https://barbeariaquintana.com.br" },
      { label: "Instagram", href: "https://www.instagram.com/barbearia_quintana/" },
    ],
    story: [
      "Com uma semana de contrato, otimizando Google Meu Negócio, Instagram e site de forma alinhada, a Barbearia Quintana subiu da terceira para a segunda posição no Google na região.",
      "O resultado veio mesmo com menos avaliações que o perfil que estava logo acima na lista anterior: a otimização integrada dos três canais fez a diferença.",
    ],
    channels: [
      {
        service: "Google Meu Negócio",
        headline: "Nota 4,9 que gera confiança",
        delivered: "Perfil otimizado: categorias, descrição, produtos e planos do Clube Quintana, fotos e contato.",
        points: [
          "Comentários citam atendimento, ambiente e preço justo.",
          "Clube Quintana com planos e preços no próprio perfil.",
          "Telefone, horário, rotas e site completos.",
        ],
      },
      {
        service: "Instagram",
        headline: "Perfil que explica tudo em segundos",
        delivered: "Bio, horários e chamada para agendamento, alinhados à identidade da marca.",
        points: [
          "Bio direta, com serviços, horário e link do site.",
          "Destaques organizados: Quintana, Agendamento, Cortes.",
          "Vídeos do espaço, série temática e anúncio do novo site.",
        ],
      },
      {
        service: "Site",
        headline: "Agenda em poucos toques",
        delivered: "Serviços, valores, Clube Quintana e agendamento direto pelo WhatsApp, feito para ser encontrado na região.",
        points: [
          "Cliente escolhe serviço, dia e horário e envia a mensagem pronta.",
          "Textos e perguntas frequentes escritos para as buscas locais.",
          "Avaliações do Google em destaque, com botão para avaliar.",
        ],
      },
    ],
    seo: {
      title: "Fácil de encontrar, em qualquer lugar que o cliente procure",
      intro: "Google, Instagram e site trabalham juntos: quem busca barbearia em Campinas encontra a Quintana, entende o que ela oferece e agenda sem esforço, seja pela busca, pelas redes ou pelo ChatGPT.",
      items: [
        { title: "Aparece na busca da cidade", text: "\"Barbearia em Campinas\" está no site, no perfil do Google e na bio do Instagram, as palavras que o cliente realmente digita." },
        { title: "Mesmas informações em todo lugar", text: "Endereço, telefone, horário e preços iguais no Google, no Instagram e no site, o que passa confiança para o cliente e para o Google." },
        { title: "Dúvidas respondidas antes", text: "Preço, horário, pagamento e como agendar já estão explicados no site, sem o cliente precisar perguntar." },
        { title: "Pronto para as IAs", text: "ChatGPT, Gemini e outros assistentes conseguem ler e responder certo sobre a barbearia: endereço, horários, preços e Clube." },
        { title: "Avaliações que sustentam o resultado", text: "A nota 4,9 do Google também aparece no site, e a plaquinha de NFC traz novas avaliações todo mês." },
        { title: "Do Google ao agendamento", text: "O Google e o Instagram levam ao site, e o site leva direto ao WhatsApp, sem caminho perdido." },
      ],
    },
    strategy: {
      title: "Estratégia de avaliações",
      text: "Plaquinha de NFC no espaço: o cliente aproxima o celular e já cai na tela de avaliação do Google, ainda no atendimento. Mais avaliações recentes reforçam a posição conquistada e alimentam o perfil, o site e o Instagram.",
    },
  },
];

export function getClient(slug: string) {
  return clients.find((c) => c.slug === slug);
}

export function initials(name: string) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}
