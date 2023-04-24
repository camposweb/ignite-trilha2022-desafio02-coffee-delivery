import { ButtonConfirm } from '../../../../components/Button'
import {
  TextBoldL,
  TextRegularM,
  TextRegularS,
  TitleXS,
} from '../../../../components/Fonts'
import { useCart } from '../../../../hooks/useCart'
import { CartItem } from './components/CartItem'
import { CartContainer, CartContent, CartPrices } from './styles'

export function Cart() {
  const { cartItems, cartItemsTotal, priceDelivery, cartTotalPrice } = useCart()

  const formatPriceItems = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
  }).format(cartItemsTotal)

  const formatPriceDelivery = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
  }).format(priceDelivery)

  const formatPriceTotal = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
  }).format(cartTotalPrice)

  return (
    <CartContainer>
      <TitleXS>Cafés selecionados</TitleXS>
      <CartContent>
        {cartItems.map((item) => {
          return <CartItem key={item.id} coffee={item} />
        })}
        <CartPrices>
          <div>
            <TextRegularS>Total de itens</TextRegularS>
            <TextRegularM>R$ {formatPriceItems}</TextRegularM>
          </div>
          <div>
            <TextRegularS>Entrega</TextRegularS>
            <TextRegularM>R$ {formatPriceDelivery}</TextRegularM>
          </div>
          <div>
            <TextBoldL>Total</TextBoldL>
            <TextBoldL>R$ {formatPriceTotal}</TextBoldL>
          </div>
        </CartPrices>
        <ButtonConfirm>confirmar pedido</ButtonConfirm>
      </CartContent>
    </CartContainer>
  )
}
