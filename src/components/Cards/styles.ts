import styled from 'styled-components'
import { Colors } from '../../styles'

interface CardProps {
  flipped?: boolean
}

export const CardContainer = styled.div`
  perspective: 1000px;
  width: 300px;
  height: 400px;
  position: relative;
`

export const Card = styled.div<CardProps>`
  width: 100%;
  height: 100%;

  transform-style: preserve-3d;
  transition: transform 0.6s;
  transform: ${(props) => (props.flipped ? 'rotateY(180deg)' : 'rotateY(0)')};
`

export const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  border-radius: 18px;
  background-color: ${Colors.secondBgColor};
`

export const FrontFace = styled(CardFace)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  cursor: pointer;
  img {
    width: 300px;
    height: 300px;
  }
`

export const BackFace = styled(CardFace)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: ${Colors.fontColor};
  transform: rotateY(180deg);
  border: 2px solid ${Colors.primaBgColor};
  box-shadow: 0 0 18px ${Colors.primaryBlueColor};
  cursor: pointer;
  p {
    padding: 8px;
    font-size: 20px;
    margin-bottom: 12 0px;
    text-align: center;
    line-height: 1.2;
  }
`
export const ImageContainer = styled.div`
  display: flex;

  img {
    width: 48px;
    height: 48px;
    margin-top: 12px;
  }
`
