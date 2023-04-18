import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { TextRegularM, TextRegularS } from '../../../../components/Fonts'
import {
  InputPaymentOption,
  PaymentContainer,
  PaymentHeader,
  PaymentOptionContainer,
} from './styles'

export function Payment() {
  return (
    <PaymentContainer>
      <PaymentHeader>
        <CurrencyDollar size={22} color="#8047F8" weight="thin" />
        <div>
          <TextRegularM>Pagamento</TextRegularM>
          <TextRegularS>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </TextRegularS>
        </div>
      </PaymentHeader>
      <PaymentOptionContainer>
        <InputPaymentOption id="credit" />
        <label htmlFor="credit">
          <CreditCard size={16} color="#8047F8" /> cartão de crédito
        </label>
        <InputPaymentOption id="debit" />
        <label htmlFor="debit">
          <Bank size={16} color="#8047F8" /> cartão de débito
        </label>
        <InputPaymentOption id="dinheiro" />
        <label htmlFor="dinheiro">
          <Money size={16} color="#8047F8" /> dinheiro
        </label>
      </PaymentOptionContainer>
    </PaymentContainer>
  )
}
