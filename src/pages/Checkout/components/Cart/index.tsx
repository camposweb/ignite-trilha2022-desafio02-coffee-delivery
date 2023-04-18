import { ButtonConfirm } from '../../../../components/Button'
import {
  TextBoldL,
  TextRegularM,
  TextRegularS,
  TitleXS,
} from '../../../../components/Fonts'
/* import { coffeeImage } from '../../../Home/components/CoffeList/assets'
import { CoffeeCardType } from '../../../Home/components/CoffeeCard' */
import { CartItem } from './components/CartItem'
import { CartContainer, CartContent, CartPrices } from './styles'

/* const carts: CoffeeCardType[] = [
  {
    id: crypto.randomUUID(),
    tags: ['tradicional'],
    urlImg: coffeeImage.expressoTracional,
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
] */

export function Cart() {
  return (
    <CartContainer>
      <TitleXS>Cafés selecionados</TitleXS>
      <CartContent>
        <CartItem />
        <CartItem />
        <CartPrices>
          <div>
            <TextRegularS>Total de itens</TextRegularS>
            <TextRegularM>R$ 29,70</TextRegularM>
          </div>
          <div>
            <TextRegularS>Entrega</TextRegularS>
            <TextRegularM>R$ 3,50</TextRegularM>
          </div>
          <div>
            <TextBoldL>Total</TextBoldL>
            <TextBoldL>R$ 33,20</TextBoldL>
          </div>
        </CartPrices>
        <ButtonConfirm>confirmar pedido</ButtonConfirm>
      </CartContent>
    </CartContainer>
  )
}
