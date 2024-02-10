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
  <HomeCotainer id="Home">
    <HomeContent>
      <h3>Hey there, my name is</h3>
      <h1>Erick Swolkin</h1>
      <h3>
        I&rsquo;m a <span>Wed Developer</span>
      </h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
        assumenda laborum quam laboriosam consequatur facere itaque alias
        quibusdam repellendus soluta. Laboriosam dolore ipsa tempora unde
        similique natus excepturi repellendus!
      </p>

      <SocialLinks>
        <LinksItems>
          <a href="">
            <i className="bx bxl-linkedin-square"></i>
          </a>
        </LinksItems>
        <LinksItems>
          <a href="">
            <i className="bx bxl-github"></i>
          </a>
        </LinksItems>
        <LinksItems>
          <a href="">
            <i className="bx bxl-instagram-alt"></i>
          </a>
        </LinksItems>
        <LinksItems>
          <a href="">
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
