# FAQ em duas colunas (21st id 26656, FAQ-05 Hirael) - favorito antigo
- URL: https://21st.dev/r/mohammadshehadeh/faq-05 | Autor: Mohammad Shehadeh (Hirael)
- Licenca: MIT (declarada no cabecalho do codigo).
- Dependencias npm: @radix-ui/react-accordion, lucide-react (trocar por Phosphor CaretDown). Precisa dos keyframes accordion-down/up do Tailwind.
- Revisao de seguranca: APROVADO. Sem <script> externo, sem fetch/XHR, sem eval/new Function, sem dangerouslySetInnerHTML.
- Como adaptar: remover o eyebrow "faq"; trocar font-serif por Outfit; perguntas baseadas so no briefing (agendamento, horario, sabado, estacionamento, acessibilidade/cadeirante, formas de pagamento). Nao inventar respostas clinicas. Mobile: empilha (ja nativo), gatilho com altura minima 48px. Reduced-motion: desligar animate-accordion-*.
