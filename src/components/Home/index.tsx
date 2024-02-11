import {
  HomeCotainer,
  HomeContent,
  SocialLinks,
  LinksItems,
  HomeImage,
  Btn
} from './styles'

import SwolkinGlobo from '../../assets/images/image-home.png'

const Home = () => (
  <HomeCotainer id="home">
    <HomeContent>
      <h3>Hey there, my name is</h3>
      <h1>Erick Swolkin</h1>
      <h3>
        I&rsquo;m a <span>Wed Developer</span>
      </h3>
      <p>Web developer em formação em busca de oportunidade no mercado tech.</p>

      <SocialLinks>
        <LinksItems>
          <a href="https://www.linkedin.com/in/erick-python-dev/">
            <i className="bx bxl-linkedin-square"></i>
          </a>
        </LinksItems>
        <LinksItems>
          <a href="https://github.com/MrSwolkin">
            <i className="bx bxl-github"></i>
          </a>
        </LinksItems>
        <LinksItems>
          <a href="https://www.instagram.com/erickswolkin/">
            <i className="bx bxl-instagram-alt"></i>
          </a>
        </LinksItems>
        <LinksItems>
          <a href="https://www.facebook.com/erick.swolkin">
            <i className="bx bxl-facebook-square"></i>
          </a>
        </LinksItems>
      </SocialLinks>
      <Btn>
        <a href="CV_EBAC.pdf" download="CV_EBAC.pdf">
          Download CV
        </a>
      </Btn>
    </HomeContent>
    <HomeImage>
      <img src={SwolkinGlobo} alt="" />
    </HomeImage>
  </HomeCotainer>
)

export default Home
