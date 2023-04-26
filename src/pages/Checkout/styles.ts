import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  width: 100%;
  margin-bottom: 9.8rem;
`

export const CheckoutContentContainer = styled.form`
  display: flex;
  padding: 0 10rem;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 3rem;
  }

  @media (max-width: 926px) {
    flex-direction: column;
    //padding: 0 3rem;
  }

  @media (width: 1366px) {
    gap: 0;
  }
`

export const PaymentContainer = styled.div``
