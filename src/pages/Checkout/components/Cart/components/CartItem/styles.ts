import styled from 'styled-components'

export const CartItemContainer = styled.div`
  //width: 23rem;
  //max-width: 100%;
  display: flex;
  //width: 100%;
  justify-content: space-between;
  gap: 1.25rem;

  /* @media (max-width: 768px) {
    div {
      flex-direction: column;
    }
  } */
`

export const CartItemImg = styled.div`
  //display: flex;
  //margin-right: 1.25rem;
  img {
    width: 4rem;
    height: 4rem;
  }
`

export const CartItemInfo = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
  }
`

export const CartItemPrice = styled.div`
  //display: flex;
  //flex: 1;
  //justify-content: end;

  @media (max-width: 768px) {
    //flex-direction: column;
  }
`

export const Separator = styled.hr`
  display: flex;
  //width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.button};
  margin: 1.5rem 0;
`
