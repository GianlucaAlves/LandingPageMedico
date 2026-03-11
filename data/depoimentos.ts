export interface Depoimento {
  id: string;
  nome: string;
  avaliacao: number;
  texto: string;
  foto: string;
}

export const depoimentos: Depoimento[] = [
  {
    id: "leticia",
    nome: "Leticia Zanholo",
    avaliacao: 5,
    foto: "/leticia.webp",
    texto:
      "Excelente medico! Um profissional humano que ajuda o próximo e exerce a profissão como ela deve ser exercida: cuidado de pessoas. Obrigada doutor",
  },
  {
    id: "marcos",
    nome: "Marcos Ronaldo",
    avaliacao: 5,
    foto: "/marcos.png",
    texto:
      "Muito atencioso! Ótimo profissional! Recomendo",
  },
  {
    id: "luciana",
    nome: "Luciana Marques",
    avaliacao: 5,
    foto: "/luciana.png",
    texto:
      "Pontos positivos: tudo mesmo , ele descobriu exatamente o que eu tinha, estou em tratamento e hoje me sinto muito bem.",
  },
  {
    id: "luiza",
    nome: "Luiza Serrafiori",
    avaliacao: 5,
    foto: "/luiza.jpeg",
    texto:
      "Ótimo médico.",
  },
  {
    id: "claudio",
    nome: "Claúdio Manfredini",
    avaliacao: 5,
    foto: "/claudio.webp",
    texto:
      "Confiável, atencioso, profissional, competente.",
  },
  {
    id: "felipe",
    nome: "Felipe Antonio",
    avaliacao: 5,
    foto: "/felipe.jpg",
    texto:
      "Por todas as qualificações acima, confiável, pronto nas necessidades.",
  },
];
