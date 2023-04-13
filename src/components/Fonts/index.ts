import styled from 'styled-components'

const BaseTitle = styled.strong`
  font-family: 'Baloo 2', cursive;
  font-style: normal;
  color: ${({ theme }) => theme.colors.title};
`

export const TitleXS = styled(BaseTitle)`
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.438rem;
`
export const TitleS = styled(BaseTitle)`
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.625rem;
  color: ${({ theme }) => theme.colors.subtitle};
`
export const TitleM = styled(BaseTitle)`
  font-weight: 800;
  font-size: 1.5rem;
  line-height: 1.938rem;
`
export const TitleL = styled(BaseTitle)`
  font-weight: 800;
  font-size: 2rem;
  line-height: 2.625rem;
`

export const TitleXL = styled(BaseTitle)`
  font-weight: 800;
  font-size: 3rem;
  line-height: 3.875rem;
`

export const Tag = styled.span`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 0.625rem;
  line-height: 0.813rem;
  text-transform: uppercase;
  padding: 0.25rem 0.5rem;
  border-radius: 6.25rem;
  background: ${({ theme }) => theme.colors.yellowLight};
  color: ${({ theme }) => theme.colors.yellowDark};
`

export const Label = styled.span`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.125rem;
  letter-spacing: -0.06rem;
  color: ${({ theme }) => theme.colors.label};
`

const BaseText = styled.span`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  color: ${({ theme }) => theme.colors.text};
`

export const TextBoldS = styled(BaseText)`
  font-weight: 700;
  font-size: 0.75rem;
  line-height: 1rem;
  letter-spacing: -0.06rem;
`

export const TextRegularS = styled(BaseText)`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.125rem;
`

export const TextBoldM = styled(BaseText)`
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.313rem;
`

export const TextRegularM = styled(BaseText)`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.313rem;
  //padding-right: 3rem;
`

export const TextBoldL = styled(BaseText)`
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.625rem;
`

export const TextRegularL = styled(BaseText)`
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.625rem;
  letter-spacing: -0.06rem;
  font-stretch: 100;
  //padding-right: 3rem;
`
