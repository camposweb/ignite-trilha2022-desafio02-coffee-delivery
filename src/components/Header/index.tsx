import { HeaderContainer } from './styles'
import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={logoCoffeeDelivery} alt="" />
      </NavLink>
      <nav>
        <NavLink to="/" title="Localidade" className="city">
          <MapPin size={24} weight="fill" />
          Porto Alegre, RS
        </NavLink>
        <NavLink to="/" title="Carrinho" className="cart">
          <ShoppingCart />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
