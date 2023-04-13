import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 90rem;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;

  /* @media (max-width: 768px) AND (max-width: 1080px) {
    padding: 0 3rem;
  } */

  @media (max-width: 768px) {
    padding: 0;
    //flex-direction: column;
  }
`
