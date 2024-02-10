class Card {
  title: string
  frontImage: string
  description: string
  images: string[]
  id: number

  constructor(
    id: number,
    title: string,
    frontImage: string,
    description: string,
    images: string[]
  ) {
    this.id = id
    this.title = title
    this.frontImage = frontImage
    this.description = description
    this.images = images
  }
}

export default Card
