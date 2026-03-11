This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
# Landing Medico

Landing page em Next.js para um medico proctologista, com foco em SEO, estrutura por secoes e navegacao por ancora.

## Estrutura

- `app/`: layout, pagina principal e estilos globais.
- `components/sections/`: secoes da landing page.
- `components/shared/`: componentes compartilhados.
- `data/`: dados tipados que alimentam o conteudo da pagina.
- `lib/`: utilitarios e schemas JSON-LD.

## Rodando localmente

```bash
pnpm dev
```

## Validacao

```bash
pnpm lint
pnpm build
```

## Personalizacao rapida

- Atualize placeholders em `data/medico.ts`.
- Ajuste FAQ e tratamentos em `data/faq.ts` e `data/tratamentos.ts`.
- Troque o placeholder da foto por uma imagem real ou ajuste a URL em `data/medico.ts`.
