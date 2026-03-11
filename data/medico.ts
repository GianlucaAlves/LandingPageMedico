export interface Medico {
  nome: string;
  especialidade: string;
  crm: string;
  cidade: string;
  whatsapp: string;
  heroFoto: string;
  sobreFoto: string;
  resumo: string;
  biografia: string[];
  credenciais: string[];
  horarios: string[];
  endereco: string;
}

export const medico: Medico = {
  nome: "Dr. Daniel Alves",
  especialidade: "Proctologia",
  crm: "109151 SP",
  cidade: "Jacarei-SP",
  whatsapp: "5511999999999",
  heroFoto: "/medico2.jpg",
  sobreFoto: "/medico.jpg",
  resumo:
    "Medico proctologista com atendimento humanizado, foco em diagnostico preciso e acompanhamento integral em consultas, exames e tratamentos.",
  biografia: [
    "Dr. Daniel Alves atua em Proctologia com abordagem centrada no paciente, priorizando escuta qualificada, explicacao clara do quadro clinico e condutas baseadas em evidencia.",
    "Seu trabalho contempla avaliacao de sintomas intestinais, doencas anorretais, prevencao, exames especializados e seguimento clinico com atencao individualizada para cada caso.",
    "A proposta de atendimento integra acolhimento, orientacao detalhada e plano terapeutico sob medida, com foco em seguranca, privacidade e qualidade de vida.",
  ],
  credenciais: [
    "Especialista em Proctologia",
    "Atuacao em Cirurgia Geral",
    "Experiencia em exames e tratamentos ambulatoriais",
    "Atendimento em Jacarei-SP e regiao",
  ],
  horarios: [
    "Segunda a Sexta: 08h as 18h",
    "Sabado: 08h as 12h",
  ],
  endereco: "Endereco placeholder, Jacarei-SP",
};