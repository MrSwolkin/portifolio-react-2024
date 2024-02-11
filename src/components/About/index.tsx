import {
  AboutSection,
  AboutContainer,
  AboutImage,
  AboutContent
} from './styles'
import imageAbout from '../../assets/images/image-about.png'
import { ButtonLink } from '../Button/styles'

const About = () => (
  <AboutSection id="about" className="container">
    <h2>About me </h2>
    <AboutContainer>
      <AboutImage>
        <img src={imageAbout} alt="" />
      </AboutImage>
      <AboutContent>
        <h3>Web Developer</h3>
        <p>
          Bailarino clássico em transição para a carreira de web developer.
          Estou estudando full stack Python, buscando minha primeira
          oportunidade no mercado tech. Combino a precisão do ballet com a
          criatividade do desenvolvimento web, ansioso para dançar entre linhas
          de código e criar experiências digitais excepcionais.
        </p>
        <ButtonLink type="link" to="/saibaMais" title="clique e saiba mais">
          Saiba mais
        </ButtonLink>
      </AboutContent>
    </AboutContainer>
  </AboutSection>
)

export default About
