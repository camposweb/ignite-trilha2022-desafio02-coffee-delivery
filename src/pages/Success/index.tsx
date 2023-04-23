import {
  TextBoldM,
  TextRegularL,
  TextRegularM,
  TitleL,
} from '../../components/Fonts'
import {
  SuccessContainer,
  SuccessContent,
  SuccessImg,
  SuccessInfo,
  SuccessInfoContainer,
  SuccessTitle,
} from './styles'
import ImgConfirm from '../../assets/img-confirm.svg'
import { SuccessIcon } from './components/SuccessIcon'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { NavLink } from 'react-router-dom'

export function Success() {
  const { colors } = useTheme()

  return (
    <SuccessContainer>
      <SuccessTitle>
        <TitleL>Uhu! Pedido confirmado</TitleL>
        <TextRegularL>
          Agora é só aguardar que logo o café chegará até você
        </TextRegularL>
      </SuccessTitle>
      {
        <SuccessContent>
          <SuccessInfoContainer>
            <div className="container">
              <SuccessInfo>
                <SuccessIcon
                  icon={<MapPin weight="fill" />}
                  iconBg={colors.purple}
                />
                <div>
                  <TextRegularM>Entrega em </TextRegularM>
                  <TextBoldM>Rua João Daniel Martinelli, 102</TextBoldM>
                  <div>
                    <TextRegularM>Farrapos - Porto Alegre, RS</TextRegularM>
                  </div>
                </div>
              </SuccessInfo>
              <SuccessInfo>
                <SuccessIcon
                  icon={<Timer weight="fill" />}
                  iconBg={colors.yellow}
                />
                <div>
                  <TextRegularM>Previsão de entrega</TextRegularM>
                  <div>
                    <TextBoldM>20 min - 30 min</TextBoldM>
                  </div>
                </div>
              </SuccessInfo>
              <SuccessInfo>
                <SuccessIcon
                  icon={<CurrencyDollar weight="fill" />}
                  iconBg={colors.yellowDark}
                />
                <div>
                  <TextRegularM>Pagamento na entrega</TextRegularM>
                  <div>
                    <TextBoldM>Cartão de Crédito</TextBoldM>
                  </div>
                </div>
              </SuccessInfo>
            </div>
          </SuccessInfoContainer>
          <SuccessImg>
            <img src={ImgConfirm} alt="" />
          </SuccessImg>
        </SuccessContent>
      }
      <div className="link">
        <NavLink to="/">voltar para home</NavLink>
      </div>
    </SuccessContainer>
  )
}