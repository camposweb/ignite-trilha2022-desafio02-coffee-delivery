import { TitleXL, TextRegularL } from '../../../../components/Fonts'
import {
  ContentContainer,
  ImgContainer,
  IntroContainer,
  ItemsContainer,
} from './styles'
import ImgCoffee from '../../../../assets/img-coffee.png'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { ItemInfoIcon } from '../ItemInfoIcon'
import { useTheme } from 'styled-components'

export function Intro() {
  const { colors } = useTheme()

  return (
    <IntroContainer>
      <ContentContainer>
        <TitleXL>Encontre o café perfeito para qualquer hora do dia</TitleXL>
        <TextRegularL>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </TextRegularL>
        <ItemsContainer>
          <ItemInfoIcon
            icon={<ShoppingCart size={32} weight="fill" />}
            iconBg={colors.yellowDark}
            description="Compra simples e segura"
          />
          <ItemInfoIcon
            icon={<Package size={32} weight="fill" />}
            iconBg={colors.text}
            description="Embalagem mantém o café intacto"
          />
          <ItemInfoIcon
            icon={<Timer size={32} weight="fill" />}
            iconBg={colors.yellow}
            description="Entrega rápida e rastreada"
          />
          <ItemInfoIcon
            icon={<Coffee size={32} weight="fill" />}
            iconBg={colors.purple}
            description="O café chega fresquinho até você"
          />
        </ItemsContainer>
      </ContentContainer>
      <ImgContainer>
        <img src={ImgCoffee} alt="" />
      </ImgContainer>
    </IntroContainer>
  )
}
