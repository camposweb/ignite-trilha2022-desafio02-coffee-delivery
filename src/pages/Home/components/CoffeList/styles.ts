import styled from 'styled-components'

export const CoffeeListContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding: 0 10rem;
  background: ${({ theme }) => theme.colors.background};
  /* background: ${({ theme }) => theme.colors.background}; */

  @media (max-width: 768px) {
    margin-top: 5rem;
    text-align: center;
    padding: 0;
  }
`

export const CoffeeCardContainer = styled.div`
  display: grid;
  width: 100%;
  place-items: center;
  grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
  grid-gap: 2.5rem 2rem;
  margin-top: 3.375rem;

  @media (max-width: 768px) {
    //text-align: center;
    padding: 0;
  }

  @media (max-width: 1080px) {
    //text-align: center;
    padding: 0 3rem;
  }
`
/* @media (max-width: 768px) {
  
} */
