export interface FaqItem {
  pergunta: string;
  resposta: string;
}

export const faq: FaqItem[] = [
  {
    pergunta: "Quando devo procurar um proctologista?",
    resposta:
      "Dor ao evacuar, sangue nas fezes, coceira anal, alteracao do habito intestinal e caroços na regiao anal merecem avaliacao especializada.",
  },
  {
    pergunta: "Hemorroida sempre precisa de cirurgia?",
    resposta:
      "Nao. Muitos casos respondem bem a mudancas de habitos, medicamentos e procedimentos ambulatoriais. A cirurgia e indicada apenas quando necessario.",
  },
  {
    pergunta: "Os exames proctologicos sao dolorosos?",
    resposta:
      "Os exames sao conduzidos com tecnica, acolhimento e explicacao previa para reduzir desconforto e garantir seguranca durante a avaliacao.",
  },
  {
    pergunta: "Qual preparo preciso fazer antes da consulta?",
    resposta:
      "Leve exames anteriores, lista de medicamentos em uso e relate inicio, frequencia e intensidade dos sintomas para agilizar a avaliacao.",
  },
  {
    pergunta: "Atendem somente casos cirurgicos?",
    resposta:
      "Nao. O acompanhamento inclui prevencao, diagnostico, tratamentos clinicos, exames e indicacao cirurgica apenas quando apropriado.",
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