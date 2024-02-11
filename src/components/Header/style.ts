import { Link } from 'react-scroll'
import { Colors } from '../../styles'

import styled from 'styled-components'

export const HeaderContainer = styled.div`
  position: fixed;
  background-color: ${Colors.primaBgColor};
  top: 0;
  left: 0;
  width: 100%;
  padding: 28px 10%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  z-index: 100;
`

export const Logo = styled.a`
  font-size: 48px;
  color: ${Colors.fontColor};
  text-decoration: none;
  cursor: pointer;
`

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
`

export const LinkItems = styled.li`
  padding: 0 6px;
  font-size: 28px;
  }
`
export const Links = styled(Link)`
  display: flex;
  text-align: center;
  text-decoration: none;
  color: ${Colors.fontColor};
  margin-left: 18px;
  cursor: pointer;
  &:hover {
    color: ${Colors.primaryBlueColor};
  }
`
