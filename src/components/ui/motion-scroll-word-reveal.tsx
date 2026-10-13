// Scroll word reveal (21st id 24525, exemplos Motion) adaptado:
// sem frame/container de preview (scroll da janela), sem kicker e barra,
// texto em <p> (o h1 é só o do hero), altura menor no celular; reduced-motion mostra tudo.
// Carregado com React.lazy (motion fica fora do bundle inicial).
import { Fragment, useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'motion/react'

const REST_OPACITY = 0.18
const REVEAL_SPAN = 0.8
const WORD_WINDOW = 0.2

function getWordRange(index: number, count: number) {
  const start = count <= 1 ? 0 : (index / (count - 1)) * REVEAL_SPAN
  return { start, end: Math.min(1, start + WORD_WINDOW) }
}

function getWordOpacity(progress: number, { start, end }: { start: number; end: number }) {
  if (progress <= start) return REST_OPACITY
  if (progress >= end) return 1
  return REST_OPACITY + (1 - REST_OPACITY) * ((progress - start) / (end - start))
}

function Word({ children, progress, index, count }: { children: string; progress: MotionValue<number>; index: number; count: number }) {
  const range = getWordRange(index, count)
  const opacity = useTransform(progress, (v) => getWordOpacity(v, range))
  return <motion.span aria-hidden="true" style={{ opacity }}>{children}</motion.span>
}

export function ScrollWordReveal({ text, id }: { text: string; id?: string }) {
  const targetRef = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ['start start', 'end end'] })
  const words = text.split(' ')

  if (reduced) {
    return (
      <div className="px-4 py-16 sm:px-6">
        <p id={id} className="mx-auto max-w-4xl font-display text-3xl leading-tight font-semibold tracking-tight md:text-6xl">{text}</p>
      </div>
    )
  }

  return (
    <div ref={targetRef} className="relative h-[150dvh] md:h-[200dvh]">
      <div className="sticky top-0 flex min-h-[100dvh] items-center px-4 sm:px-6">
        <p id={id} className="mx-auto font-display max-w-4xl text-3xl leading-tight font-semibold tracking-tight text-foreground md:text-6xl">
          <span className="sr-only">{text}</span>
          {words.map((word, i) => (
            <Fragment key={`${word}-${i}`}>
              <Word progress={scrollYProgress} index={i} count={words.length}>{word}</Word>
              {i < words.length - 1 ? ' ' : null}
            </Fragment>
          ))}
        </p>
      </div>
    </div>
  )
}

export default ScrollWordReveal
