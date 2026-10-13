# Hero editorial com imagem (21st id 19077, Hero07) - favorito antigo
- URL: https://21st.dev/r/felipemenezes098/hero-07 | Autor: felipemenezes098
- Licenca: nao declarada no codigo baixado; componente publico do 21st.dev (conferir termos na pagina do componente antes de entregar ao cliente).
- Dependencias npm: motion, react-wrap-balancer, @radix-ui/react-slot, class-variance-authority (+ Tailwind v4, utilitario cn). Utilitario hero-07-utils/cta NAO veio no download: fazer a mao (botao primario + link).
- Revisao de seguranca: APROVADO. Sem <script> externo, sem fetch/XHR, sem eval/new Function, sem dangerouslySetInnerHTML. Demo usa imagem de cdn.21st.dev: trocar por arquivo local WebP (foto do Unsplash, ver plano-design.md).
- Como adaptar: trocar font-serif por fonte display sans (Outfit); tagline = frase curta de acolhimento; CTA unico "Agendar pelo WhatsApp" (link wa.me/5562982882990 com a mensagem padrao); img com width/height e fetchpriority=high (LCP). Animacao 'subtle' ja respeita useReducedMotion. Mobile: coluna unica, imagem 2:1 em cima.
