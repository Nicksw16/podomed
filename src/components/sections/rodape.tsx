// Rodapé (lazy). Feixe animado só no desktop; no celular fica parado (economia).
import BeamWordmarkFooter from '@/components/ui/beam-wordmark-footer'
import { CNPJ, ENDERECO, EXTERNO, HORARIOS, INSTAGRAM_URL, MAPS_LINK, WHATSAPP_EXIBICAO, waLink } from '@/lib/site'

const whatsIcon = (
  <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
    <path d="M4 20l1.2-3.7A8.3 8.3 0 1 1 8 19.1L4 20Z" />
    <path d="M9.2 8.6c.2-.4.5-.4.7-.4h.5c.2 0 .4.1.5.4l.6 1.4c0 .2 0 .4-.1.5l-.5.6c.6 1.1 1.4 1.9 2.5 2.5l.6-.5c.2-.1.4-.2.6-.1l1.3.6c.3.1.4.3.4.5v.5c0 .3-.2.6-.5.8-.6.4-1.5.5-2.5.1a8.4 8.4 0 0 1-4.3-4.3c-.4-1-.3-1.9.2-2.6Z" />
  </g>
)

export default function Rodape({ animate }: { animate: boolean }) {
  return (
    <BeamWordmarkFooter
      brand="Podomed"
      company="Podomed Podologia"
      year={2026}
      background="#0B2A4A"
      ink="#EAF4FD"
      muted="#B7CCE0"
      accent="#8EC5F0"
      wordTop="#8EC5F0"
      wordFoot="#0B2A4A"
      fontSans='"Outfit", "Figtree", ui-sans-serif, system-ui, sans-serif'
      wordWeight={600}
      animate={animate}
      credits={[{ lead: 'Site por ', label: 'Lynx Automation' }]}
      socials={[
        { label: INSTAGRAM_URL ? 'Instagram' : 'Instagram [instagram]', href: INSTAGRAM_URL || '#', icon: 'instagram' },
        { label: 'WhatsApp', href: waLink(), icon: whatsIcon },
      ]}
      columns={[
        {
          title: 'Contato',
          links: [
            { label: `WhatsApp ${WHATSAPP_EXIBICAO}`, href: waLink() },
            { label: 'Como chegar', href: MAPS_LINK },
            { label: 'Prefere que a gente chame?', href: '#contato' },
          ],
        },
        {
          title: 'Navegação',
          links: [
            { label: 'Serviços', href: '#servicos' },
            { label: 'Sobre', href: '#sobre' },
            { label: 'Perguntas', href: '#perguntas' },
            { label: 'Como chegar', href: '#localizacao' },
            { label: 'Política de Privacidade', href: '/politica-de-privacidade.html' },
          ],
        },
      ]}
    >
      <p>Podomed Podologia · {ENDERECO}</p>
      <p>{HORARIOS.map((h) => `${h.dia}: ${h.hora}`).join(' · ')}</p>
      <p>
        {CNPJ ? `CNPJ ${CNPJ}.` : 'CNPJ [a confirmar].'} [Responsável técnico: a confirmar]
        {' · '}
        <a href="/politica-de-privacidade.html">Política de Privacidade</a>
      </p>
      {INSTAGRAM_URL && (
        <p>
          <a href={INSTAGRAM_URL} {...EXTERNO}>Instagram</a>
        </p>
      )}
    </BeamWordmarkFooter>
  )
}
