import { useCart } from '../../hooks/useCart'
import { Address } from './components/Address'
import { Cart } from './components/Cart'
import { CartEmpty } from './components/CartEmpty'
import { CheckoutContainer, CheckoutContentContainer } from './styles'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const MethodPayment = {
  credit: 'Cartão de crédito',
  debit: 'Cartão de débito',
  money: 'Dinheiro',
} as const

const confirmFormValidationSchema = zod
  .object({
    cep: zod
      .string()
      .min(8, 'Este campo deve conter ao menos 8 números')
      .max(8, 'Este campo deve conter até 8 números'),
    street: zod.string().min(1, 'Este campo é obrigatório'),
    number: zod
      .number({ invalid_type_error: 'Somente números' })
      .min(1, 'Este campo é obrigatório'),
    complement: zod.string().optional(),
    locale: zod.string().min(1, 'Este campo é obrigatório'),
    city: zod.string().min(1, 'Este campo é obrigatório'),
    uf: zod
      .string()
      .min(1, 'Este campo é obrigatório')
      .max(2, 'Este campo deve conter apenas 2 caracteres'),
    method: zod.nativeEnum(MethodPayment, {
      errorMap: () => {
        return { message: 'Informe o método de pagamento' }
      },
    }),
  })
  .required({
    cep: true,
    street: true,
    number: true,
    city: true,
    uf: true,
  })

export type OrderData = zod.infer<typeof confirmFormValidationSchema>

type ConfirmFormData = OrderData

export function Checkout() {
  const { cartItems, cleanCart } = useCart()

  const confirmForm = useForm<ConfirmFormData>({
    resolver: zodResolver(confirmFormValidationSchema),
  })

  const { handleSubmit } = confirmForm

  const navigate = useNavigate()

  function handleConfirmForm(data: ConfirmFormData) {
    navigate('/success', {
      state: data,
    })
    cleanCart()
  }

  return (
    <>
      {cartItems.length <= 0 ? (
        <CartEmpty />
      ) : (
        <CheckoutContainer>
          <FormProvider {...confirmForm}>
            <CheckoutContentContainer
              onSubmit={handleSubmit(handleConfirmForm)}
            >
              <Address />
              <Cart />
            </CheckoutContentContainer>
          </FormProvider>
        </CheckoutContainer>
      )}
    </>
  )
}
