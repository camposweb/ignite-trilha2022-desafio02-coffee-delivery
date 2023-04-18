import { Address } from './components/Address'
import { Cart } from './components/Cart'
import { CheckoutContainer, CheckoutContentContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <CheckoutContentContainer>
        <Address />
        <Cart />
      </CheckoutContentContainer>
    </CheckoutContainer>
  )
}
