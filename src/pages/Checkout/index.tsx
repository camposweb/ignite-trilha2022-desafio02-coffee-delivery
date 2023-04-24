import { useCart } from '../../hooks/useCart'
import { Address } from './components/Address'
import { Cart } from './components/Cart'
import { CartEmpty } from './components/CartEmpty'
import { CheckoutContainer, CheckoutContentContainer } from './styles'

export function Checkout() {
  const { cartItems } = useCart()

  return (
    <>
      {cartItems.length <= 0 ? (
        <CartEmpty />
      ) : (
        <CheckoutContainer>
          <CheckoutContentContainer>
            <Address />
            <Cart />
          </CheckoutContentContainer>
        </CheckoutContainer>
      )}
    </>
  )
}
