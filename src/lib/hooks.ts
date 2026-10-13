import { useEffect, useRef, useState } from 'react'

export function useMediaQuery(query: string) {
  const [match, setMatch] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches,
  )
  useEffect(() => {
    const mq = window.matchMedia(query)
    const on = () => setMatch(mq.matches)
    on()
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [query])
  return match
}

export const useReducedMotion = () => useMediaQuery('(prefers-reduced-motion: reduce)')
export const useDesktop = () => useMediaQuery('(min-width: 768px)')

/** Fica true quando o elemento entra na tela (uma vez, ou contínuo com once=false). */
export function useInView<T extends Element>(once = true, rootMargin = '0px 0px -10% 0px') {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }
    const io = new IntersectionObserver(
      ([e]) => {
        setInView(e.isIntersecting)
        if (e.isIntersecting && once) io.disconnect()
      },
      { rootMargin },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [once, rootMargin])
  return [ref, inView] as const
}
