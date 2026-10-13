# Fundo Aurora (21st id 1120, Aurora Background) - favorito antigo; efeito "uau" do site
- URL: https://21st.dev/r/manuarora700/aurora-background | Autor: Aceternity UI (manuarora700)
- Licenca: nao declarada no codigo baixado; componente publico do 21st.dev (conferir termos na pagina do componente antes de entregar ao cliente).
- Dependencias: Tailwind + utilitario cn; precisa da animacao animate-aurora (keyframes background-position 50% 50% -> 350% 50%, 60s linear infinite) e variaveis de cor (--blue-300 etc.) no CSS/tema.
- Revisao de seguranca: APROVADO. Sem <script> externo, sem fetch/XHR, sem eval/new Function, sem dangerouslySetInnerHTML.
- Como adaptar (obrigatorio): (1) aplicar so atras do bloco de texto do hero, nao em tela cheia, trocar h-[100vh] por altura do bloco; (2) paleta so azul bebe/branco (remover indigo/violet; usar #BFDDF7, #8EC5F0, #E3F0FC); (3) remover after:[background-attachment:fixed] (quebra no iOS); (4) blur menor no celular (blur-[6px]) e opacity-40; (5) desligar a animacao com prefers-reduced-motion e fora da tela; (6) nao usar <main> do componente (a pagina ja tem um). Texto sobre o fundo sempre #0F2A44.
