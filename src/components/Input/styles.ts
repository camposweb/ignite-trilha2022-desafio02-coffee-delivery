import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  position: relative;

  > span {
    margin-top: -0.5rem;
    color: ${({ theme }) => theme.colors.error};
  }
`

export const InputStyleContainer = styled.input`
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
