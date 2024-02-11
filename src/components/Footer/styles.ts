import styled from 'styled-components'
import { Colors } from '../../styles'
import { Link } from 'react-scroll'

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 38px;
  font-size: 18px;
  align-items: center;
`
export const LinkContainer = styled.ul`
  display: flex;

  li {
    padding: 12px;

    }
  }
`
export const Links = styled(Link)`
  font-size: 18px;
  color: ${Colors.fontColor};
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: ${Colors.primaryBlueColor};
  }
`
