import { Trash } from 'phosphor-react'
import { ButtonRemove } from '../../../../../../components/Button'
import { ButtonQuantity } from '../../../../../../components/ButtonQuantity'
import { TextBoldM, TextRegularM } from '../../../../../../components/Fonts'
import {
  CartItemContainer,
  CartItemImg,
  CartItemInfo,
  CartItemPrice,
  Separator,
} from './styles'
import { CartItemProps } from '../../../../../../contexts/CartContext'
import { useCart } from '../../../../../../hooks/useCart'

interface CoffeeCartItemProps {
  coffee: CartItemProps
}

export function CartItem({ coffee }: CoffeeCartItemProps) {
  const { changeCartItemQuantity, removeCartItem } = useCart()

  const formatPrice = new Intl.NumberFormat('pt-BR', {
    minimumSignificantDigits: 3,
  }).format(coffee.price)

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, 'increase')
  }

  function handleDecrease() {
    if (coffee.quantity <= 1) {
      return
    }
    changeCartItemQuantity(coffee.id, 'decrease')
  }

  function handleRemoveItem() {
    removeCartItem(coffee.id)
  }

  return (
    <>
      <CartItemContainer>
        <CartItemImg>
          <img src={coffee.urlImg} alt="" />
        </CartItemImg>
        <CartItemInfo>
          <TextRegularM>{coffee.title}</TextRegularM>
          <div>
            <ButtonQuantity
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              quantity={coffee.quantity}
            />
            <ButtonRemove onClick={handleRemoveItem}>
              <Trash size={16} weight="thin" /> remover
            </ButtonRemove>
          </div>
        </CartItemInfo>
        <CartItemPrice>
          <TextBoldM>R$ {formatPrice}</TextBoldM>
        </CartItemPrice>
      </CartItemContainer>
      <Separator />
    </>
  )
}
