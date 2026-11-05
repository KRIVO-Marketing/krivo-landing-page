export type ClientService = "Google Meu Negócio" | "Instagram" | "Site";

export type Client = {
  slug: string;
  name: string;
  /** Nome curto, usado nos links ("Ver o site da Quintana"). */
  shortName: string;
  services: ClientService[];
  /** Resumo em uma frase (llms.txt). */
  summary: string;
  /** Resultado em uma frase, depois do nome do cliente no título do case. */
  headline: string;
  /** Destaque principal em texto corrido (llms.txt). */
  highlight: { value: string; label: string };
  /** Posições no ranking do Google, exibidas em destaque ao lado do print. */
  rank: { from: number; to: number };
  /** Números de apoio exibidos abaixo do título. */
  facts: { value: string; label: string }[];
  /** Print da busca no Google, como prova do ranking. */
  proof: { src: string; width: number; height: number; alt: string; caption: string };
  /** Vídeos produzidos para o cliente (mp4 + capa em /public). */
  videos: { src: string; poster: string; width: number; height: number; title: string }[];
  /** Links públicos do cliente. */
  links: { label: "Site" | "Instagram"; href: string }[];
};

// Para adicionar um cliente: acrescente um item abaixo. Ele aparece na seção Resultados da home.
export const clients: Client[] = [
  {
    slug: "barbearia-quintana",
    name: "Barbearia Quintana",
    shortName: "Quintana",
    services: ["Google Meu Negócio", "Instagram", "Site"],
    summary: "Fortalecimento digital completo: Google, Instagram e site.",
    headline: "do 5º ao 2º lugar no Google em uma semana.",
    highlight: { value: "5º → 2º", label: "posição no Google na região, com 1 semana de contrato" },
    rank: { from: 5, to: 2 },
    facts: [
      { value: "4,9", label: "nota no Google" },
      { value: "45", label: "avaliações no Google" },
    ],
    proof: {
      src: "/clients/quintana/ranking-google.webp",
      width: 565,
      height: 306,
      alt: "Resultado do Google em Campinas: a Barbearia Quintana, com nota 4,9 e 45 avaliações, aparece em segundo lugar, logo abaixo da Barbearia Zero19.",
      caption: "Busca real no Google. Antes do trabalho, a Quintana aparecia em 5º.",
    },
    videos: [
      { src: "/clients/quintana/video-horizontal.mp4", poster: "/clients/quintana/video-horizontal.webp", width: 1280, height: 720, title: "Vídeo institucional da Barbearia Quintana" },
      { src: "/clients/quintana/video-vertical.mp4", poster: "/clients/quintana/video-vertical.webp", width: 720, height: 1280, title: "Vídeo vertical da Barbearia Quintana para Instagram" },
    ],
    links: [
      { label: "Site", href: "https://barbeariaquintana.com.br" },
      { label: "Instagram", href: "https://www.instagram.com/barbearia_quintana/" },
    ],
  },
];
