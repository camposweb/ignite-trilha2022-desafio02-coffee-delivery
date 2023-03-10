import styled from 'styled-components'

export const HeaderContainer = styled.header`
  //width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  //margin: 0 auto;
  padding: 2rem 0;
  background: ${({ theme }) => theme.colors.background};

  @media (max-width: 768px) {
    //padding: 2rem 3rem;
    //padding: 1rem 0;
  }

  nav {
    display: flex;
    gap: 0.75rem;
  }

  a {
    text-decoration: none;
  }

  .city {
    width: 8.938rem;
    height: 2.375rem;
    display: flex;
    align-items: center;
    justify-content: center;
    //padding: 0.5rem;
    border-radius: 0.375rem;
    gap: 0.25rem;
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.3rem;

    background: ${({ theme }) => theme.colors.purpleLight};
    color: ${({ theme }) => theme.colors.purpleDark};
  }

  .cart {
  }
`
