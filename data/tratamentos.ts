export interface Tratamento {
  id: string;
  queixa: string;
  titulo: string;
  descricao: string;
  resumoLeigo: string;
  icone: string;
  sinais: {
    nivel: "Leve" | "Atenção" | "Grave";
    texto: string;
  }[];
}

export const tratamentos: Tratamento[] = [
  {
    id: "hemorroidas",
    queixa: "Sangramento ao evacuar",
    titulo: "Hemorroidas",
    descricao:
      "Esse quadro pode estar relacionado a hemorroidas, que costumam causar sangramento, incômodo local e piora ao evacuar. A confirmação depende de avaliação individual.",
    resumoLeigo:
      "Sangue vivo nas fezes ou no papel pode indicar irritação ou dilatação das veias da região anal.",
    icone: "hemorrhoid",
    sinais: [
      {
        nivel: "Leve",
        texto: "Sangramento ao evacuar ou ao se limpar.",
      },
      {
        nivel: "Atenção",
        texto: "Coceira, inchaço ou sensação de peso na região anal.",
      },
      {
        nivel: "Grave",
        texto: "Dor ao evacuar ou presença de nódulo doloroso.",
      },
    ],
  },
  {
    id: "fissura-anal",
    queixa: "Dor ao evacuar",
    titulo: "Fissura Anal",
    descricao:
      "Esse sintoma pode estar relacionado à fissura anal, uma pequena lesão que costuma causar dor forte e ardor. A avaliação mostra a gravidade e o melhor cuidado.",
    resumoLeigo:
      "Quando evacuar passa a doer muito, com ardor ou corte, vale investigar para evitar piora e recorrência.",
    icone: "fissure",
    sinais: [
      { nivel: "Grave", texto: "Dor forte durante e após evacuar." },
      {
        nivel: "Atenção",
        texto: "Ardor anal persistente e espasmo local.",
      },
      {
        nivel: "Leve",
        texto: "Pequena quantidade de sangue vivo nas fezes ou no papel.",
      },
    ],
  },
  {
    id: "fistula-anal",
    queixa: "Secreção ou inflamação anal",
    titulo: "Fistula Anal",
    descricao:
      "Secreção, inflamação recorrente ou abscesso podem estar relacionados à fístula anal. Esse é um quadro que merece avaliação para definir o tratamento correto.",
    resumoLeigo:
      "Quando há secreção, caroço inflamado ou infecções repetidas na região anal, a causa precisa ser investigada com cuidado.",
    icone: "fistula",
    sinais: [
      { nivel: "Grave", texto: "Saída de secreção pela região anal." },
      {
        nivel: "Atenção",
        texto: "Caroço, inflamação recorrente ou abscesso.",
      },
      { nivel: "Leve", texto: "Dor local com piora ao sentar ou caminhar." },
    ],
  },
  {
    id: "constipacao",
    queixa: "Prisão de ventre frequente",
    titulo: "Constipação Intestinal",
    descricao:
      "Prisão de ventre frequente pode estar ligada à constipação intestinal e precisa ser entendida dentro da sua rotina, alimentação e sintomas associados.",
    resumoLeigo:
      "Evacuar com dificuldade por semanas, com fezes endurecidas e muito esforço, pede avaliação para encontrar a causa.",
    icone: "intestine",
    sinais: [
      {
        nivel: "Grave",
        texto: "Dificuldade para evacuar por mais de duas semanas.",
      },
      {
        nivel: "Leve",
        texto: "Fezes endurecidas e sensação de evacuação incompleta.",
      },
      {
        nivel: "Atenção",
        texto:
          "Estufamento, desconforto abdominal ou necessidade de muito esforço.",
      },
    ],
  },
  {
    id: "dor-pelvica",
    queixa: "Dor ou pressão na região anal",
    titulo: "Dor Pélvica e Anorretal",
    descricao:
      "Dor persistente ou sensação de pressão na região anal pode ter diferentes causas. A consulta ajuda a identificar o que merece tratamento e o que precisa de exame.",
    resumoLeigo:
      "Desconforto ao sentar, pontadas ou dor constante não devem ser ignorados quando se repetem ou pioram.",
    icone: "pelvic-pain",
    sinais: [
      {
        nivel: "Grave",
        texto: "Dor persistente na pelve, no ânus ou no reto.",
      },
      {
        nivel: "Atenção",
        texto: "Desconforto que piora ao permanecer sentado.",
      },
      {
        nivel: "Leve",
        texto: "Sensação de pressão, queimação ou pontadas recorrentes.",
      },
    ],
  },
  {
    id: "incontinencia",
    queixa: "Dificuldade para segurar fezes ou gases",
    titulo: "Incontinência Fecal",
    descricao:
      "Quando há dificuldade para segurar gases ou fezes, pode existir um quadro de incontinência fecal que precisa ser avaliado com acolhimento e discrição.",
    resumoLeigo:
      "Se você tem escapes ou medo de acidentes, vale investigar a causa para recuperar segurança no dia a dia.",
    icone: "protection",
    sinais: [
      { nivel: "Leve", texto: "Dificuldade para segurar gases ou fezes." },
      {
        nivel: "Grave",
        texto: "Escape fecal em pequenas ou grandes quantidades.",
      },
      {
        nivel: "Atenção",
        texto: "Mudança importante na rotina por medo de acidentes.",
      },
    ],
  },
];
