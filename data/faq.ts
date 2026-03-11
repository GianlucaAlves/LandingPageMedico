export type FaqCategory = "consulta" | "sintomas" | "exames" | "tratamentos";

export interface FaqItem {
  categoria: FaqCategory;
  pergunta: string;
  resposta: string;
}

export const faqCategories: {
  id: FaqCategory;
  chip: string;
  title: string;
  icon: string;
  description: string;
}[] = [
  {
    id: "consulta",
    chip: "Primeira consulta",
    title: "Antes da consulta",
    icon: "conversation",
    description:
      "Orientacoes iniciais para chegar mais tranquilo ao atendimento.",
  },
  {
    id: "sintomas",
    chip: "Sintomas e sinais",
    title: "Sintomas e sinais",
    icon: "privacy",
    description: "O que costuma ser investigado e como a consulta acontece.",
  },
  {
    id: "exames",
    chip: "Exames",
    title: "Exames",
    icon: "search",
    description: "Quando os exames entram e como ajudam no diagnostico.",
  },
  {
    id: "tratamentos",
    chip: "Tratamento e recuperacao",
    title: "Tratamentos e recuperacao",
    icon: "check",
    description: "As proximas etapas depois que o quadro e identificado.",
  },
];

export const faq: FaqItem[] = [
  {
    categoria: "consulta",
    pergunta: "O que levar para a primeira consulta?",
    resposta:
      "Leve exames anteriores, a lista de remedios em uso e anote quando os sintomas comecaram, o que piora e o que melhora o desconforto.",
  },
  {
    categoria: "consulta",
    pergunta: "Posso marcar consulta mesmo sem exames recentes?",
    resposta:
      "Sim. Muitas vezes a consulta inicial e justamente o momento de entender o quadro e definir se ha necessidade de exames complementares.",
  },
  {
    categoria: "sintomas",
    pergunta: "Quando um sintoma merece investigacao?",
    resposta:
      "Sangramento, dor ao evacuar, mudanca persistente no habito intestinal, secrecao anal ou perda de peso sem explicacao sao sinais que merecem avaliacao.",
  },
  {
    categoria: "sintomas",
    pergunta: "A consulta e feita com privacidade?",
    resposta:
      "Sim. O atendimento e conduzido com escuta, explicacao clara e respeito ao seu conforto em cada etapa do exame clinico.",
  },
  {
    categoria: "exames",
    pergunta: "Todo paciente precisa fazer exame no primeiro dia?",
    resposta:
      "Nao. A indicacao depende dos sintomas, do historico e da necessidade real. Quando um exame e recomendado, tudo e explicado antes.",
  },
  {
    categoria: "exames",
    pergunta: "Os exames sao sempre dolorosos?",
    resposta:
      "Nao necessariamente. Eles sao conduzidos com tecnica e orientacao para reduzir desconforto, sempre respeitando o quadro e o limite do paciente.",
  },
  {
    categoria: "tratamentos",
    pergunta: "Hemorroida sempre precisa de cirurgia?",
    resposta:
      "Nao. Muitos casos respondem bem a mudancas de habitos, medicamentos e procedimentos ambulatoriais. A cirurgia e indicada apenas quando necessario.",
  },
  {
    categoria: "tratamentos",
    pergunta: "Atendem apenas casos cirurgicos?",
    resposta:
      "Nao. O acompanhamento inclui prevencao, diagnostico, tratamentos clinicos, exames e indicacao cirurgica apenas quando apropriado para cada caso.",
  },
];

export const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.pergunta,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.resposta,
    },
  })),
};
