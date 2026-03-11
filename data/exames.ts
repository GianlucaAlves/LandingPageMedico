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
      "Exame para avaliação detalhada do canal anal e identificação de lesões, inflamações e sangramentos.",
    icone: "lens",
  },
  {
    id: "retossigmoidoscopia",
    titulo: "Retossigmoidoscopia",
    descricao:
      "Visualização de reto e sigmoide para apoio diagnóstico em sintomas intestinais e lesões locais.",
    icone: "scope",
  },
  {
    id: "colonoscopia",
    titulo: "Colonoscopia",
    descricao:
      "Encaminhamento e acompanhamento para prevenção, rastreio e investigação do intestino grosso.",
    icone: "screen",
  },
  {
    id: "biopsia",
    titulo: "Biópsia de Lesões",
    descricao:
      "Coleta orientada quando há necessidade de confirmação histológica e definição terapêutica.",
    icone: "drop",
  },
  {
    id: "toque-retal",
    titulo: "Exame Proctológico",
    descricao:
      "Avaliação clínica cuidadosa para investigação inicial de queixas intestinais e anorretais.",
    icone: "hand",
  },
  {
    id: "rastreio",
    titulo: "Rastreamento Preventivo",
    descricao:
      "Orientação personalizada para prevenção e detecção precoce de doenças do aparelho digestivo baixo.",
    icone: "target",
  },
];
