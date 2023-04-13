import styled from 'styled-components'

export const CoffeeCardInfo = styled.div`
  position: relative;
  width: 16rem;
  height: 19.375rem;
  border-radius: 0.375rem 2.25rem;
  background: ${({ theme }) => theme.colors.card};

  display: flex;
  justify-content: center;

  img {
    position: absolute;
    top: -1.25rem;
    left: calc(50% - 7.5rem / 2);
  }

  div {
    display: flex;
    margin-top: 7rem;
    //margin: 0 auto;
    align-items: center;
    text-align: center;
    //justify-content: center;
    flex-direction: column;
    padding: 0 1.25rem;

    /* @media (max-width: 768px) {
      margin-top: 2rem;
    } */

    div {
      display: flex;
      //align-items: center;
      //justify-content: center;
      flex-direction: row;
      gap: 0.25rem;
      margin-top: 0.75rem;
      margin-bottom: 1rem;
    }
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const InputButton = styled.input.attrs({
  type: 'number',
  defaultValue: 1,
  min: 1,
})`
  display: flex;
  //flex: 1;
  width: 4.5rem;

  ::-webkit-calendar-picker-indicator {
    display: none !important;
    color: black;
    background-color: black;
  }
`
