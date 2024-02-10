import styled from 'styled-components'
import { Colors } from '../../styles'

export const AboutSection = styled.div`
  margin-bottom: 150px;
`

export const AboutContainer = styled.div`
  background-color: ${Colors.secondBgColor};
  max-width: 100%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: 16px 48px;
  border-radius: 16px;
  box-shadow: 0 0 18px ${Colors.primaryBlueColor};
`

export const AboutImage = styled.div`
  img {
    width: 32vw;
  }
`

export const AboutContent = styled.div`
  text-align: left;
  line-height: 1.8;
  h2 {
    text-align: center;
    font-size: 48px;
    margin-bottom: 32px 0;
  }

  h3 {
    font-size: 38px;
    margin-bottom: 12px;
  }

  p {
    font-size: 18px;
  }
`
export const Btn = styled.div`
  display: flex;
  a {
    display: inline-block;
    padding: 8px 18px;
    background: ${Colors.primaryBlueColor};
    border-radius: 40px;
    color: ${Colors.secondBgColor};
    text-decoration: none;
    font-size: 22px;
    font-weight: 700;
    margin-top: 30px;

    &:hover {
      background-color: ${Colors.primaryBlueColor};
      color: ${Colors.secondBgColor};
      box-shadow: 0 0 20px ${Colors.primaryBlueColor};
    }
  }
`
