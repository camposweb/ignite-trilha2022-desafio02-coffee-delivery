import { IconItemContainer, ItemInfoIconContainer } from './styles'
import { TextRegularM } from '../../../../components/Fonts'
import { ReactNode } from 'react'

interface ItemInfoIconProps {
  icon: ReactNode
  description: string | ReactNode
  iconBg: string
}

export function ItemInfoIcon({ icon, description, iconBg }: ItemInfoIconProps) {
  return (
    <ItemInfoIconContainer>
      <IconItemContainer iconBg={iconBg}>{icon}</IconItemContainer>
      {typeof description === 'string' ? (
        <TextRegularM>{description}</TextRegularM>
      ) : (
        description
      )}
    </ItemInfoIconContainer>
  )
}
