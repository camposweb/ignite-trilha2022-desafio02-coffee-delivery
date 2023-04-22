import { IconContainer, SuccessIconContainer } from './styles'
import { ReactNode } from 'react'

interface ItemInfoIconProps {
  icon: ReactNode
  iconBg: string
}

export function SuccessIcon({ icon, iconBg }: ItemInfoIconProps) {
  return (
    <SuccessIconContainer>
      <IconContainer iconBg={iconBg}>{icon}</IconContainer>
    </SuccessIconContainer>
  )
}
