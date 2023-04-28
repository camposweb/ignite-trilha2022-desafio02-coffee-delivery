import styled from 'styled-components'

export const CoffeeListContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding: 0 10rem;
  background: ${({ theme }) => theme.colors.background};
  /* background: ${({ theme }) => theme.colors.background}; */

  @media (max-width: 768px) {
    text-align: center;
    padding: 0;
  }

  @media (max-width: 820px) {
    > strong {
      text-align: center;
    }
  }

  @media (max-width: 926px) {
    padding: 0 3rem;
  }

  @media (max-width: 1080px) {
    padding: 0 3rem;
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
    margin-top: 2rem;
    padding: 0;
    grid-template-columns: 1fr;
  }

  /*  @media (width: 810px) {
    grid-template-columns: 1fr 1fr;
    //padding: 0;
    //place-items: initial;
  } */

  @media (width: 926px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (width: 1080px) {
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    //padding: 0;
    //place-items: center;
    place-self: center;
  }
`
