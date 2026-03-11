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
      "Orientações iniciais para chegar mais tranquilo ao atendimento.",
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
    description: "Quando os exames entram e como ajudam no diagnóstico.",
  },
  {
    id: "tratamentos",
    chip: "Tratamento e recuperacao",
    title: "Tratamentos e recuperação",
    icon: "check",
    description: "As próximas etapas depois que o quadro é identificado.",
  },
];

export const faq: FaqItem[] = [
  {
    categoria: "consulta",
    pergunta: "O que levar para a primeira consulta?",
    resposta:
      "Leve exames anteriores, a lista de remédios em uso e anote quando os sintomas começaram, o que piora e o que melhora o desconforto.",
  },
  {
    categoria: "consulta",
    pergunta: "Posso marcar consulta mesmo sem exames recentes?",
    resposta:
      "Sim. Muitas vezes a consulta inicial é justamente o momento de entender o quadro e definir se há necessidade de exames complementares.",
  },
  {
    categoria: "sintomas",
    pergunta: "Quando um sintoma merece investigação?",
    resposta:
      "Sangramento, dor ao evacuar, mudança persistente no hábito intestinal, secreção anal ou perda de peso sem explicação são sinais que merecem avaliação.",
  },
  {
    categoria: "sintomas",
    pergunta: "A consulta é feita com privacidade?",
    resposta:
      "Sim. O atendimento é conduzido com escuta, explicação clara e respeito ao seu conforto em cada etapa do exame clínico.",
  },
  {
    categoria: "exames",
    pergunta: "Todo paciente precisa fazer exame no primeiro dia?",
    resposta:
      "Não. A indicação depende dos sintomas, do histórico e da necessidade real. Quando um exame é recomendado, tudo é explicado antes.",
  },
  {
    categoria: "exames",
    pergunta: "Os exames são sempre dolorosos?",
    resposta:
      "Não necessariamente. Eles são conduzidos com técnica e orientação para reduzir desconforto, sempre respeitando o quadro e o limite do paciente.",
  },
  {
    categoria: "tratamentos",
    pergunta: "Hemorroida sempre precisa de cirurgia?",
    resposta:
      "Não. Muitos casos respondem bem a mudanças de hábitos, medicamentos e procedimentos ambulatoriais. A cirurgia é indicada apenas quando necessário.",
  },
  {
    categoria: "tratamentos",
    pergunta: "Atendem apenas casos cirúrgicos?",
    resposta:
      "Não. O acompanhamento inclui prevenção, diagnóstico, tratamentos clínicos, exames e indicação cirúrgica apenas quando apropriado para cada caso.",
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
