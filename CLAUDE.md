# Podomed Podologia — site (Lynx Automation)

- Cliente: Podomed Podologia, Aparecida de Goiânia - GO. WhatsApp 5562982882990.
- Briefing: `briefing.md` · Design: `plano-design.md` · Textos/SEO: `conteudo.md`
- Componentes 21st baixados: `componentes-21st/<slug>/` (com NOTA.md)
- Stack: Vite 6 + React 19 + TypeScript + Tailwind v4 + componentes shadcn-style em `src/components/ui/` (21st adaptados); motion, embla, Radix Accordion, Phosphor; fontes @fontsource (Outfit/Figtree). Build `npm run build` → `dist/`. Serviços em `src/data/servicos.ts`, dados do negócio em `src/lib/site.ts`, fotos provisórias via `npm run imagens` (sharp).
- Publicação: Cloudflare (Workers com assets via `wrangler.toml`: build `npm run build`, deploy `npx wrangler deploy`; ou Pages com saída `dist`). Node 20 via `.node-version`. "Always Use HTTPS" ligado.

## Regras
- Mobile-first (375px). Objetivo nº 1: agendar pelo WhatsApp.
- Nunca inventar depoimentos, serviços, preços ou cargos. Espaços reservados entre [colchetes].
- Nenhum segredo no repositório (nunca a api_key do 21st).
- `target="_blank"` sempre com `rel="noopener noreferrer"`.

## Pendências
- Lista de serviços (Nicolas vai mandar), Instagram, logo, fotos reais.

## Status
- [x] Prévia construída · [x] Revisada (375px e 1280px) · [ ] Publicada
