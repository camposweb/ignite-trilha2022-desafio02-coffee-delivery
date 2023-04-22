import styled from 'styled-components'

export const CartContainer = styled.div`
  //width: 28rem;
  //display: flex;
  //width: 28rem;
  //width: 100%;
  //flex-direction: column;
  //flex: 1;
`

export const CartContent = styled.div`
  //max-width: 23rem;
  //width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 0.938rem;
  padding: 3rem 2.75rem;
  //padding: 3rem 0;
  border-radius: 0.375rem 2.75rem;
  background: ${({ theme }) => theme.colors.card};

  @media (width: 1366px) {
    //padding: 1.5rem 1.5rem;
  }
`

export const CartPrices = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding-bottom: 1.5rem;

  div {
    display: flex;
    justify-content: space-between;
  }
`
