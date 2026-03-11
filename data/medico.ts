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
  especialidade: "Clínico geral e proctologista",
  crm: "109151 SP",
  cidade: "Jacareí-SP",
  whatsapp: "5511999999999",
  heroFoto: "/medico3.jpeg",
  sobreFoto: "/medico2.jpeg",
  depoimentosFoto: "/medico4.jpeg",
  consultorioFotos: [
    {
      src: "/consultorio2.webp",
      alt: "Recepção do consultório com ambiente claro e organizado",
    },
    {
      src: "/consultorio3.webp",
      alt: "Sala de atendimento com visual clean e acolhedor",
    },
    {
      src: "/consultorio1.webp",
      alt: "Espaço interno do consultório com mobiliário moderno",
    },
  ],
  resumo:
    "Médico clínico geral e proctologista com atendimento humanizado, foco em diagnóstico preciso e acompanhamento integral em consultas, exames e tratamentos.",
  biografia: [
    "Dr. Daniel Alves atua como clínico geral e proctologista com abordagem centrada no paciente, priorizando escuta qualificada, explicação clara do quadro clínico e condutas baseadas em evidência.",
    "Seu trabalho contempla avaliação clínica ampla, sintomas intestinais, doenças anorretais, prevenção, exames especializados e seguimento com atenção individualizada para cada caso.",
    "A proposta de atendimento integra acolhimento, orientação detalhada e plano terapêutico sob medida, com foco em segurança, privacidade e qualidade de vida.",
  ],
  credenciais: [
    "Atendimento em Clínica Geral e Proctologia",
    "Atuação em Cirurgia Geral",
    "Experiência em exames e tratamentos ambulatoriais",
    "Atendimento em Jacareí-SP e região",
  ],
  trajetoria: [
    {
      periodo: "Formação médica",
      titulo: "Graduação em Medicina",
      instituicao: "Faculdade de Medicina de Pouso Alegre",
      descricao:
        "Base acadêmica voltada à formação clínica, raciocínio diagnóstico e cuidado integral ao paciente.",
    },
    {
      periodo: "Aprofundamento cirúrgico",
      titulo: "Residência e prática em Cirurgia Geral",
      instituicao:
        "Hospital de referencia e equipes assistenciais (placeholder)",
      descricao:
        "Vivência em rotinas hospitalares, tomada de decisão clínica e acompanhamento perioperatório com foco em segurança.",
    },
    {
      periodo: "Especialização",
      titulo: "Foco em Clínica Geral, Proctologia e doenças anorretais",
      instituicao: "Formação complementar e atualização contínua (placeholder)",
      descricao:
        "Atuação direcionada ao diagnóstico, prevenção, acompanhamento clínico e tratamento de queixas intestinais e anorretais.",
    },
    {
      periodo: "Experiência atual",
      titulo: "Atendimento humanizado em consultório",
      instituicao: "Jacareí-SP e região",
      descricao:
        "Consulta com escuta atenta, explicação clara do quadro clínico e plano terapêutico individualizado para cada paciente.",
    },
  ],
  horarios: ["Segunda a Sexta: 08h às 18h", "Sábado: 08h às 12h"],
  endereco: "Endereço placeholder, Jacareí-SP",
};
