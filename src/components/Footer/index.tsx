import { FooterContainer, LinkContainer, Links } from './styles'

const Footer = () => (
  <FooterContainer>
    <div>
      <p>&copy; Copyright 2024 | All right Reserved - By Mrswolkin =D </p>
    </div>
    <div>
      <LinkContainer>
        <li>
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
        </li>
        <li>
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
        </li>
        <li>
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
        </li>
        <li>
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
        </li>
        <li>
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
        </li>
      </LinkContainer>
    </div>
  </FooterContainer>
)

export default Footer
