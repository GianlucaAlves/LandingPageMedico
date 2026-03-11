export interface Medico {
  nome: string;
  especialidade: string;
  crm: string;
  cidade: string;
  whatsapp: string;
  heroFoto: string;
  sobreFoto: string;
  depoimentosFoto: string;
  consultorioFotos: {
    src: string;
    alt: string;
  }[];
  resumo: string;
  biografia: string[];
  credenciais: string[];
  trajetoria: {
    periodo: string;
    titulo: string;
    instituicao: string;
    descricao: string;
  }[];
  horarios: string[];
  endereco: string;
}

export const medico: Medico = {
  nome: "Dr. Daniel Alves",
  especialidade: "Clinico geral e proctologista",
  crm: "109151 SP",
  cidade: "Jacarei-SP",
  whatsapp: "5511999999999",
  heroFoto: "/medico3.jpeg",
  sobreFoto: "/medico2.jpeg",
  depoimentosFoto: "/medico4.jpeg",
  consultorioFotos: [
    {
      src: "/consultorio2.webp",
      alt: "Recepcao do consultorio com ambiente claro e organizado",
    },
    {
      src: "/consultorio3.webp",
      alt: "Sala de atendimento com visual clean e acolhedor",
    },
    {
      src: "/consultorio1.webp",
      alt: "Espaco interno do consultorio com mobiliario moderno",
    },
  ],
  resumo:
    "Medico clinico geral e proctologista com atendimento humanizado, foco em diagnostico preciso e acompanhamento integral em consultas, exames e tratamentos.",
  biografia: [
    "Dr. Daniel Alves atua como clinico geral e proctologista com abordagem centrada no paciente, priorizando escuta qualificada, explicacao clara do quadro clinico e condutas baseadas em evidencia.",
    "Seu trabalho contempla avaliacao clinica ampla, sintomas intestinais, doencas anorretais, prevencao, exames especializados e seguimento com atencao individualizada para cada caso.",
    "A proposta de atendimento integra acolhimento, orientacao detalhada e plano terapeutico sob medida, com foco em seguranca, privacidade e qualidade de vida.",
  ],
  credenciais: [
    "Atendimento em Clinica Geral e Proctologia",
    "Atuacao em Cirurgia Geral",
    "Experiencia em exames e tratamentos ambulatoriais",
    "Atendimento em Jacarei-SP e regiao",
  ],
  trajetoria: [
    {
      periodo: "Formacao medica",
      titulo: "Graduacao em Medicina",
      instituicao: "Faculdade de Medicina de Pouso Alegre",
      descricao:
        "Base academica voltada a formacao clinica, raciocinio diagnostico e cuidado integral ao paciente.",
    },
    {
      periodo: "Aprofundamento cirurgico",
      titulo: "Residencia e pratica em Cirurgia Geral",
      instituicao:
        "Hospital de referencia e equipes assistenciais (placeholder)",
      descricao:
        "Vivencia em rotinas hospitalares, tomada de decisao clinica e acompanhamento perioperatorio com foco em seguranca.",
    },
    {
      periodo: "Especializacao",
      titulo: "Foco em Clinica Geral, Proctologia e doencas anorretais",
      instituicao: "Formacao complementar e atualizacao continua (placeholder)",
      descricao:
        "Atuacao direcionada ao diagnostico, prevencao, acompanhamento clinico e tratamento de queixas intestinais e anorretais.",
    },
    {
      periodo: "Experiencia atual",
      titulo: "Atendimento humanizado em consultorio",
      instituicao: "Jacarei-SP e regiao",
      descricao:
        "Consulta com escuta atenta, explicacao clara do quadro clinico e plano terapeutico individualizado para cada paciente.",
    },
  ],
  horarios: ["Segunda a Sexta: 08h as 18h", "Sabado: 08h as 12h"],
  endereco: "Endereco placeholder, Jacarei-SP",
};
