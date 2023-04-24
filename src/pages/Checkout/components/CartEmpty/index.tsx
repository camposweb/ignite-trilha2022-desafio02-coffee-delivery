import { TextRegularL } from '../../../../components/Fonts'
import { CartEmptyContainer } from './styles'

export function CartEmpty() {
  return (
    <CartEmptyContainer>
      <TextRegularL>Não existe item no carrinho</TextRegularL>
    </CartEmptyContainer>
  )
}
