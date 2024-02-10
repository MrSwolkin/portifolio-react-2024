import { Link } from 'react-router-dom'
import { HeaderContainer, Logo, Navbar, LinkItems, Links } from './style'

const Header = () => (
  <>
    <HeaderContainer>
      <div>
        <Logo href="#">&lt;MrSwolkin/&gt;</Logo>
      </div>
      <Navbar>
        <LinkItems>
          <Links href="/Home">Home</Links>
        </LinkItems>
        <LinkItems>
          <Links href="/About">About me</Links>
        </LinkItems>
        <LinkItems>
          <Links href="#">Skills</Links>
        </LinkItems>
        <LinkItems>
          <Links href="#">Projects</Links>
        </LinkItems>
        <LinkItems>
          <Links href="#">Contact</Links>
        </LinkItems>
      </Navbar>
    </HeaderContainer>
  </>
)

export default Header
