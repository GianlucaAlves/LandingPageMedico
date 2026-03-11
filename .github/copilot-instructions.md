Você é um desenvolvedor sênior full-stack. Sua tarefa é construir uma landing page 
profissional para um médico proctologista, seguindo como referência visual e estrutural 
o site https://drguilhermehenrique.com.br/.

## Referência visual
Analise o site de referência e replique:
- Layout clean com fundo branco e seções bem separadas
- Navbar fixa com links âncora para cada seção
- Hero com nome do médico em destaque, especialidades e CTA
- Seção "Sobre" com biografia detalhada e credenciais
- Cards de especialidades/tratamentos com descrição
- Seção de contato ao final



## Estrutura de pastas a criar

app/
  layout.tsx        → metadata SEO + JSON-LD Physician
  page.tsx          → composição das seções
  globals.css
components/
  sections/
    Hero.tsx
    SobreMedico.tsx
    Tratamentos.tsx
    SinaisAlerta.tsx
    Exames.tsx
    Depoimentos.tsx
    FAQ.tsx
    CTA.tsx
    Localizacao.tsx
    Rodape.tsx
  shared/
    Navbar.tsx       → 'use client' (menu mobile)
    WhatsAppButton.tsx
    SectionHeader.tsx
data/
  medico.ts
  tratamentos.ts
  exames.ts
  faq.ts
  depoimentos.ts
lib/
  utils.ts
  schema.ts

## Dados do médico (use estes placeholders)
- Nome: Dr. Daniel Alves
- Especialidade: Proctologia
- CRM: CRM PLACEHOLDER POR ENQUANTO
- Cidade: Jacareí-SP
- WhatsApp: Número placeholder

## Regras de implementação

1. Crie os arquivos em `data/` com interfaces TypeScript antes de qualquer componente
2. Todos os componentes em `components/sections/` são Server Components por padrão
3. Use 'use client' APENAS em: Navbar.tsx (menu mobile), FAQ.tsx (accordion), WhatsAppButton.tsx
4. Use `next/image` com `priority` no Hero para otimizar LCP
5. No `app/layout.tsx`, configure:
   - Metadata completa (title, description, keywords, openGraph)
   - JSON-LD schema type Physician no <head>
6. No `data/faq.ts`, crie também o schema FAQPage para rich snippets
7. WhatsAppButton deve ser fixo (sticky) no canto inferior direito em mobile
8. Todas as seções devem ter ID para navegação por âncora da Navbar
9. Design mobile-first com breakpoints sm: md: lg: do Tailwind
10. Paleta de cores: fundo branco (#FFFFFF), primária azul profissional (#1e40af
    ou similar), texto cinza escuro (#1f2937)

## Seção por seção — o que implementar

**Hero:** nome do médico em h1, especialidades como badges, parágrafo de credenciais 
resumido, dois botões (Agendar WhatsApp + Ver Tratamentos), espaço para foto (use 
placeholder via https://placehold.co/500x600)

**Sobre:** biografia com parágrafos, lista de credenciais/residências, CRM visível, 
foto lateral (placeholder)

**Tratamentos:** grid de cards 2 colunas mobile / 3 desktop, cada card com ícone, 
título e descrição curta — mapeie do array em data/tratamentos.ts

**Sinais de Alerta:** lista visual com ícone de alerta (⚠️) e texto — quando procurar 
um proctologista

**Exames:** grid similar aos tratamentos, mapeado de data/exames.ts

**Depoimentos:** cards com nome do paciente, avaliação (estrelas) e depoimento — 
mapeado de data/depoimentos.ts

**FAQ:** Accordion do shadcn/ui, mapeado de data/faq.ts, com schema FAQPage no JSON-LD

**CTA:** seção com fundo azul, headline forte, botão WhatsApp grande centralizado, 
link wa.me com mensagem pré-preenchida: "Olá, gostaria de agendar uma consulta"

**Localização:** iframe do Google Maps responsivo (use placeholder com embed genérico), 
endereço e horários ao lado

**Rodapé:** nome do médico, CRM, especialidade, links das seções, aviso legal médico

