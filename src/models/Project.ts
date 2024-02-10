class Project {
  title: string
  description: string
  image: string
  id: number
  link: string

  constructor(
    id: number,
    title: string,
    description: string,
    image: string,
    link: string
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.image = image
    this.link = link
  }
}

export default Project
