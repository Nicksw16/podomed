// SERVIÇOS — arquivo único. Troque título, descrição e ícone quando o Nicolas
// mandar a lista oficial. Não inventar serviços nem preços.
// Ícones disponíveis: veja https://phosphoricons.com (importe abaixo).
import { Footprints, HandHeart, Sparkle, FirstAid, Drop, Heart } from '@phosphor-icons/react'
import type { Icon } from '@phosphor-icons/react'

export interface Servico {
  titulo: string
  descricao: string
  icone: Icon
}

export const servicos: Servico[] = [
  { titulo: '[Serviço 1]', descricao: '[descrição de 1 linha]', icone: Footprints },
  { titulo: '[Serviço 2]', descricao: '[descrição de 1 linha]', icone: HandHeart },
  { titulo: '[Serviço 3]', descricao: '[descrição de 1 linha]', icone: Sparkle },
  { titulo: '[Serviço 4]', descricao: '[descrição de 1 linha]', icone: FirstAid },
  { titulo: '[Serviço 5]', descricao: '[descrição de 1 linha]', icone: Drop },
  { titulo: '[Serviço 6]', descricao: '[descrição de 1 linha]', icone: Heart },
]
