import styled from 'styled-components'

export const CoffeeCardInfo = styled.div`
  position: relative;
  width: 16rem;
  height: 19.375rem;
  border-radius: 0.375rem 2.25rem;
  background: ${({ theme }) => theme.colors.card};

  display: flex;
  justify-content: center;
  flex-direction: column;

  img {
    position: absolute;
    top: -1.25rem;
    left: calc(50% - 7.5rem / 2);
  }
`

export const TagContainer = styled.div`
  display: flex;
  margin-top: 7rem;
  //margin: 0 auto;
  align-items: center;
  text-align: center;
  justify-content: center;
  flex-direction: row;
  padding: 0 1.25rem;
  gap: 0.25rem;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 1rem;
  gap: 0.5rem;
  padding: 0 1.25rem;
`

export const CardFooterContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 2.063rem;
  padding: 0 1.5rem;
`

export const AddCartContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 7.375rem;
`
