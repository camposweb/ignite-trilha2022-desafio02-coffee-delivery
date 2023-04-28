import styled from 'styled-components'

export const HeaderContainer = styled.header`
  //width: 100%;
  //max-width: 70rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 10rem;
  background: ${({ theme }) => theme.colors.background};
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;

  @media (max-width: 768px) {
    padding: 2rem 3rem;
    //padding: 1rem 0;
  }

  @media (max-width: 926px) {
    padding: 2rem 3rem;
  }

  @media (max-width: 1080px) {
    padding: 2rem 3rem;
  }

  /* @media (max-width: 1280px) {
    padding: 2rem 3rem;
  } */

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
    width: 2.375rem;
    height: 2.375rem;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    border-radius: 0.375rem;

    background: ${({ theme }) => theme.colors.yellowLight};
    color: ${({ theme }) => theme.colors.yellowDark};

    span {
      width: 1.25rem;
      height: 1.25rem;
      display: flex;
      text-align: center;
      align-items: center;
      justify-items: center;
      justify-content: center;
      position: absolute;
      right: -0.522rem;
      top: -0.5rem;
      border-radius: 6.25rem;
      background: ${({ theme }) => theme.colors.yellowDark};
      color: ${({ theme }) => theme.colors.white};
    }
  }
`
