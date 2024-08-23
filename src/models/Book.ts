export type BookType = {
  id: string
  thumbnail?: string
  title: string
  authors: string[]
  price: string
  sale_price?: number | null
  contents: string
  isHighlighted?: boolean
  url: string
}

export type ApiResponseType = {
  documents: BookType[]
  meta: {
    total_count: number
  }
}
