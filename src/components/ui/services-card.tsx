// Services Card carrossel (21st id 7795) adaptado:
// motion/framer trocado por CSS + IntersectionObserver, ícones Phosphor,
// tons de azul bebê, card 360px no celular, anterior/próximo + pontos, loop desligado.
import * as React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ArrowLeft, ArrowRight, WhatsappLogo } from '@phosphor-icons/react'
import { cn } from '@/lib/utils'
import { useInView } from '@/lib/hooks'
import { Button, buttonVariants } from './button'
import type { Servico } from '@/data/servicos'
import { EXTERNO, waServico } from '@/lib/site'

const gradientes = [
  'from-surface to-baby',
  'from-baby to-surface',
  'from-surface to-[#d2e7fa]',
]

function ServiceCard({ servico, index, visible }: { servico: Servico; index: number; visible: boolean }) {
  const Icone = servico.icone
  return (
    <article
      style={{ transitionDelay: `${Math.min(index, 3) * 80}ms` }}
      className={cn(
        'relative flex h-[360px] w-full flex-col justify-between overflow-hidden rounded-[16px] bg-gradient-to-br p-6 md:h-[400px] md:p-8',
        gradientes[index % gradientes.length],
        'transition-[opacity,translate] duration-500 ease-out motion-reduce:transition-none',
        visible ? 'translate-y-0 opacity-100' : 'motion-safe:translate-y-6 motion-safe:opacity-0',
      )}
    >
      <Icone aria-hidden className="size-12 text-primary" weight="duotone" />
      <div>
        <h3 className="mb-2 text-xl font-semibold text-foreground">{servico.titulo}</h3>
        <p className="mb-6 text-base text-muted-foreground">{servico.descricao}</p>
        <a
          href={waServico(servico.titulo)}
          {...EXTERNO}
          className={cn(buttonVariants({ variant: 'whatsapp' }), 'w-full sm:w-auto')}
        >
          <WhatsappLogo aria-hidden weight="bold" className="size-5" />
          Agendar {servico.titulo}
        </a>
      </div>
    </article>
  )
}

export function ServiceCarousel({ services }: { services: Servico[] }) {
  const [emblaRef, api] = useEmblaCarousel({ align: 'start', loop: false, containScroll: 'trimSnaps' })
  const [selected, setSelected] = React.useState(0)
  const [snaps, setSnaps] = React.useState<number[]>([])
  const [canPrev, setCanPrev] = React.useState(false)
  const [canNext, setCanNext] = React.useState(false)
  const [ref, visible] = useInView<HTMLDivElement>()

  React.useEffect(() => {
    if (!api) return
    const onSelect = () => {
      setSelected(api.selectedScrollSnap())
      setCanPrev(api.canScrollPrev())
      setCanNext(api.canScrollNext())
    }
    const onInit = () => {
      setSnaps(api.scrollSnapList())
      onSelect()
    }
    onInit()
    api.on('select', onSelect).on('reInit', onInit)
    return () => {
      api.off('select', onSelect).off('reInit', onInit)
    }
  }, [api])

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); api?.scrollPrev() }
    if (e.key === 'ArrowRight') { e.preventDefault(); api?.scrollNext() }
  }

  return (
    <div ref={ref} role="region" aria-roledescription="carrossel" aria-label="Serviços" onKeyDownCapture={onKey}>
      <div ref={emblaRef} className="overflow-hidden">
        <div className="-ml-4 flex touch-pan-y">
          {services.map((s, i) => (
            <div
              key={s.titulo + i}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} de ${services.length}`}
              className="min-w-0 shrink-0 grow-0 basis-[85%] pl-4 sm:basis-1/2 lg:basis-1/3"
            >
              <ServiceCard servico={s} index={i} visible={visible} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <div className="flex min-w-0 flex-wrap items-center">
          {snaps.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => api?.scrollTo(i)}
              aria-label={`Ir para o grupo ${i + 1}`}
              aria-current={i === selected}
              className="grid h-11 w-8 place-items-center sm:w-11"
            >
              <span
                className={cn(
                  'block h-2 rounded-full transition-all duration-300',
                  i === selected ? 'w-6 bg-primary' : 'w-2 bg-primary/30',
                )}
              />
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" onClick={() => api?.scrollPrev()} disabled={!canPrev} aria-label="Serviço anterior">
            <ArrowLeft aria-hidden className="size-5" />
          </Button>
          <Button variant="outline" size="icon" onClick={() => api?.scrollNext()} disabled={!canNext} aria-label="Próximo serviço">
            <ArrowRight aria-hidden className="size-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ServiceCarousel
