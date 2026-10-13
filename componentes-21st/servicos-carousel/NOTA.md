# Servicos em carrossel (21st id 7795, Services Card) - favorito antigo
- URL: https://21st.dev/r/ravikatiyar162/services-card | Autor: ravikatiyar162
- Licenca: nao declarada no codigo baixado; componente publico do 21st.dev (conferir termos na pagina do componente antes de entregar ao cliente).
- Dependencias npm: framer-motion (trocar por motion/react, igual ao resto), embla-carousel-react, lucide-react (trocar por @phosphor-icons/react), @radix-ui/react-slot, class-variance-authority + componente Button do shadcn.
- Revisao de seguranca: APROVADO. Sem <script> externo, sem fetch/XHR, sem eval/new Function, sem dangerouslySetInnerHTML.
- Como adaptar: dados vem de UM arquivo (servicos.ts) com placeholders [Servico] ate o Nicolas enviar a lista; remover "( 001 )" e texto uppercase; gradientes trocados por tons de azul bebe (from-[#E3F0FC] to-[#BFDDF7]); altura do card 450px -> 360px no celular; adicionar CarouselPrevious e pontos (so tem Next); loop desligado. Mobile: arrastar com o dedo (embla), 1 card por vez com pedaco do proximo a mostra, sem hover.
