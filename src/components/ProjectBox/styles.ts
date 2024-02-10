import styled from 'styled-components'
import { Colors } from '../../styles'

export const ProjectBoxContainer = styled.div`
  position: relative;
  border-radius: 16px;
  box-shadow: 0 0 16px ${Colors.primaryBlueColor};
  overflow: hidden;
  display; flex;

  &:hover {
    transform: translateY(0);
  }
`
export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  transition: 0.5s ease;


  &:hover {
    transform: scale(1.1);
`

export const ProjectLayer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.6), ${Colors.secondBgColor});
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 24px;
  transform: translateY(100%);
  transition: 0.5s ease;

  ${ProjectBoxContainer}:hover & {
    transform: translateY(0);
  }

  h3 {
    font-size: 24px;
    padding-bottom: 12px;
  }
`
