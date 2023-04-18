import { Trash } from 'phosphor-react'
import { ButtonRemove } from '../../../../../../components/Button'
import { ButtonQuantity } from '../../../../../../components/ButtonQuantity'
import { TextBoldM, TextRegularM } from '../../../../../../components/Fonts'
import { coffeeImage } from '../../../../../Home/components/CoffeList/assets'
import {
  CartItemContainer,
  CartItemImg,
  CartItemInfo,
  CartItemPrice,
  Separator,
} from './styles'

export function CartItem() {
  return (
    <>
      <CartItemContainer>
        <CartItemImg>
          <img src={coffeeImage.expressoTracional} alt="" />
        </CartItemImg>
        <CartItemInfo>
          <TextRegularM>Expresso Tradicional</TextRegularM>
          <div>
            <ButtonQuantity />
            <ButtonRemove>
              <Trash size={16} weight="thin" /> remover
            </ButtonRemove>
          </div>
        </CartItemInfo>
        <CartItemPrice>
          <TextBoldM>R$ 9,90</TextBoldM>
        </CartItemPrice>
      </CartItemContainer>
      <Separator />
    </>
  )
}
