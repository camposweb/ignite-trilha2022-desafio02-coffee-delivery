import styled from 'styled-components'

const BaseButton = styled.button`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  text-transform: uppercase;
  border: 0;
  cursor: pointer;
`

/* export const ButtonS = styled.button`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.188rem;
  border-radius: 0.375rem;
  padding: 0.5rem;
` */

const BaseButtonS = styled(BaseButton)`
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.188rem;
  border-radius: 0.375rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ButtonRemove = styled(BaseButtonS)`
  color: ${({ theme }) => theme.colors.text};
  text-transform: uppercase;
  transition: 0.2s;
  background: ${({ theme }) => theme.colors.button};

  svg {
    color: ${({ theme }) => theme.colors.purple};
  }

  &:hover {
    svg {
      color: ${({ theme }) => theme.colors.purpleDark};
    }
    color: ${({ theme }) => theme.colors.subtitle};
    background: ${({ theme }) => theme.colors.hover};
  }
`

export const ButtonCoffeCard = styled(BaseButtonS)`
  display: flex;
  width: 2.375rem;
  height: 2.375rem;
  color: ${({ theme }) => theme.colors.card};
  background: ${({ theme }) => theme.colors.purpleDark};
  transition: 0.4s;

  &:hover {
    //color: ${({ theme }) => theme.colors.card};
    background: ${({ theme }) => theme.colors.purple};
  }
`

export const ButtonG = styled.button`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.188rem;
`

export const ButtonConfirm = styled.button`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.375rem;
  text-transform: uppercase;
  padding: 0.75rem 2.813rem;
  border-radius: 0.375rem;
  outline: none;
  cursor: pointer;
  border: none;
  text-decoration: none;
  transition: 0.2s;

  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.yellow};

  &:hover {
    background: ${({ theme }) => theme.colors.yellowDark};
  }
`
