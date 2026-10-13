// Aurora Background (21st id 1120, Aceternity UI) adaptado:
// só atrás do bloco de texto do hero, paleta azul bebê, sem background-attachment:fixed,
// blur menor no celular, parado fora da tela e com prefers-reduced-motion.
import * as React from 'react'
import { cn } from '@/lib/utils'
import { useInView } from '@/lib/hooks'

interface AuroraBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  showRadialGradient?: boolean
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  const [ref, inView] = useInView<HTMLDivElement>(false, '0px')
  return (
    <div ref={ref} className={cn('relative isolate', className)} {...props}>
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className={cn(
            `[--white-gradient:repeating-linear-gradient(100deg,#F4F9FE_0%,#F4F9FE_7%,transparent_10%,transparent_12%,#F4F9FE_16%)]
            [--aurora:repeating-linear-gradient(100deg,#BFDDF7_10%,#E3F0FC_15%,#8EC5F0_20%,#E3F0FC_25%,#BFDDF7_30%)]
            [background-image:var(--white-gradient),var(--aurora)]
            [background-size:300%,200%]
            absolute -inset-[10px] opacity-40 blur-[6px] md:opacity-60 md:blur-[10px]
            motion-safe:animate-aurora will-change-[background-position]`,
            !inView && '[animation-play-state:paused]',
            showRadialGradient &&
              '[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_75%)]',
          )}
        />
      </div>
      {children}
    </div>
  )
}

export default AuroraBackground
