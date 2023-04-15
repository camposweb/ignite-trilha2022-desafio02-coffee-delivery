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
