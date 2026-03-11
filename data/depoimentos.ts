export interface Depoimento {
  id: string;
  nome: string;
  avaliacao: number;
  texto: string;
}

export const depoimentos: Depoimento[] = [
  {
    id: "ana",
    nome: "Ana Paula S.",
    avaliacao: 5,
    texto:
      "Fui atendida com muito respeito e clareza. Recebi explicacoes detalhadas e um tratamento que trouxe alivio ja nas primeiras semanas.",
  },
  {
    id: "marcos",
    nome: "Marcos R.",
    avaliacao: 5,
    texto:
      "Consultorio organizado, atendimento pontual e excelente acompanhamento no pos-consulta. Profissional extremamente atencioso.",
  },
  {
    id: "luciana",
    nome: "Luciana M.",
    avaliacao: 5,
    texto:
      "Eu tinha muito receio de passar por consulta proctologica, mas o atendimento foi humano, discreto e muito tranquilizador.",
  },
];