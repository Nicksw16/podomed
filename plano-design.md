# Plano de design - Podomed Podologia

**Direção visual:** clínica acolhedora e limpa, branco azulado com azul bebê em superfícies e um azul profundo só onde há texto e botão; layout editorial leve, movimento suave e sem frieza hospitalar.

Leitura: landing local de saúde para moradores de Aparecida de Goiânia (jovens a idosos), linguagem acolhedora/editorial calma. Dials: VARIANCE 5, MOTION 4, DENSITY 3. Tema único claro (rodapé em azul profundo da mesma paleta). Raio único: 16px em cards/imagens, pílula nos botões.

## Paleta (contraste calculado, WCAG)

| Papel | Hex | Uso / contraste |
|---|---|---|
| Fundo | `#F4F9FE` | página (branco azulado) |
| Superfície | `#E3F0FC` | cards, faixas, FAQ |
| Azul bebê (decorativo) | `#BFDDF7` | gradientes, aurora, botão secundário (texto `#0F2A44` = 10,4:1) |
| Texto | `#0F2A44` | 13,8:1 no fundo, 12,6:1 na superfície |
| Texto secundário | `#3E5A75` | 6,8:1 no fundo, 6,2:1 na superfície |
| Primária (botão/links) | `#1D5F9E` | texto branco 6,6:1; hover `#154A7E` (9,1:1) |
| Destaque | `#8EC5F0` | só decorativo e no rodapé escuro (7,9:1 sobre `#0B2A4A`) |
| Rodapé | `#0B2A4A` | texto `#EAF4FD` 13,1:1, apoio `#B7CCE0` 8,8:1 |
| WhatsApp | `#1A7F45` | só no botão de WhatsApp, texto branco 5,0:1 |

Sem preto puro, sem roxo/índigo (remover do Aurora).

## Fontes (Google Fonts, self-host com font-display: swap)
- **Outfit** (títulos, wordmark "Podomed") 500/600.
- **Figtree** (texto e botões) 400/500/600.
Sem serifa (o hero do 21st usa font-serif: trocar por Outfit).

## Seção → componente

| Seção | Componente (id) | Favorito | Por quê | Celular (sem hover) | Reduced-motion |
|---|---|---|---|---|---|
| Hero + "uau" | Editorial Image Hero (19077) + Aurora Background (1120) atrás do bloco de texto | antigo / antigo | imagem larga + título grande + 1 CTA WhatsApp; aurora CSS azul bebê é leve (sem WebGL) | 1 coluna, imagem 2:1 em cima, CTA visível sem rolar; aurora com blur menor | animação do hero some, aurora parada |
| Serviços | Services Card carrossel (7795) | antigo | cards com dados de um arquivo único `[Serviço]` | arrastar com o dedo, 1 card + pedaço do próximo | sem animação de entrada |
| Sobre / diferenciais | Scroll word reveal (24525), microinteração 1 | antigo | frase de acolhimento revelada ao rolar; diferenciais (cadeirante, estacionamento, cartão, sábado) em lista simples abaixo | guiado por scroll, sem hover | texto inteiro visível |
| Prova social | Editorial Testimonial (9637) adaptado + selo 4,9 / 128 feito à mão | antigo | resumo "o que mais elogiam", sem citações nem nomes inventados | setas 44px + swipe | troca sem transição |
| FAQ | FAQ Two Column (26656) | antigo | acordeão único aberto, MIT | empilha, gatilho 48px | sem animação de abrir |
| Localização | feito à mão | n/a | mapa Google (iframe) + endereço, horário, botão "Como chegar" e WhatsApp | mapa full width, botões grandes | n/a |
| Rodapé | Light Beam Footer (35251), microinteração 2 | antigo | wordmark gigante "Podomed" supre a falta de logo | feixe anda sozinho, letra salta ao toque | feixe parado |

Ficou de fora (candidatos na lista): mesh gradient WebGL 23959 (pesado no celular), Single Open Accordion 37545, Masonry Lightbox 26223 (galeria, só se houver fotos reais da clínica).
Total de movimento: 1 "uau" (aurora) + 2 microinterações (word reveal, rodapé). Nenhum cursor customizado.

## Tema 21st
Não usado (paleta própria acima). Zen Linen e demais temas favoritos ficam intactos.

## Favoritos no 21st
Lista nova **"Lynx · Podologia"** (id `abe24c07-c7cd-478b-9088-433f7097baf2`) com 10 componentes: 19077, 1120, 7795, 9637, 26656, 24525, 35251 (escolhidos) + 23959, 37545, 26223 (candidatos). Nada foi removido de outros favoritos.

## Segurança e arquivos
Todos os 7 aprovados (sem script externo, fetch, eval ou dangerouslySetInnerHTML). Código e NOTA.md em `/home/user/podomed/componentes-21st/<slug>/`. Mídia de CDN de terceiros (cdn.21st.dev) do demo/testimonial não deve ir para produção. Dependências npm: motion, react-wrap-balancer, embla-carousel-react, @radix-ui/react-accordion, @radix-ui/react-slot, class-variance-authority, Phosphor (no lugar de lucide), Tailwind v4. Licença: só o FAQ declara MIT; demais não declaram, conferir na página do 21st. A chave de API do 21st não foi gravada em nenhum arquivo.

## Fotos (Unsplash, licença livre; todas confirmadas com HTTP 200 e conferidas visualmente)
Baixar, converter para WebP local e marcar para troca por fotos reais da clínica. Formato: `https://images.unsplash.com/photo-<id>?auto=format&fit=crop&w=1600&q=80`

| Uso | Termo de busca | ID |
|---|---|---|
| Hero (pés contra parede azul bebê) | foot care | `1537094082840-dcbbfa99385f` |
| Cuidado com a pele dos pés (creme) | foot care | `1633526543913-d30e3c230d1f` |
| Atendimento (profissional de luvas examinando o pé) | podiatry | `1545463913-5083aa7359a6` |
| Cuidado/relaxamento (massagem nos pés) | feet spa | `1675159364615-38e1f6b62282` |
| Recepção azul acolhedora | clinic reception | `1629909614456-6b1c5c94cecc` |
| Sala de espera clara com planta | clinic reception | `1648775507324-b48dd3791fa5` |

Reserva: `1762625570087-6d98fca29531` (sala de espera moderna). Evitar `1787496994323-...` (marca "CareMe" visível). Atenção: nenhum resultado de "pedicure clinic" foi usado; as fotos acima são genéricas e não mostram a clínica real.
