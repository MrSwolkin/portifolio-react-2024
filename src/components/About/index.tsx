import {
  AboutSection,
  AboutContainer,
  AboutImage,
  AboutContent
} from './styles'
import imageAbout from '../../assets/images/image-about.png'
import { ButtonLink } from '../Button/styles'

const About = () => (
  <AboutSection className="container">
    <AboutContainer id="About">
      <AboutImage>
        <img src={imageAbout} alt="" />
      </AboutImage>
      <AboutContent>
        <h2>About me </h2>
        <h3>Web Developer</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          ipsam, sunt officiis, eaque eligendi assumenda deserunt facere eius,
          fugit asperiores illo esse alias laboriosam ad dolore! Asperiores
          laudantium quaerat eos.
        </p>
        <ButtonLink type="link" to="/SaibaMais" title="clique e saiba mais">
          Saiba mais
        </ButtonLink>
      </AboutContent>
    </AboutContainer>
  </AboutSection>
)

export default About
