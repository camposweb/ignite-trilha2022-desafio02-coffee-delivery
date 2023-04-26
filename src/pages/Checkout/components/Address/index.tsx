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
  InputContainer,
} from './styles'
import { Payment } from '../Payment'
import { useFormContext } from 'react-hook-form'
import { Input } from '../../../../components/Input'

interface ErrorType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export function Address() {
  const { register, formState } = useFormContext()
  const { errors } = formState as unknown as ErrorType

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
          <Input
            type="number"
            placeholder="CEP"
            className="cep"
            {...register('cep')}
            error={errors.cep?.message}
          />
          <Input
            type="text"
            placeholder="Rua"
            {...register('street')}
            error={errors.street?.message}
          />
          <div>
            <Input
              type="number"
              placeholder="Número"
              className="inputNumber"
              {...register('number', { valueAsNumber: true })}
              error={errors.number?.message}
            />
            <Input
              type="text"
              placeholder="Complemento"
              className="complement"
              {...register('complement')}
              error={errors.complement?.message}
            />
          </div>
          <div>
            <Input
              type="text"
              placeholder="Bairro"
              {...register('locale')}
              error={errors.locale?.message}
            />
            <Input
              type="text"
              placeholder="Cidade"
              className="city"
              {...register('city')}
              error={errors.city?.message}
            />
            <Input
              type="text"
              placeholder="UF"
              className="uf"
              {...register('uf')}
              error={errors.uf?.message}
            />
          </div>
        </InputContainer>
      </AddressInfo>
      <Payment />
    </AddressContainer>
  )
}
