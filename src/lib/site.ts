// Dados fixos do negócio. Espaços reservados entre [colchetes] = trocar.
export const WHATSAPP = '5562982882990'
export const WHATSAPP_EXIBICAO = '(62) 98288-2990'
export const MENSAGEM_PADRAO = 'Olá! Vim pelo site e gostaria de agendar um horário na Podomed.'

export const waLink = (mensagem: string = MENSAGEM_PADRAO) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensagem)}`

export const waServico = (servico: string) => waLink(`Olá! Gostaria de agendar ${servico}.`)

export const ENDERECO =
  'Av. Dona Maria Cardoso, Qd 84, Lt 01/05, Vila São Tomaz, Aparecida de Goiânia - GO, 74915-520'

export const MAPS_LINK =
  'https://www.google.com/maps/search/?api=1&query=Av.+Dona+Maria+Cardoso+Qd+84+Lt+01%2F05+Vila+S%C3%A3o+Tomaz+Aparecida+de+Goi%C3%A2nia'

export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(ENDERECO)}&output=embed`

export const GOOGLE_AVALIACOES =
  'https://www.google.com/maps/search/?api=1&query=Podomed+Podologia+Aparecida+de+Goi%C3%A2nia'

export const NOTA_GOOGLE = '4,9'
export const TOTAL_AVALIACOES = 128

// [instagram] — preencher com a URL do perfil quando o Nicolas enviar.
export const INSTAGRAM_URL = ''
// [CNPJ] — preencher se houver (ex.: '00.000.000/0001-00').
export const CNPJ = ''

export const HORARIOS = [
  { dia: 'Segunda a sexta', hora: '08:00 às 11:30 e 13:30 às 18:00' },
  { dia: 'Sábado', hora: '08:00 às 12:00' },
  { dia: 'Domingo', hora: 'Fechado' },
] as const

export const EXTERNO = { target: '_blank', rel: 'noopener noreferrer' } as const
