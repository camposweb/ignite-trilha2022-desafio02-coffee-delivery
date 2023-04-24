import { NavLink } from 'react-router-dom'
import { TitleM } from '../../../../components/Fonts'
import { CartEmptyContainer, CartEmptyContent } from './styles'

export function CartEmpty() {
  return (
    <CartEmptyContainer>
      <CartEmptyContent>
        <div>
          {/* <TextRegularL>O carrinho está vazio</TextRegularL> */}
          <TitleM>O carrinho está vazio</TitleM>
          <NavLink to="/" className="link">
            voltar para home
          </NavLink>
        </div>
      </CartEmptyContent>
    </CartEmptyContainer>
  )
}
