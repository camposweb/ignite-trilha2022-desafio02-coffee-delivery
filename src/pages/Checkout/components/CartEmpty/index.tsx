import { NavLink } from 'react-router-dom'
import { TitleM } from '../../../../components/Fonts'
import { CartEmptyContainer, CartEmptyContent } from './styles'

export function CartEmpty() {
  return (
    <CartEmptyContainer>
      <CartEmptyContent>
        <div>
          <TitleM>O carrinho está vazio</TitleM>
          <NavLink to="/">voltar para home</NavLink>
        </div>
      </CartEmptyContent>
    </CartEmptyContainer>
  )
}
