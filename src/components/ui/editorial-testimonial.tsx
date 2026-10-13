// Editorial Testimonial (21st id 9637) adaptado para "o que mais elogiam":
// SEM citações, nomes ou fotos (briefing proíbe depoimento inventado).
// Transição CSS (sem setTimeout duplo), setas 44px, swipe, prefers-reduced-motion.
import * as React from 'react'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import { cn } from '@/lib/utils'

export function EditorialTestimonial({ itens }: { itens: string[] }) {
  const [active, setActive] = React.useState(0)
  const touchX = React.useRef<number | null>(null)
  const go = (i: number) => setActive((i + itens.length) % itens.length)

  return (
    <div
      className="w-full"
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return
        const dx = e.changedTouches[0].clientX - touchX.current
        if (Math.abs(dx) > 40) go(active + (dx < 0 ? 1 : -1))
        touchX.current = null
      }}
    >
      <p className="mb-3 text-sm font-medium text-muted-foreground">O que os clientes mais elogiam</p>
      <div className="relative min-h-[7.5rem] sm:min-h-[6rem]" aria-live="polite">
        {itens.map((item, i) => (
          <p
            key={item}
            aria-hidden={i !== active}
            className={cn(
              'absolute inset-0 font-display text-3xl leading-tight font-medium tracking-tight text-foreground transition-[opacity,translate] duration-300 ease-out md:text-4xl',
              i === active ? 'translate-x-0 opacity-100' : 'pointer-events-none translate-x-4 opacity-0',
            )}
          >
            {item}
          </p>
        ))}
      </div>
      <p className="mt-4 text-sm text-muted-foreground">Resumo das avaliações no Google</p>

      <div className="mt-6 flex items-center justify-between gap-4">
        <div className="flex items-center">
          {itens.map((item, i) => (
            <button
              key={item}
              type="button"
              onClick={() => go(i)}
              aria-label={`Mostrar: ${item}`}
              aria-current={i === active}
              className="group grid h-11 w-9 place-items-center"
            >
              <span
                className={cn(
                  'block h-0.5 rounded-full transition-all duration-300',
                  i === active ? 'w-7 bg-primary' : 'w-4 bg-primary/30 group-hover:bg-primary/50',
                )}
              />
            </button>
          ))}
        </div>
        <div className="flex gap-1">
          <button type="button" onClick={() => go(active - 1)} aria-label="Anterior" className="grid size-11 place-items-center rounded-full text-primary transition-colors hover:bg-surface">
            <CaretLeft aria-hidden className="size-5" weight="bold" />
          </button>
          <button type="button" onClick={() => go(active + 1)} aria-label="Próximo" className="grid size-11 place-items-center rounded-full text-primary transition-colors hover:bg-surface">
            <CaretRight aria-hidden className="size-5" weight="bold" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default EditorialTestimonial
