import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { TextRegularM, TextRegularS } from '../../../../components/Fonts'
import {
  PaymentContainer,
  PaymentHeader,
  PaymentOptionContainer,
} from './styles'
import { useFormContext } from 'react-hook-form'
import { InputRadioMethod } from './component/InputRadioMethod'

interface ErrorType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export function Payment() {
  const { register, formState } = useFormContext()
  const { errors } = formState as unknown as ErrorType

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
        <InputRadioMethod
          type="radio"
          id="credit"
          {...register('method')}
          value="Cartão de crédito"
        />
        <label htmlFor="credit">
          <CreditCard size={16} color="#8047F8" /> cartão de crédito
        </label>
        <InputRadioMethod
          type="radio"
          id="debit"
          {...register('method')}
          value="Cartão de débito"
        />
        <label htmlFor="debit">
          <Bank size={16} color="#8047F8" /> cartão de débito
        </label>
        <InputRadioMethod
          type="radio"
          id="money"
          {...register('method')}
          value="Dinheiro"
        />
        <label htmlFor="money">
          <Money size={16} color="#8047F8" /> dinheiro
        </label>
      </PaymentOptionContainer>
      {errors.method?.message && (
        <TextRegularS>{errors.method?.message}</TextRegularS>
      )}
    </PaymentContainer>
  )
}
