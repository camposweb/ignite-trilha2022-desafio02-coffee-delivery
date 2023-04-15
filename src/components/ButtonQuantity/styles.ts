import styled from 'styled-components'

export const ButtonQuantityContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.button};
  border-radius: 0.375rem;
  gap: 0.25rem;
  padding: 0 0.25rem;

  input {
    width: 100%;
    text-align: center;
    background: none;
    border: none;

    font-family: 'Roboto', sans-serif;
    font-style: normal;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.313rem;

    &:focus {
      outline: none;
    }
  }
`

export const ButtonIcon = styled.button.attrs({
  type: 'button',
})`
  width: 0.875rem;
  height: 0.875rem;
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.purple};
  transition: 0.4s;
  cursor: pointer;

  &:disabled {
    opacity: 0.4;
  }

  &:not(:disabled):hover {
    color: ${({ theme }) => theme.colors.purpleDark};
  }
`
