import styled from 'styled-components'
import introBackgoundImg from '../../../../assets/intro-background.png'
import { rgba } from 'polished'

export const IntroContainer = styled.div`
  width: 100%;
  //height: 34rem;
  background: ${({ theme }) => `url(${introBackgoundImg}) no-repeat center,
    linear-gradient(
      0deg,
      ${theme.colors.background} 0%,
      ${rgba(theme.colors.background, 0.2)} 50%,
      ${theme.colors.background} 100%
    )`};
  background-size: cover;
  padding: 0 10rem;
  padding-bottom: 5.75rem;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    /* margin: 0 auto;
    justify-content: center; */
    padding: 0 3rem;
    flex-direction: column;
  }
`
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  > span {
    margin-top: 1rem;
  }
`

export const ImgContainer = styled.div`
  //display: flex;
  //width: 100%;
  //height: 360px;

  @media (max-width: 768px) {
    margin: 0 auto;
    justify-content: center;

    img {
      margin-top: 1.5rem;
      width: 40vw;
    }
  }
`

export const ItemsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;

  @media (max-width: 768px) {
    margin-top: 2rem;
    grid-template-columns: 1fr;
    justify-content: center;
    flex-direction: column;
  }
`
