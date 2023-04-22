import styled from 'styled-components'

export const PaymentContainer = styled.div`
  //width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 0.938rem;
  padding: 2.5rem;
  border-radius: 0.375rem;
  background: ${({ theme }) => theme.colors.card};
`
export const PaymentHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  //margin-top: 2.5rem;
  //padding: 0 2.5rem;

  div {
    display: flex;
    flex: 1;
    flex-direction: column;
  }
`

export const PaymentOptionContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 0.75rem;
  margin-top: 2rem;

  label {
    display: flex;
    width: 11.167rem;
    background: ${({ theme }) => theme.colors.button};
    cursor: pointer;
    text-transform: uppercase;
    padding: 1rem;
    border-radius: 0.375rem;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    transition: 0.4s;

    font-family: 'Roboto', sans-serif;
    font-style: normal;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.188rem;

    @media (width: 1366px) {
      gap: 0.1rem;
    }
  }

  @media (max-width: 768px) {
    label {
      width: 100%;
    }

    flex-direction: column;
  }

  @media (width: 1366px) {
    gap: 0.1rem;
  }
`

export const InputPaymentOption = styled.input.attrs({
  type: 'radio',
  name: 'method',
})`
  visibility: hidden;
  appearance: none;

  &:checked + label {
    box-shadow: 0 0 0 0.063rem ${({ theme }) => theme.colors.purple};
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.purpleLight};
  }

  &:hover + label:hover {
    background: ${({ theme }) => theme.colors.hover};
    color: ${({ theme }) => theme.colors.subtitle};
  }
`
