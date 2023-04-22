import styled from 'styled-components'

export const CartItemContainer = styled.div`
  display: flex;
  gap: 1.25rem;

  img {
    width: 4rem;
    height: 4rem;
  }

  /* @media (max-width: 768px) {
    div {
      flex-direction: column;
    }
  } */
`

export const CartItemImg = styled.div`
  display: flex;
  //margin-right: 1.25rem;
`

export const CartItemInfo = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  //justify-content: space-between;

  /* img {
    width: 4rem;
    height: 4rem;
  } */
  div {
    display: flex;
    gap: 0.5rem;
    //flex-direction: column;
  }
`

export const CartItemPrice = styled.div`
  display: flex;
  flex: 1;
  justify-content: end;

  @media (max-width: 768px) {
    //flex-direction: column;
  }

  @media (width: 1366px) {
    //visibility: hidden;
  }
`

export const Separator = styled.hr`
  display: flex;
  //width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.button};
  margin: 1.5rem 0;
`

export const ValueScreen = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
`
