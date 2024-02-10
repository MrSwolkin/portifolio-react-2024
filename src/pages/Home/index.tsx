import About from '../../components/About'
import Home from '../../components/Home'
import Skills from '../../components/Skills'
import Card from '../../models/Card'
import Project from '../../models/Project'
import Contato from '../../components/Contato'

import front from '../../assets/images/icons/front.png'
import html from '../../assets/images/icons/html5.png'
import iconCss from '../../assets/images/icons/css.png'
import react from '../../assets/images/icons/react.png'
import veu from '../../assets/images/icons/vue.png'

import back from '../../assets/images/icons/back.png'
import python from '../../assets/images/icons/python.png'
import django from '../../assets/images/icons/django.png'
import portge from '../../assets/images/icons/portgre.png'

import skill from '../../assets/images/icons/skills.png'
import Projects from '../../components/Projects'

import efood from '../../assets/images/EFOOD.png'
import toDoList from '../../assets/images/to-do-list.png'
import ebacTalks from '../../assets/images/ebac-talks.png'

export const cartao: Card[] = [
  {
    id: 1,
    frontImage: front,
    title: 'Front-end',
    description:
      'Aprimorando habilidades em frontend com HTML, CSS, Vue e React. Comprometido em criar interfaces intuitivas. Em constante busca por desafios e aprendizado.',
    images: [html, iconCss, react, veu]
  },
  {
    id: 2,
    frontImage: back,
    title: 'Back-end',
    description:
      'Estudando backend com Python, foco em Django, REST API e PostgreSQL para desenvolvimeto de aplicações web eficientes. Pronto para desafios e crescimento contínuo.',
    images: [python, django, portge]
  },
  {
    id: 1,
    frontImage: skill,
    title: 'Soft-skills',
    description:
      'Comunicativo e colaborativo, trago uma abordagem proativa. Minha adaptabilidade e sede de aprendizado impulsionam minha constante evolução. Habilidades interpessoais e mentalidade resiliente, tornando-me um membro valioso em qualquer ambiente de trabalho.',
    images: []
  }
]

export const projeto: Project[] = [
  {
    id: 1,
    image: efood,
    title: 'Efood',
    description:
      'Projeto web dinâmico construído com React e Redux, onde a experiência do usuário atinge um novo patamar.',
    link: 'https://efood-d80jgp2iv-mrswolkin.vercel.app/'
  },
  {
    id: 2,
    image: toDoList,
    title: 'To Do List',
    description:
      'Imagine uma lista de tarefas dinâmica e intuitiva criada com Vue.js, proporcionando uma experiência de usuário envolvente.',
    link: 'https://todo-vue-swolkin-hymgkdvbt-mrswolkin.vercel.app/'
  },
  {
    id: 3,
    image: ebacTalks,
    title: 'EBAC - Talks',
    description: 'Landing page de um evento fictício.',
    link: 'https://ebac-tech-talks-swolkin.vercel.app/'
  }
]

const MainPage = () => (
  <>
    <Home />
    <About />
    <Skills cardsModels={cartao} />
    <Projects projectModels={projeto} />
    <Contato />
  </>
)
export default MainPage
