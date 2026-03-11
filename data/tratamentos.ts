export interface Tratamento {
  id: string;
  titulo: string;
  descricao: string;
  icone: string;
  sinais: string[];
}

export const tratamentos: Tratamento[] = [
  {
    id: "hemorroidas",
    titulo: "Hemorroidas",
    descricao:
      "Diagnostico e tratamento clinico ou cirurgico para dor, sangramento e desconforto anal.",
    icone: "hemorrhoid",
    sinais: [
      "Sangramento ao evacuar ou ao se limpar.",
      "Coceira, inchaco ou sensacao de peso na regiao anal.",
      "Dor ao evacuar ou presenca de nodulo doloroso.",
    ],
  },
  {
    id: "fissura-anal",
    titulo: "Fissura Anal",
    descricao:
      "Conduta individualizada para aliviar dor intensa, cicatrizar a lesao e prevenir recorrencias.",
    icone: "fissure",
    sinais: [
      "Dor forte durante e apos evacuar.",
      "Ardor anal persistente e espasmo local.",
      "Pequena quantidade de sangue vivo nas fezes ou no papel.",
    ],
  },
  {
    id: "fistula-anal",
    titulo: "Fistula Anal",
    descricao:
      "Avaliacao especializada com indicacao precisa do tratamento mais adequado para cada trajeto fistuloso.",
    icone: "fistula",
    sinais: [
      "Saida de secrecao pela regiao anal.",
      "Caroço, inflamacao recorrente ou abscesso.",
      "Dor local com piora ao sentar ou caminhar.",
    ],
  },
  {
    id: "constipacao",
    titulo: "Constipacao Intestinal",
    descricao:
      "Investigacao das causas da prisao de ventre cronica com orientacao clinica e acompanhamento.",
    icone: "intestine",
    sinais: [
      "Dificuldade para evacuar por mais de duas semanas.",
      "Fezes endurecidas e sensacao de evacuacao incompleta.",
      "Estufamento, desconforto abdominal ou necessidade de muito esforco.",
    ],
  },
  {
    id: "dor-pelvica",
    titulo: "Dor Pelvica e Anorretal",
    descricao:
      "Abordagem completa para quadros dolorosos persistentes que afetam rotina, sono e bem-estar.",
    icone: "pelvic-pain",
    sinais: [
      "Dor persistente na pelve, no anus ou no reto.",
      "Desconforto que piora ao permanecer sentado.",
      "Sensacao de pressao, queimação ou pontadas recorrentes.",
    ],
  },
  {
    id: "incontinencia",
    titulo: "Incontinencia Fecal",
    descricao:
      "Investigacao funcional e plano terapeutico para recuperar seguranca e qualidade de vida.",
    icone: "protection",
    sinais: [
      "Dificuldade para segurar gases ou fezes.",
      "Escape fecal em pequenas ou grandes quantidades.",
      "Mudanca importante na rotina por medo de acidentes.",
    ],
  },
];
