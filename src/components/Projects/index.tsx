import Project from '../../models/Project'

import ProjectBox from '../ProjectBox'

import { ProjectContainer, ProjectList } from './styles'

type Props = {
  projectModels: Project[]
}

const Projects = ({ projectModels }: Props) => (
  <ProjectContainer>
    <h2>Últimos Projetos</h2>
    <ProjectList>
      {projectModels.map((project) => (
        <ProjectBox
          key={project.id}
          image={project.image}
          title={project.title}
          description={project.description}
          link={project.link}
        />
      ))}
    </ProjectList>
  </ProjectContainer>
)

export default Projects
