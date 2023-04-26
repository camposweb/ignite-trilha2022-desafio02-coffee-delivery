import { InputHTMLAttributes, forwardRef } from 'react'
import { InputContainer, InputStyleContainer } from './styles'
import { TextRegularS } from '../Fonts'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, ...props }, ref) => {
    return (
      <InputContainer className={className}>
        <InputStyleContainer ref={ref} {...props} />
        {error && <TextRegularS>{error}</TextRegularS>}
      </InputContainer>
    )
  },
)

Input.displayName = 'Input'
