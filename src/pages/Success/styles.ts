import styled from 'styled-components'

export const SuccessContainer = styled.main`
  width: 100%;
  padding: 0 10rem;
  margin-bottom: 3rem;

  .link {
    display: flex;
    margin-top: 1rem;
    a {
      text-decoration: none;

      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 0.875rem;
      line-height: 1.375rem;
      text-transform: uppercase;
      padding: 0.75rem 2.813rem;
      border-radius: 0.375rem;
      outline: none;
      border: 2px solid ${({ theme }) => theme.colors.yellowDark};
      text-decoration: none;
      transition: 0.2s;
      color: ${({ theme }) => theme.colors.subtitle};
      background: transparent;

      &:hover {
        background: ${({ theme }) => theme.colors.yellowDark};
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }

  @media (max-width: 768px) {
    padding: 0 3rem;

    .link {
      margin-top: 1rem;

      a {
        width: 100%;
        padding: 0.75rem 0;
        text-align: center;
      }
    }
  }

  @media (max-width: 926px) {
    padding: 0 3rem;

    .link {
      margin-top: 1rem;

      a {
        width: 100%;
        padding: 0.75rem 0;
        text-align: center;
      }
    }
  }

  @media (max-width: 1080px) {
    padding: 0 3rem;
  }
`

export const SuccessTitle = styled.div`
  display: flex;
  flex-direction: column;

  > strong {
    color: ${({ theme }) => theme.colors.yellowDark};
  }
`

export const SuccessContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2.5rem;
  gap: 6.375rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 926px) {
    flex-direction: column;
  }
`

export const SuccessInfoContainer = styled.div`
  display: flex;
  min-width: 32.875rem;
  flex-direction: column;
  border-radius: 6px 36px;
  padding: 1px;
  background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);

  .container {
    display: flex;
    width: 100%;
    flex-direction: column;
    height: 100%;
    padding: 2.5rem;
    gap: 2rem;
    background: ${({ theme }) => theme.colors.background};
    border-radius: inherit;
  }

  @media (max-width: 768px) {
    min-width: 100%;
  }
`

export const SuccessInfo = styled.div`
  display: flex;
  gap: 0.75rem;
  div {
    flex-direction: column;
  }
`

export const SuccessImg = styled.div`
  display: flex;
  width: 100%;

  img {
    width: 100%;
  }
`
