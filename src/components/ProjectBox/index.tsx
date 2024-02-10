import Button from '../Button'
import { ProjectBoxContainer, ProjectImage, ProjectLayer } from './styles'

type Props = {
  title: string
  description: string
  image: string
  link: string
}

const ProjectBox = ({ title, description, image, link }: Props) => (
  <ProjectBoxContainer>
    <ProjectImage src={image} alt="" />
    <ProjectLayer>
      <h3>{title}</h3>
      <p>{description}</p>
      <Button type="link" to={link} title="acessar o projeto">
        clique aqui
      </Button>
    </ProjectLayer>
  </ProjectBoxContainer>
)

export default ProjectBox
