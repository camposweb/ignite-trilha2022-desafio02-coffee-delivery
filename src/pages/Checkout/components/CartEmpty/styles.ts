import styled from 'styled-components'

export const CartEmptyContainer = styled.main`
  width: 100%;
  padding: 0 10rem;

  @media (max-width: 768px) {
    padding: 0 3rem;
  }

  @media (max-width: 926px) {
    padding: 0rem 3rem;
  }

  @media (max-width: 1080px) {
    padding: 0rem 3rem;
  }
`

export const CartEmptyContent = styled.div`
  display: flex;
  height: 50vh;
  justify-content: center;
  border-radius: 0.375rem;
  background: ${({ theme }) => theme.colors.card};

  div {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    a {
      text-decoration: none;

      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 0.875rem;
      line-height: 1.375rem;
      text-transform: uppercase;
      //padding: 0.75rem 2.813rem;
      padding: 0.5rem 1rem;
      border-radius: 0.375rem;
      outline: none;
      //cursor: pointer;
      border: 2px solid ${({ theme }) => theme.colors.yellowDark};
      text-decoration: none;
      transition: 0.2s;
      /* box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.yellowDark}; */
      color: ${({ theme }) => theme.colors.subtitle};
      //background: ${({ theme }) => theme.colors.yellow};
      background: transparent;

      &:hover {
        background: ${({ theme }) => theme.colors.yellowDark};
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }
`
