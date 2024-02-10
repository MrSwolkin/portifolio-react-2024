import { useState } from 'react'

import {
  CardContainer,
  Card,
  FrontFace,
  BackFace,
  ImageContainer
} from './styles'

export type Props = {
  title: string
  frontImage: string
  description: string
  images: string[]
}

const Cards = ({ title, description, images, frontImage }: Props) => {
  const [flipped, setFlipped] = useState(false)

  const handleFlip = () => {
    setFlipped(!flipped)
  }
  return (
    <div>
      <CardContainer onClick={handleFlip}>
        <Card flipped={flipped}>
          <FrontFace>
            <img src={frontImage} alt="" />
            <h3>{title}</h3>
          </FrontFace>
          <BackFace>
            <p>{description}</p>
            <ImageContainer>
              {images.map((image) => (
                <div key={image}>
                  <img src={image} />
                </div>
              ))}
            </ImageContainer>
          </BackFace>
        </Card>
      </CardContainer>
    </div>
  )
}

export default Cards
