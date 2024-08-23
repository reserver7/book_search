import styled from '@emotion/styled'
import InfiniteScroll from 'react-infinite-scroll-component'
import LoadingDots from '../shared/LoadingScroll'
import Skeleton from '../shared/Skeleton'
import BookItem from './BookItem'
import { BookType } from '../../models/Book'
import { generateUUID } from '../../utils/uuidUtils'

const BookListContainer = styled.div`
  width: 100%;
  margin-top: 24px;
  border: 1px solid #ececec;
  border-radius: 8px;
  overflow-x: hidden;
`

type BookListProps = {
  books: BookType[]
  fetchNextPage?: () => void
  hasNextPage?: boolean
  isLoading?: boolean
  isError?: boolean
}

function BookList({
  books,
  fetchNextPage,
  hasNextPage,
  isLoading = false,
  isError = false,
}: BookListProps) {
  if (isLoading) {
    return (
      <BookListContainer>
        {Array.from({ length: 5 }).map(() => (
          <Skeleton
            key={generateUUID()}
            width="1050px"
            height="100vh"
            style={{ margin: '0 auto' }}
          />
        ))}
      </BookListContainer>
    )
  }

  if (isError) {
    return <div>Error fetching books.</div>
  }

  return (
    <InfiniteScroll
      style={{ overflow: 'hidden' }}
      dataLength={books.length}
      next={fetchNextPage || (() => {})}
      hasMore={!!hasNextPage}
      loader={<LoadingDots />}
    >
      <BookListContainer>
        {books.map((book) => (
          <BookItem
            key={generateUUID()}
            book={{
              id: book.id,
              thumbnail: book.thumbnail,
              title: book.title,
              authors: book.authors,
              price: book.price,
              contents: book.contents,
              sale_price: book.sale_price,
              url: book.url,
            }}
          />
        ))}
      </BookListContainer>
    </InfiniteScroll>
  )
}

export default BookList
