import { MapPinLine } from 'phosphor-react'
import {
  TextRegularM,
  TextRegularS,
  TitleXS,
} from '../../../../components/Fonts'
import {
  AddressContainer,
  AddressHeader,
  AddressInfo,
  InputCep,
  InputCity,
  InputComplement,
  InputContainer,
  InputLocale,
  InputNumber,
  InputStreet,
  InputUF,
} from './styles'
import { Payment } from '../Payment'

export function Address() {
  return (
    <AddressContainer>
      <TitleXS>Complete seu pedido</TitleXS>
      <AddressInfo>
        <AddressHeader>
          <MapPinLine size={22} color="#C47F17" weight="thin" />
          <div>
            <TextRegularM>Endereço de Entrega</TextRegularM>
            <TextRegularS>
              Informe o endereço onde deseja receber seu pedido
            </TextRegularS>
          </div>
        </AddressHeader>
        <InputContainer>
          <InputCep />
          <InputStreet />
          <div>
            <InputNumber />
            <InputComplement />
          </div>
          <div>
            <InputLocale />
            <InputCity />
            <InputUF />
          </div>
        </InputContainer>
      </AddressInfo>
      <Payment />
    </AddressContainer>
  )
}
