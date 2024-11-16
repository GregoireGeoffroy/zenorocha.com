export interface Post {
  slug: string
  title: string
  date: string
  content: string
  description?: string
  image?: string
  lang?: string
  skip?: boolean
} 