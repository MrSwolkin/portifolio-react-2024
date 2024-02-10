import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Colors } from '../../styles'

export const ButtonContainer = styled.button`
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
`
export const ButtonLink = styled(Link)`
  display: inline-block;
  padding: 12px 28px;
  background: ${Colors.primaryBlueColor};
  border-radius: 40px;
  color: ${Colors.secondBgColor};
  text-decoration: none;
  font-size: 26px;
  margin-top: 20px;
  margin-bottom: 20px;

  &:hover {
    background-color: ${Colors.primaryBlueColor};
    color: ${Colors.secondBgColor};
    box-shadow: 0 0 20px ${Colors.primaryBlueColor};
  }
`
