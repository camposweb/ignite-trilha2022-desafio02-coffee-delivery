import styled from 'styled-components'

export const LayoutContainer = styled.div`
  //width: 100%;
  max-width: 70rem;
  //height: 50vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  background: ${({ theme }) => theme.colors.background};

  @media (max-width: 1280px) {
    padding: 0 3rem;
  }

  /* @media (max-width: 768px) {
    padding: 2rem 3rem;
  } */

  /*  @media (max-width: 768px) and (max-width: 1080px) {
    padding: 2rem 3rem;
  } */
`
