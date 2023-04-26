import { InputHTMLAttributes, forwardRef } from 'react'
import { InputPaymentOption } from './styles'
import { TextRegularS } from '../../../../../../components/Fonts'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
}

export const InputRadioMethod = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, ...props }, ref) => {
    return (
      <>
        <InputPaymentOption ref={ref} {...props} />
        {error && <TextRegularS>{error}</TextRegularS>}
      </>
    )
  },
)

InputRadioMethod.displayName = 'InputRadioMethod'
