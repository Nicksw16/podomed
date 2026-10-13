// Editorial Image Hero (21st id 19077, Hero07) adaptado:
// Outfit no lugar de serif, imagem local WebP com fetchpriority=high (LCP),
// animação só com CSS, só no desktop e respeitando prefers-reduced-motion.
import * as React from 'react'
import { cn } from '@/lib/utils'
import { AuroraBackground } from './aurora-background'

export interface Hero07Props {
  tagline: string
  title: string
  description: string
  image: { src: string; srcSet: string; sizes: string; width: number; height: number; alt: string }
  ctas?: React.ReactNode
  badge?: React.ReactNode
}

const rise = 'md:motion-safe:animate-rise'

export function Hero07({ tagline, title, description, image, ctas, badge }: Readonly<Hero07Props>) {
  return (
    <section id="inicio" className="relative isolate w-full overflow-hidden bg-background">
      <div className="relative mx-auto w-full max-w-7xl overflow-hidden px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-b-[16px] [mask-image:linear-gradient(to_bottom,black_80%,transparent)] sm:rounded-[16px]">
          {/* FOTO PROVISÓRIA (Unsplash) — trocar por foto real da clínica */}
          <img
            src={image.src}
            srcSet={image.srcSet}
            sizes={image.sizes}
            width={image.width}
            height={image.height}
            alt={image.alt}
            fetchPriority="high"
            decoding="async"
            className="aspect-[3/2] w-full object-cover object-center sm:aspect-[9/4]"
          />
        </div>
      </div>

      <AuroraBackground className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 px-4 pt-6 pb-14 sm:px-6 sm:pt-10 sm:pb-20 lg:grid-cols-12 lg:gap-10 lg:pb-24">
          <div className={cn('hidden sm:flex lg:col-span-4 lg:col-start-1', rise)}>
            <p className="max-w-xs text-base leading-relaxed text-muted-foreground">{tagline}</p>
          </div>
          <div className={cn('flex flex-col items-start gap-5 lg:col-span-7 lg:col-start-6', rise, 'md:[animation-delay:100ms]')}>
            <h1 className="text-[2rem] leading-[1.1] font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              {title}
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">{description}</p>
            {ctas && <div className="flex w-full flex-wrap items-center gap-3 sm:w-auto">{ctas}</div>}
            {badge}
          </div>
        </div>
      </AuroraBackground>
    </section>
  )
}

export default Hero07
