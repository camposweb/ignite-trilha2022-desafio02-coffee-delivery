import { HeaderContainer } from './styles'
import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { TextBoldS } from '../Fonts'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={logoCoffeeDelivery} alt="" />
      </NavLink>
      <nav>
        <NavLink to="/" title="Localidade" className="city">
          <MapPin size={16} weight="fill" />
          Porto Alegre, RS
        </NavLink>
        <NavLink to="/checkout" title="Carrinho" className="cart">
          <ShoppingCart size={19} weight="fill" />
          {/* <TextBoldS>3</TextBoldS> */}
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
