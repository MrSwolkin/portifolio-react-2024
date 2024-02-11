import { HeaderContainer, Logo, Navbar, LinkItems, Links } from './style'

const Header = () => (
  <>
    <HeaderContainer>
      <div>
        <Logo href="#home">&lt;MrSwolkin/&gt;</Logo>
      </div>
      <Navbar>
        <LinkItems>
          <Links
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Home
          </Links>
        </LinkItems>
        <LinkItems>
          <Links
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            about me
          </Links>
        </LinkItems>
        <LinkItems>
          <Links
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-120}
            duration={500}
          >
            Skills
          </Links>
        </LinkItems>
        <LinkItems>
          <Links
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            Projects
          </Links>
        </LinkItems>
        <LinkItems>
          <Links
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-110}
            duration={500}
          >
            Contact
          </Links>
        </LinkItems>
      </Navbar>
    </HeaderContainer>
  </>
)

export default Header
