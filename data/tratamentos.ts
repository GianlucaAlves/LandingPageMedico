export interface Tratamento {
  id: string;
  queixa: string;
  titulo: string;
  descricao: string;
  resumoLeigo: string;
  icone: string;
  sinais: {
    nivel: "Comum" | "Atencao" | "Importante";
    texto: string;
  }[];
}

export const tratamentos: Tratamento[] = [
  {
    id: "hemorroidas",
    queixa: "Sangramento ao evacuar",
    titulo: "Hemorroidas",
    descricao:
      "Esse quadro pode estar relacionado a hemorroidas, que costumam causar sangramento, incomodo local e piora ao evacuar. A confirmacao depende de avaliacao individual.",
    resumoLeigo:
      "Sangue vivo nas fezes ou no papel pode indicar irritacao ou dilatacao das veias da regiao anal.",
    icone: "hemorrhoid",
    sinais: [
      {
        nivel: "Comum",
        texto: "Sangramento ao evacuar ou ao se limpar.",
      },
      {
        nivel: "Atencao",
        texto: "Coceira, inchaco ou sensacao de peso na regiao anal.",
      },
      {
        nivel: "Importante",
        texto: "Dor ao evacuar ou presenca de nodulo doloroso.",
      },
    ],
  },
  {
    id: "fissura-anal",
    queixa: "Dor ao evacuar",
    titulo: "Fissura Anal",
    descricao:
      "Esse sintoma pode estar relacionado a fissura anal, uma pequena lesao que costuma causar dor forte e ardor. A avaliacao mostra a gravidade e o melhor cuidado.",
    resumoLeigo:
      "Quando evacuar passa a doer muito, com ardor ou corte, vale investigar para evitar piora e recorrencia.",
    icone: "fissure",
    sinais: [
      {
        nivel: "Importante",
        texto: "Dor forte durante e apos evacuar.",
      },
      {
        nivel: "Atencao",
        texto: "Ardor anal persistente e espasmo local.",
      },
      {
        nivel: "Comum",
        texto: "Pequena quantidade de sangue vivo nas fezes ou no papel.",
      },
    ],
  },
  {
    id: "fistula-anal",
    queixa: "Secrecao ou inflamacao anal",
    titulo: "Fistula Anal",
    descricao:
      "Secrecao, inflamacao recorrente ou abscesso podem estar relacionados a fistula anal. Esse e um quadro que merece avaliacao para definir o tratamento correto.",
    resumoLeigo:
      "Quando ha secrecao, caroço inflamado ou infeccoes repetidas na regiao anal, a causa precisa ser investigada com cuidado.",
    icone: "fistula",
    sinais: [
      {
        nivel: "Importante",
        texto: "Saida de secrecao pela regiao anal.",
      },
      {
        nivel: "Atencao",
        texto: "Caroco, inflamacao recorrente ou abscesso.",
      },
      {
        nivel: "Comum",
        texto: "Dor local com piora ao sentar ou caminhar.",
      },
    ],
  },
  {
    id: "constipacao",
    queixa: "Prisao de ventre frequente",
    titulo: "Constipacao Intestinal",
    descricao:
      "Prisao de ventre frequente pode estar ligada a constipacao intestinal e precisa ser entendida dentro da sua rotina, alimentacao e sintomas associados.",
    resumoLeigo:
      "Evacuar com dificuldade por semanas, com fezes endurecidas e muito esforco, pede avaliacao para encontrar a causa.",
    icone: "intestine",
    sinais: [
      {
        nivel: "Importante",
        texto: "Dificuldade para evacuar por mais de duas semanas.",
      },
      {
        nivel: "Comum",
        texto: "Fezes endurecidas e sensacao de evacuacao incompleta.",
      },
      {
        nivel: "Atencao",
        texto:
          "Estufamento, desconforto abdominal ou necessidade de muito esforco.",
      },
    ],
  },
  {
    id: "dor-pelvica",
    queixa: "Dor ou pressao na regiao anal",
    titulo: "Dor Pelvica e Anorretal",
    descricao:
      "Dor persistente ou sensacao de pressao na regiao anal pode ter diferentes causas. A consulta ajuda a identificar o que merece tratamento e o que precisa de exame.",
    resumoLeigo:
      "Desconforto ao sentar, pontadas ou dor constante nao devem ser ignorados quando se repetem ou pioram.",
    icone: "pelvic-pain",
    sinais: [
      {
        nivel: "Importante",
        texto: "Dor persistente na pelve, no anus ou no reto.",
      },
      {
        nivel: "Atencao",
        texto: "Desconforto que piora ao permanecer sentado.",
      },
      {
        nivel: "Comum",
        texto: "Sensacao de pressao, queimacao ou pontadas recorrentes.",
      },
    ],
  },
  {
    id: "incontinencia",
    queixa: "Dificuldade para segurar fezes ou gases",
    titulo: "Incontinencia Fecal",
    descricao:
      "Quando ha dificuldade para segurar gases ou fezes, pode existir um quadro de incontinencia fecal que precisa ser avaliado com acolhimento e discricao.",
    resumoLeigo:
      "Se voce tem escapes ou medo de acidentes, vale investigar a causa para recuperar seguranca no dia a dia.",
    icone: "protection",
    sinais: [
      {
        nivel: "Comum",
        texto: "Dificuldade para segurar gases ou fezes.",
      },
      {
        nivel: "Importante",
        texto: "Escape fecal em pequenas ou grandes quantidades.",
      },
      {
        nivel: "Atencao",
        texto: "Mudanca importante na rotina por medo de acidentes.",
      },
    ],
  },
];
