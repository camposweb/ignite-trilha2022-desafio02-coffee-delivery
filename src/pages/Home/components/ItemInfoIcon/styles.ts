import styled from 'styled-components'

export const ItemInfoIconContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 0.75rem;
  //margin: 0;
`

interface IconItemContainerProps {
  iconBg: string
}

export const IconItemContainer = styled.div<IconItemContainerProps>`
  display: flex;
  width: 2rem;
  height: 2rem;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 62.5rem;

  background: ${({ iconBg }) => iconBg};
`
