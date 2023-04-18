import { Minus, Plus } from 'phosphor-react'
import { ButtonIcon, ButtonQuantityContainer } from './styles'
import { useState } from 'react'

export function ButtonQuantity() {
  const [quantity, setQuantity] = useState<number>(1)

  function handleDecrement() {
    if (quantity <= 1) {
      return
    }
    setQuantity(quantity - 1)
  }

  function handleIncrement() {
    setQuantity(quantity + 1)
  }

  return (
    <ButtonQuantityContainer>
      <ButtonIcon onClick={handleDecrement}>
        <Minus size={14} weight="fill" />
      </ButtonIcon>
      <input type="number" defaultValue={1} min={1} value={quantity} readOnly />
      <ButtonIcon onClick={handleIncrement}>
        <Plus size={14} weight="fill" />
      </ButtonIcon>
    </ButtonQuantityContainer>
  )
}
