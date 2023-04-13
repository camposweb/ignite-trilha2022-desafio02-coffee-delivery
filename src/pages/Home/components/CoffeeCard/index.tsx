import { ButtonContainer, CoffeeCardInfo, InputButton } from './styles'
import {
  Label,
  Tag,
  TextRegularS,
  TitleM,
  TitleS,
} from '../../../../components/Fonts'
import { ButtonCoffeCard } from '../../../../components/Button'
import { ShoppingCart } from 'phosphor-react'

export interface CoffeeCardType {
  id: string
  urlImg: string
  tags: string[]
  title: string
  description: string
  price: number
}

interface CoffeeCardProps {
  cards: CoffeeCardType
}

export function CoffeeCard({ cards }: CoffeeCardProps) {
  const formatPrice = new Intl.NumberFormat('pt-BR', {
    /* style: 'currency',
    currency: 'BRL', */
    minimumSignificantDigits: 3,
  }).format(cards.price)

  return (
    <CoffeeCardInfo>
      <img src={cards.urlImg} alt="" />
      <div>
        <div>
          {cards.tags.map((tag) => {
            return <Tag key={`${cards.id}-${tag}`}>{tag}</Tag>
          })}
        </div>
        <TitleS>{cards.title}</TitleS>
        <Label>{cards.description}</Label>
        <ButtonContainer>
          <TextRegularS>R$ </TextRegularS>
          <TitleM>{formatPrice}</TitleM>
          <InputButton type="number" />
          <ButtonCoffeCard>
            <ShoppingCart size={20} weight="fill" />
          </ButtonCoffeCard>
        </ButtonContainer>
      </div>
    </CoffeeCardInfo>
  )
}
