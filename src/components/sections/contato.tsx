// Formulário curto — Netlify Forms (name="contato"). Cópia oculta está no index.html.
// Nunca pedir CPF. Sucesso → /obrigado.html.
import { useState, type FormEvent } from 'react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { EXTERNO, waLink } from '@/lib/site'

const campo =
  'mt-2 block min-h-12 w-full rounded-[12px] border border-border bg-white px-4 text-base text-foreground placeholder:text-muted-foreground/80 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30'

export function Contato() {
  const [estado, setEstado] = useState<'ocioso' | 'enviando' | 'erro'>('ocioso')

  async function enviar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setEstado('enviando')
    const dados = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ 'form-name': 'contato', ...dados }).toString(),
      })
      if (!res.ok) throw new Error(String(res.status))
      window.location.href = '/obrigado.html'
    } catch {
      setEstado('erro')
    }
  }

  return (
    <section id="contato" className="px-4 pb-16 sm:px-6 md:pb-24" aria-labelledby="contato-titulo">
      <div className="mx-auto grid max-w-6xl gap-8 rounded-[16px] bg-surface p-6 md:grid-cols-2 md:p-12">
        <div>
          <h2 id="contato-titulo" className="text-3xl font-semibold tracking-tight md:text-4xl">
            Prefere que a gente te chame?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Deixe seu nome e WhatsApp e retornamos para combinar o horário.
          </p>
        </div>
        <form
          name="contato"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          action="/obrigado.html"
          onSubmit={enviar}
          className="grid gap-5"
        >
          <input type="hidden" name="form-name" value="contato" />
          <p className="hidden" aria-hidden="true">
            <label>
              Não preencha: <input name="bot-field" tabIndex={-1} autoComplete="off" />
            </label>
          </p>
          <label className="block font-semibold">
            Nome
            <input name="nome" required autoComplete="name" className={campo} />
          </label>
          <label className="block font-semibold">
            WhatsApp com DDD
            <input
              name="whatsapp"
              type="tel"
              inputMode="tel"
              required
              autoComplete="tel-national"
              placeholder="(62) 90000-0000"
              pattern="[0-9()\s+\-]{10,20}"
              className={campo}
            />
          </label>
          <label className="block font-semibold">
            Melhor horário
            <select name="horario" className={campo} defaultValue="manhã">
              <option value="manhã">Manhã</option>
              <option value="tarde">Tarde</option>
              <option value="sábado de manhã">Sábado de manhã</option>
            </select>
          </label>
          <button type="submit" disabled={estado === 'enviando'} className={cn(buttonVariants(), 'w-full sm:w-auto sm:justify-self-start')}>
            {estado === 'enviando' ? 'Enviando…' : 'Enviar'}
          </button>
          <p role="status" aria-live="polite" className={cn('text-base font-medium text-[#9B1C1C]', estado !== 'erro' && 'sr-only')}>
            {estado === 'erro' && (
              <>
                Não conseguimos enviar agora.{' '}
                <a href={waLink()} {...EXTERNO} className="underline underline-offset-4">Chame no WhatsApp</a>.
              </>
            )}
          </p>
          <p className="text-sm text-muted-foreground">
            Usamos seus dados só para combinar o agendamento. Veja a{' '}
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
