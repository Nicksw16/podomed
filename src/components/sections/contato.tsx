// Formulário curto que monta a mensagem e abre o WhatsApp (sem servidor: funciona no Cloudflare Pages).
// O site não guarda nenhum dado. Nunca pedir CPF.
import { type FormEvent } from 'react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { waLink } from '@/lib/site'

const campo =
  'mt-2 block min-h-12 w-full rounded-[12px] border border-border bg-white px-4 text-base text-foreground placeholder:text-muted-foreground/80 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30'

export function Contato() {
  function enviar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const dados = new FormData(e.currentTarget)
    const nome = String(dados.get('nome') ?? '').trim()
    const horario = String(dados.get('horario') ?? '')
    const obs = String(dados.get('obs') ?? '').trim()
    const msg =
      `Olá! Meu nome é ${nome}. Vim pelo site e gostaria de agendar um horário na Podomed. ` +
      `Prefiro ${horario}.` +
      (obs ? ` Sobre o que estou sentindo: ${obs}.` : '')
    window.open(waLink(msg), '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contato" className="px-4 pb-16 sm:px-6 md:pb-24" aria-labelledby="contato-titulo">
      <div className="mx-auto grid max-w-6xl gap-8 rounded-[16px] bg-surface p-6 md:grid-cols-2 md:p-12">
        <div>
          <h2 id="contato-titulo" className="text-3xl font-semibold tracking-tight md:text-4xl">
            Quer adiantar o agendamento?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Preencha abaixo e a mensagem chega pronta no WhatsApp da Podomed. É só tocar em enviar.
          </p>
        </div>
        <form onSubmit={enviar} className="grid gap-5">
          <label className="block font-semibold">
            Seu nome
            <input name="nome" required autoComplete="given-name" className={campo} />
          </label>
          <label className="block font-semibold">
            Melhor horário
            <select name="horario" className={campo} defaultValue="de manhã">
              <option value="de manhã">Manhã</option>
              <option value="à tarde">Tarde</option>
              <option value="sábado de manhã">Sábado de manhã</option>
            </select>
          </label>
          <label className="block font-semibold">
            O que está sentindo? <span className="font-normal text-muted-foreground">(opcional)</span>
            <input name="obs" maxLength={200} placeholder="Ex.: unha doendo, calo no pé" className={campo} />
          </label>
          <button type="submit" className={cn(buttonVariants(), 'w-full sm:w-auto sm:justify-self-start')}>
            Enviar pelo WhatsApp
          </button>
          <p className="text-sm text-muted-foreground">
            O site não guarda seus dados: a mensagem vai direto para o WhatsApp. Veja a{' '}
            <a href="/politica-de-privacidade.html" className="font-semibold text-primary underline underline-offset-4">
              Política de Privacidade
            </a>
            .
          </p>
        </form>
      </div>
    </section>
  )
}
