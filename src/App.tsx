import { lazy, Suspense } from 'react'
import {
  CalendarCheck,
  Wheelchair,
  Car,
  CreditCard,
  SunHorizon,
  Coffee,
  Star,
  WhatsappLogo,
  MapPin,
  Clock,
  ArrowUpRight,
} from '@phosphor-icons/react'
import { Hero07 } from '@/components/ui/hero-07'
import { ServiceCarousel } from '@/components/ui/services-card'
import { EditorialTestimonial } from '@/components/ui/editorial-testimonial'
import Faq05 from '@/components/ui/faq-05'
import { buttonVariants } from '@/components/ui/button'
import { Contato } from '@/components/sections/contato'
import { servicos } from '@/data/servicos'
import { faq } from '@/data/faq'
import { cn } from '@/lib/utils'
import { useDesktop } from '@/lib/hooks'
import {
  ENDERECO,
  EXTERNO,
  GOOGLE_AVALIACOES,
  HORARIOS,
  MAPS_EMBED,
  MAPS_LINK,
  NOTA_GOOGLE,
  TOTAL_AVALIACOES,
  WHATSAPP_EXIBICAO,
  waLink,
} from '@/lib/site'

// Animações pesadas em chunks separados
const ScrollWordReveal = lazy(() => import('@/components/ui/motion-scroll-word-reveal'))
const Rodape = lazy(() => import('@/components/sections/rodape'))

const FRASE = 'Cuidar dos seus pés com atenção, carinho e sem pressa.'

function BotaoWhats({ className, children = 'Agendar pelo WhatsApp' }: { className?: string; children?: React.ReactNode }) {
  return (
    <a href={waLink()} {...EXTERNO} className={cn(buttonVariants({ variant: 'whatsapp' }), className)}>
      <WhatsappLogo aria-hidden weight="bold" className="size-5" />
      {children}
    </a>
  )
}

function Selo({ className }: { className?: string }) {
  return (
    <a
      href={GOOGLE_AVALIACOES}
      {...EXTERNO}
      className={cn('inline-flex min-h-11 items-center gap-2 text-sm font-medium text-foreground hover:text-primary', className)}
    >
      <span className="flex text-[#B7791F]" aria-hidden>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} weight="fill" className="size-4" />
        ))}
      </span>
      <span>
        <strong>{NOTA_GOOGLE}</strong> no Google · {TOTAL_AVALIACOES} avaliações
      </span>
    </a>
  )
}

const Secao = ({ id, className, children }: { id?: string; className?: string; children: React.ReactNode }) => (
  <section id={id} className={cn('px-4 py-16 sm:px-6 md:py-24', className)}>
    <div className="mx-auto max-w-6xl">{children}</div>
  </section>
)

const diferenciais = [
  { icone: CalendarCheck, titulo: 'Atendimento com agendamento', texto: 'seu horário reservado, sem fila de espera.' },
  { icone: Wheelchair, titulo: 'Acessível para cadeirantes', texto: 'acesso pensado para quem usa cadeira de rodas.' },
  { icone: Car, titulo: 'Estacionamento gratuito', texto: 'pare sem pagar.' },
  { icone: CreditCard, titulo: 'Crédito, débito e aproximação', texto: 'pague do jeito mais prático.' },
  { icone: SunHorizon, titulo: 'Aberto aos sábados de manhã', texto: 'das 08:00 às 12:00.' },
  { icone: Coffee, titulo: 'Cafezinho na recepção', texto: 'um café enquanto você espera.' },
]

const elogios = [
  'Atendimento atencioso e cuidadoso',
  'Alívio de dores e calos',
  'Recepção acolhedora, com café',
  'Preço bom',
  'Horário de sábado',
]

const passos = [
  { titulo: 'Chame no WhatsApp.', texto: 'Toque no botão e a mensagem já vai pronta.' },
  { titulo: 'Escolha o horário.', texto: 'Informe o serviço e o melhor dia. Atendemos de segunda a sábado.' },
  { titulo: 'Venha cuidar dos pés.', texto: 'Estacionamento gratuito e café na recepção esperam por você.' },
]

function Cabecalho() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#inicio" className="font-display text-2xl font-semibold tracking-tight text-primary" aria-label="Podomed Podologia, início">
          Podomed
        </a>
        <nav aria-label="Seções" className="hidden items-center gap-6 text-sm font-medium md:flex">
          <a className="py-3 hover:text-primary" href="#servicos">Serviços</a>
          <a className="py-3 hover:text-primary" href="#sobre">Sobre</a>
          <a className="py-3 hover:text-primary" href="#perguntas">Perguntas</a>
          <a className="py-3 hover:text-primary" href="#localizacao">Como chegar</a>
        </nav>
        <a href={waLink()} {...EXTERNO} className={cn(buttonVariants({ variant: 'whatsapp', size: 'sm' }), 'hidden sm:inline-flex')}>
          <WhatsappLogo aria-hidden weight="bold" className="size-4" />
          Agendar
        </a>
      </div>
    </header>
  )
}

