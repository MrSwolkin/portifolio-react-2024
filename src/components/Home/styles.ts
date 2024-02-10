import styled from 'styled-components'
import { Colors } from '../../styles'

export const HomeCotainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-itens: center;
  padding: 70px 10% 0;
  margin-bottom: 156px;
`

export const HomeContent = styled.div`
  max-width: 600px;
  font-weight: 700;
  margin-top: 200px;

  h1 {
    font-size: 56px;
    font-weight: 700;
  }

  h3 {
    font-size: 32px;

    &:nth-of-type(2) {
      margin-bottom: 30px;
    }
  }

  span {
    color: ${Colors.primaryBlueColor};
  }

  p {
    font-size: 18px;
  }
`

export const SocialLinks = styled.ul``

export const LinksItems = styled.li`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 30px 15px;

  a {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 56px;
    height: 56px;
    font-size: 36px;
    border: 2px solid ${Colors.primaryBlueColor};
    border-radius: 50%;
    background-color: transparent;
    color: ${Colors.primaryBlueColor};

    &:hover {
      background-color: ${Colors.primaryBlueColor};
      color: ${Colors.primaBgColor};
      box-shadow: 0 0 20px ${Colors.primaryBlueColor};
    }
  }
`

export const Btn = styled.div`
  a {
    display: inline-block;
    padding: 12px 28px;
    background: ${Colors.primaryBlueColor};
    border-radius: 40px;
    color: ${Colors.secondBgColor};
    text-decoration: none;
    font-size: 26px;
    margin-top: 30px;

    &:hover {
      background-color: ${Colors.primaryBlueColor};
      color: ${Colors.secondBgColor};
      box-shadow: 0 0 20px ${Colors.primaryBlueColor};
    }
  }
`

export const HomeImage = styled.div`
  img {
    max-width: 600px;
    max-height: 600px;
    margin-top: 48px;
  }
`
