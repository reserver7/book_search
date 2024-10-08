import { ApiResponseType, BookType } from '../models/Book'
import axios from 'axios'
import { loadTitleUUIDMap, saveTitleUUIDMap } from '../utils/uuidUtils'

const titleUUIDMap: Record<string, string> = loadTitleUUIDMap()

export const fetchBooksFromAPI = async (
  query: string,
  target: string,
  pageParam: number = 1,
): Promise<{ books: BookType[]; totalCount: number }> => {
  if (!query) {
    return { books: [], totalCount: 0 }
  }

  const response = await axios.get<ApiResponseType>(
    `https://dapi.kakao.com/v3/search/book`,
    {
      params: { target, query, page: pageParam, size: 10 },
      headers: { Authorization: `${process.env.REACT_APP_REST_KEY}` },
    },
  )

  const books = response.data.documents.map((book) => {
    const id = book.title

    if (!titleUUIDMap[book.title]) {
      titleUUIDMap[book.title] = id
      saveTitleUUIDMap(titleUUIDMap)
    }

    return {
      id,
      thumbnail: book.thumbnail,
      title: book.title,
      authors: book.authors,
      price: book.price,
      sale_price: book.sale_price || null,
      contents: book.contents,
      url: book.url,
    }
  })

  const totalCount = response.data.meta.total_count
  return { books, totalCount }
}
