import {
  AddCartContainer,
  CardFooterContainer,
  CoffeeCardInfo,
  TagContainer,
  TextContainer,
} from './styles'
import {
  Label,
  Tag,
  TextRegularS,
  TitleM,
  TitleS,
} from '../../../../components/Fonts'
import { ButtonCoffeCard } from '../../../../components/Button'
import { ShoppingCart } from 'phosphor-react'
import { ButtonQuantity } from '../../../../components/ButtonQuantity'

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
    minimumSignificantDigits: 3,
  }).format(cards.price)

  return (
    <CoffeeCardInfo>
      <img src={cards.urlImg} alt={cards.title} />
      <TagContainer>
        {cards.tags.map((tag) => {
          return <Tag key={`${cards.id}-${tag}`}>{tag}</Tag>
        })}
      </TagContainer>
      <TextContainer>
        <TitleS>{cards.title}</TitleS>
        <Label>{cards.description}</Label>
      </TextContainer>
      <CardFooterContainer>
        <div>
          <TextRegularS>R$ </TextRegularS>
          <TitleM>{formatPrice}</TitleM>
        </div>
        <AddCartContainer>
          <ButtonQuantity />
          <ButtonCoffeCard>
            <ShoppingCart size={20} weight="fill" />
          </ButtonCoffeCard>
        </AddCartContainer>
      </CardFooterContainer>
    </CoffeeCardInfo>
  )
}