export default function App() {
  const desktop = useDesktop()

  return (
    <>
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-3 focus:text-white">
        Pular para o conteúdo
      </a>
      <Cabecalho />

      <main id="conteudo">
        {/* HERO */}
        <Hero07
          tagline="Uma empresa de empreendedoras que recebe você com calma e um café."
          title="Podologia em Aparecida de Goiânia, com hora marcada e sem pressa"
          description="A Podomed cuida dos seus pés na Vila São Tomaz. Atendimento com agendamento, estacionamento gratuito e sábado de manhã."
          image={{
            src: '/img/hero-1600.webp',
            srcSet: '/img/hero-800.webp 800w, /img/hero-1600.webp 1600w',
            sizes: '(min-width: 1280px) 1232px, 100vw',
            width: 1600,
            height: 800,
            alt: 'Pés descalços descansando contra uma parede azul-bebê, cuidado de podologia em Aparecida de Goiânia',
          }}
          ctas={
            <>
              <BotaoWhats className="w-full sm:w-auto" />
              <a href="#localizacao" className={cn(buttonVariants({ variant: 'outline' }), 'w-full sm:w-auto')}>
                Ver como chegar
              </a>
            </>
          }
          badge={<Selo />}
        />

        {/* SERVIÇOS */}
        <Secao id="servicos">
          <div className="mb-10 max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">O que a Podomed cuida nos seus pés</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Escolha o serviço e chame no WhatsApp. A mensagem já vai pronta, é só enviar.
            </p>
          </div>
          <ServiceCarousel services={servicos} />
          <p className="mt-8 text-base text-muted-foreground">
            Não achou o que procura?{' '}
            <a href={waLink()} {...EXTERNO} className="inline-flex min-h-11 items-center font-semibold text-primary underline underline-offset-4">
              Conte o seu caso no WhatsApp.
            </a>
          </p>
        </Secao>

        {/* SOBRE */}
        <section id="sobre" className="bg-surface/50" aria-labelledby="sobre-titulo">
          <Suspense
            fallback={
              <p className="mx-auto max-w-4xl px-4 py-24 font-display text-3xl leading-tight font-semibold tracking-tight md:text-6xl">{FRASE}</p>
            }
          >
            <ScrollWordReveal text={FRASE} />
          </Suspense>

          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 sm:px-6 md:grid-cols-2 md:pb-24">
            <div>
              <h2 id="sobre-titulo" className="text-3xl font-semibold tracking-tight md:text-4xl">
                Uma empresa de empreendedoras, feita para você se sentir bem-vinda
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                A Podomed é uma empresa de empreendedoras. Aqui você é recebida com calma, com um café na recepção e com
                atenção ao que o seu pé está pedindo.
              </p>
              {/* [funções de cada uma a confirmar com a clínica] · [Quando e como a Podomed começou: a confirmar] */}
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Quem cuida de você: <strong className="text-foreground">Ana, Thaís, Leda e Dra. Carol</strong>.
              </p>
              <BotaoWhats className="mt-8 w-full sm:w-auto">Conhecer a equipe pelo WhatsApp</BotaoWhats>
            </div>
            {/* FOTO PROVISÓRIA (Unsplash) — trocar por foto real da equipe */}
            <img
              src="/img/atendimento.webp"
              width={900}
              height={1125}
              loading="lazy"
              decoding="async"
              alt="Profissional de podologia cuidando dos pés de uma cliente"
              className="aspect-[4/5] w-full rounded-[16px] object-cover md:max-h-[560px]"
            />
          </div>
        </section>

        {/* DIFERENCIAIS */}
        <Secao id="diferenciais">
          <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-start">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Pensado para facilitar a sua visita</h2>
              {/* FOTO PROVISÓRIA (Unsplash) — trocar pela recepção real (alt: "Recepção da Podomed com cafezinho para quem espera") */}
              <img
                src="/img/recepcao.webp"
                width={900}
                height={675}
                loading="lazy"
                decoding="async"
                alt="Recepção clara e acolhedora, com poltronas e tons de azul"
                className="mt-8 aspect-[4/3] w-full rounded-[16px] object-cover"
              />
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {diferenciais.map(({ icone: Icone, titulo, texto }) => (
                <li key={titulo} className="rounded-[16px] bg-surface p-5">
                  <Icone aria-hidden weight="duotone" className="mb-3 size-8 text-primary" />
                  <h3 className="font-sans text-base font-semibold text-foreground">{titulo}</h3>
                  <p className="mt-1 text-base text-muted-foreground">{texto[0].toUpperCase() + texto.slice(1)}</p>
                </li>
              ))}
            </ul>
          </div>
        </Secao>

        {/* PROVA SOCIAL */}
        <Secao id="avaliacoes" className="bg-surface/50">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Quem vem, volta a elogiar</h2>
              <div className="mt-8 inline-flex flex-col rounded-[16px] bg-white p-6 shadow-[0_10px_30px_-18px_rgba(15,42,68,0.35)]">
                <span className="font-display text-6xl leading-none font-semibold text-foreground">{NOTA_GOOGLE}</span>
                <span className="mt-2 flex text-[#B7791F]" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} weight="fill" className="size-6" />
                  ))}
                </span>
                <span className="mt-2 text-base text-muted-foreground">
                  <span className="sr-only">Nota {NOTA_GOOGLE} de 5, </span>
                  {TOTAL_AVALIACOES} avaliações no Google
                </span>
              </div>
            </div>
            <div>
              <EditorialTestimonial itens={elogios} />
              <a
                href={GOOGLE_AVALIACOES}
                {...EXTERNO}
                className="mt-6 inline-flex min-h-11 items-center gap-1 font-semibold text-primary underline underline-offset-4"
              >
                Ver avaliações no Google
                <ArrowUpRight aria-hidden className="size-4" />
                <span className="sr-only">(abre em nova aba)</span>
              </a>
            </div>
          </div>
        </Secao>

        {/* COMO AGENDAR */}
        <Secao id="como-agendar">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Agendar leva um minuto</h2>
              <ol className="mt-8 space-y-6">
                {passos.map((p, i) => (
                  <li key={p.titulo} className="flex gap-4">
                    <span className="grid size-11 shrink-0 place-items-center rounded-full bg-baby font-display text-lg font-semibold text-foreground" aria-hidden>
                      {i + 1}
                    </span>
                    <p className="pt-2 text-lg text-muted-foreground">
                      <strong className="text-foreground">{p.titulo}</strong> {p.texto}
                    </p>
                  </li>
                ))}
              </ol>
              <BotaoWhats className="mt-8 w-full sm:w-auto" />
            </div>
            {/* FOTO PROVISÓRIA (Unsplash) */}
            <img
              src="/img/cuidado.webp"
              width={900}
              height={675}
              loading="lazy"
              decoding="async"
              alt="Creme hidratante sendo aplicado nos pés, cuidado com a pele"
              className="aspect-[4/3] w-full rounded-[16px] object-cover"
            />
          </div>
        </Secao>

        {/* FAQ */}
        <Faq05
          titulo="Perguntas frequentes"
          itens={faq}
          intro={
            <p>
              Ficou alguma dúvida?{' '}
              <a href={waLink()} {...EXTERNO} className="inline-flex min-h-11 items-center font-semibold text-primary underline underline-offset-4">
                Pergunte no WhatsApp
              </a>
              .
            </p>
          }
        />

        {/* FORMULÁRIO (abre o WhatsApp com a mensagem pronta) */}
        <Contato />

        {/* LOCALIZAÇÃO */}
        <Secao id="localizacao">
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Onde estamos</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-[1fr_1.3fr]">
            <div className="space-y-6">
              <p className="flex gap-3 text-lg">
                <MapPin aria-hidden weight="duotone" className="mt-1 size-6 shrink-0 text-primary" />
                <span>{ENDERECO}</span>
              </p>
              <p className="flex gap-3 text-lg">
                <WhatsappLogo aria-hidden weight="duotone" className="mt-1 size-6 shrink-0 text-primary" />
                <a href={waLink()} {...EXTERNO} className="font-semibold text-primary underline underline-offset-4">
                  {WHATSAPP_EXIBICAO}
                </a>
              </p>
              <div className="flex gap-3">
                <Clock aria-hidden weight="duotone" className="mt-1 size-6 shrink-0 text-primary" />
                <dl className="grid gap-2 text-base">
                  {HORARIOS.map((h) => (
                    <div key={h.dia}>
                      <dt className="font-semibold text-foreground">{h.dia}</dt>
                      <dd className="text-muted-foreground">{h.hora}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <BotaoWhats />
                <a href={MAPS_LINK} {...EXTERNO} className={buttonVariants({ variant: 'outline' })}>
                  Abrir no Google Maps
                </a>
              </div>
            </div>
            <iframe
              src={MAPS_EMBED}
              title="Mapa com a localização da Podomed Podologia na Vila São Tomaz, Aparecida de Goiânia"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="h-[320px] w-full rounded-[16px] border-0 bg-surface md:h-full md:min-h-[420px]"
            />
          </div>
        </Secao>

        {/* CTA FINAL */}
        <section className="px-4 pb-16 sm:px-6 md:pb-24">
          <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 rounded-[16px] bg-baby px-6 py-12 md:flex-row md:items-center md:justify-between md:px-12">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Seus pés merecem um horário</h2>
            <BotaoWhats className="w-full sm:w-auto" />
          </div>
        </section>
      </main>

      <Suspense fallback={<div className="min-h-[480px] bg-deep" />}>
        <Rodape animate={desktop} />
      </Suspense>

      {/* Botão flutuante de WhatsApp (só celular) */}
      <a
        href={waLink()}
        {...EXTERNO}
        aria-label="Agendar pelo WhatsApp"
        className="fixed right-4 bottom-4 z-50 grid size-14 place-items-center rounded-full bg-whatsapp text-white shadow-lg shadow-black/20 transition-colors hover:bg-whatsapp-hover md:hidden"
      >
        <WhatsappLogo aria-hidden weight="fill" className="size-7" />
      </a>
    </>
  )
}
