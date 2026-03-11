export interface Exame {
  id: string;
  titulo: string;
  descricao: string;
  icone: string;
}

export const exames: Exame[] = [
  {
    id: "anuscopia",
    titulo: "Anuscopia",
    descricao:
      "Exame para avaliacao detalhada do canal anal e identificacao de lesoes, inflamacoes e sangramentos.",
    icone: "lens",
  },
  {
    id: "retossigmoidoscopia",
    titulo: "Retossigmoidoscopia",
    descricao:
      "Visualizacao de reto e sigmoide para apoio diagnostico em sintomas intestinais e lesoes locais.",
    icone: "scope",
  },
  {
    id: "colonoscopia",
    titulo: "Colonoscopia",
    descricao:
      "Encaminhamento e acompanhamento para prevencao, rastreio e investigacao do intestino grosso.",
    icone: "screen",
  },
  {
    id: "biopsia",
    titulo: "Biopsia de Lesoes",
    descricao:
      "Coleta orientada quando ha necessidade de confirmacao histologica e definicao teraputica.",
    icone: "drop",
  },
  {
    id: "toque-retal",
    titulo: "Exame Proctologico",
    descricao:
      "Avaliacao clinica cuidadosa para investigacao inicial de queixas intestinais e anorretais.",
    icone: "hand",
  },
  {
    id: "rastreio",
    titulo: "Rastreamento Preventivo",
    descricao:
      "Orientacao personalizada para prevencao e deteccao precoce de doencas do aparelho digestivo baixo.",
    icone: "target",
  },
];