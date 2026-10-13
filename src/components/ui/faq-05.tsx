// FAQ 5 from Hirael <https://hirael.com/blocks/faqs/faq-05>
// MIT · Mohammad Shehadeh · https://github.com/MohammadShehadeh/hirael
// Adaptado: sem eyebrow, Outfit, textos do conteudo.md, superfície azul bebê.
import * as React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './accordion'

export interface Faq05Props {
  titulo: string
  intro: React.ReactNode
  itens: readonly { id: string; q: string; a: string }[]
}

const Faq05 = ({ titulo, intro, itens }: Faq05Props) => (
  <section id="perguntas" data-slot="faq" className="bg-background py-16 md:py-24">
    <div className="mx-auto grid w-full max-w-5xl grid-cols-1 overflow-hidden border-y border-border bg-surface/60 md:grid-cols-2 md:rounded-[16px] md:border-x">
      <div className="flex flex-col gap-4 border-b border-border px-4 pt-12 pb-6 sm:px-6 md:border-e md:border-b-0 md:px-10 md:py-16">
        <h2 className="text-3xl leading-[1.08] font-semibold tracking-tight md:text-5xl">{titulo}</h2>
        <div className="max-w-sm text-base text-muted-foreground">{intro}</div>
      </div>
      <div className="flex flex-col justify-center px-4 py-4 sm:px-6 md:px-8">
        <Accordion type="single" collapsible defaultValue={itens[0]?.id} className="w-full">
          {itens.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
)

export default Faq05
