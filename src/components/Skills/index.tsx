import Cards from '../Cards'
import Card from '../../models/Card'

import { SkilsContainer, List } from './styles'

type Props = {
  cardsModels: Card[]
}

const Skills = ({ cardsModels }: Props) => (
  <SkilsContainer id="skills">
    <h2>Minhas Skills</h2>
    <List>
      {cardsModels.map((card) => (
        <Cards
          key={card.id}
          title={card.title}
          frontImage={card.frontImage}
          description={card.description}
          images={card.images}
        />
      ))}
    </List>
  </SkilsContainer>
)

export default Skills
