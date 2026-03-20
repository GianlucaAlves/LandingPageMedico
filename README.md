# Landing Page Médico — Dr. Daniel Alves

[dr-daniel-alves.vercel.app](https://dr-daniel-alves.vercel.app)

## Descrição

Landing page profissional para o médico proctologista Dr. Daniel Alves. O projeto utiliza Next.js 14, TypeScript e Tailwind CSS, com foco em performance, SEO e acessibilidade.

## Estrutura do Projeto

```
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
public/
```

## Tecnologias Utilizadas

- [Next.js 14](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) (FAQ accordion)

## Funcionalidades

- Layout clean, fundo branco, seções bem separadas
- Navbar fixa com links âncora
- Hero com nome, especialidades, credenciais e CTA
- Biografia detalhada e credenciais
- Cards de especialidades/tratamentos
- Sinais de alerta visual
- Grid de exames
- Depoimentos de pacientes
- FAQ com rich snippets (schema FAQPage)
- CTA com WhatsApp
- Localização com Google Maps
- Rodapé com informações legais

## SEO & Acessibilidade

- Metadata completa (title, description, keywords, openGraph)
- JSON-LD Physician e FAQPage para rich snippets
- Imagens otimizadas com `next/image`
- Design mobile-first

## Como rodar o projeto

1. Instale as dependências:
   ```sh
   pnpm install
   ```
2. Rode o servidor de desenvolvimento:
   ```sh
   pnpm dev
   ```
3. Acesse [http://localhost:3000](http://localhost:3000)

## Deploy

O projeto está publicado em:
[dr-daniel-alves.vercel.app](https://dr-daniel-alves.vercel.app)

## Customização

- Edite os dados do médico em `data/medico.ts`
- Adicione/edite tratamentos em `data/tratamentos.ts`
- Adicione exames em `data/exames.ts`
- Edite FAQ em `data/faq.ts`
- Adicione depoimentos em `data/depoimentos.ts`

## Licença

Este projeto é apenas para fins educacionais/demonstração. Consulte o autor para uso comercial.
