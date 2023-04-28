import styled from 'styled-components'

export const AddressContainer = styled.div`
  //max-width: 35rem;
  //max-width: 40rem;
  //flex-direction: column;
  /* @media (max-width: 768px) {
    padding: 0 3rem;
  } */
  @media (width: 1080px) {
    max-width: 35rem;
  }

  @media (width: 1366px) {
    max-width: 38rem;
  }
`

export const AddressInfo = styled.div`
  margin-top: 0.938rem;
  padding: 2.5rem;
  border-radius: 0.375rem;
  background: ${({ theme }) => theme.colors.card};
`

export const AddressHeader = styled.div`
  //width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  //margin-top: 2.5rem;
  //padding: 0 2.5rem;

  div {
    display: flex;
    flex: 1;
    flex-direction: column;
  }
`

export const InputContainer = styled.div`
  //width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  gap: 1rem;
  //padding: 0 2.5rem;

  .cep {
    width: 12.5rem;

    @media (max-width: 768px) {
      width: 100%;
    }
  }
  .inputNumber {
    width: 12.5rem;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .complement {
    width: 100%;
  }

  .city {
    width: 100%;
  }

  .uf {
    width: 3.75rem;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  div {
    //width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 0.75rem;
  }
  @media (max-width: 768px) {
    input {
      width: 100%;
    }
    div {
      flex-direction: column;
    }
  }
`

export const BaseInput = styled.input.attrs({
  type: 'text',
})`
  //display: flex;
  padding: 0.75rem;
  border-radius: 0.25rem;
  border: none;
  box-shadow: 0 0 0 0.063rem ${({ theme }) => theme.colors.button};
  background: ${({ theme }) => theme.colors.input};

  font-family: 'Roboto', sans-serif;
  font-style: normal;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.125rem;
  outline: none;

  &:active {
    /* border: ${({ theme }) => theme.colors.yellowDark}; */
    box-shadow: 0 0 0 0.063rem ${({ theme }) => theme.colors.yellowDark};
  }

  &:focus {
    /* border: ${({ theme }) => theme.colors.yellowDark}; */
    box-shadow: 0 0 0 0.063rem ${({ theme }) => theme.colors.yellowDark};
  }
`

export const PaymentContainer = styled.div``
