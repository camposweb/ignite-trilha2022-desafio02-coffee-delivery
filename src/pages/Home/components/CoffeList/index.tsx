import { TitleL } from '../../../../components/Fonts'
import { CoffeeCard } from '../CoffeeCard'
import { cards } from './coffee'
import { CoffeeCardContainer, CoffeeListContainer } from './styles'

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <TitleL>Nossos cafés</TitleL>
      <CoffeeCardContainer>
        {cards.map((card) => {
          return <CoffeeCard key={card.id} cards={card} />
        })}
      </CoffeeCardContainer>
    </CoffeeListContainer>
  )
}
