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
import { useCart } from '../../../../hooks/useCart'
import { useState } from 'react'
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
  const [quantity, setQuantity] = useState<number>(1)
  const { addCoffeeCart } = useCart()

  function handleIncrease() {
    setQuantity((state) => state + 1)
  }

  function handleDecrease() {
    if (quantity <= 1) {
      return
    }
    setQuantity((state) => state - 1)
  }

  const formatPrice = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
  }).format(cards.price)

  function handleAddCoffeeCart() {
    const coffeeAdd = {
      ...cards,
      quantity,
    }
    addCoffeeCart(coffeeAdd)
  }

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
          <ButtonQuantity
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
          <ButtonCoffeCard onClick={handleAddCoffeeCart}>
            <ShoppingCart size={20} weight="fill" />
          </ButtonCoffeCard>
        </AddCartContainer>
      </CardFooterContainer>
    </CoffeeCardInfo>
  )
}
