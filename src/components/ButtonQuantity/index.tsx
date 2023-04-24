import { Minus, Plus } from 'phosphor-react'
import { ButtonIcon, ButtonQuantityContainer } from './styles'

interface ButtonQuantityProps {
  quantity: number
  onIncrease: () => void
  onDecrease: () => void
}

export function ButtonQuantity({
  quantity,
  onIncrease,
  onDecrease,
}: ButtonQuantityProps) {
  return (
    <ButtonQuantityContainer>
      <ButtonIcon onClick={onDecrease}>
        <Minus size={14} weight="fill" />
      </ButtonIcon>
      <input type="number" defaultValue={1} min={1} value={quantity} readOnly />
      <ButtonIcon onClick={onIncrease}>
        <Plus size={14} weight="fill" />
      </ButtonIcon>
    </ButtonQuantityContainer>
  )
}
