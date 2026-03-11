export interface Tratamento {
  id: string;
  titulo: string;
  descricao: string;
  icone: string;
}

export const tratamentos: Tratamento[] = [
  {
    id: "hemorroidas",
    titulo: "Hemorroidas",
    descricao:
      "Diagnostico e tratamento clinico ou cirurgico para dor, sangramento e desconforto anal.",
    icone: "cross",
  },
  {
    id: "fissura-anal",
    titulo: "Fissura Anal",
    descricao:
      "Conduta individualizada para aliviar dor intensa, cicatrizar a lesao e prevenir recorrencias.",
    icone: "spark",
  },
  {
    id: "fistula-anal",
    titulo: "Fistula Anal",
    descricao:
      "Avaliacao especializada com indicacao precisa do tratamento mais adequado para cada trajeto fistuloso.",
    icone: "path",
  },
  {
    id: "constipacao",
    titulo: "Constipacao Intestinal",
    descricao:
      "Investigacao das causas da prisao de ventre cronica com orientacao clinica e acompanhamento.",
    icone: "flow",
  },
  {
    id: "dor-pelvica",
    titulo: "Dor Pelvica e Anorretal",
    descricao:
      "Abordagem completa para quadros dolorosos persistentes que afetam rotina, sono e bem-estar.",
    icone: "pulse",
  },
  {
    id: "incontinencia",
    titulo: "Incontinencia Fecal",
    descricao:
      "Investigacao funcional e plano terapeutico para recuperar seguranca e qualidade de vida.",
    icone: "shield",
  },
];