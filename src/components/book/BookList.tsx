import styled from '@emotion/styled'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useFetchBooks } from '../../hooks/useFetchBooks'
import LoadingDots from '../shared/LoadingScroll'
import Skeleton from '../shared/Skeleton'
import BookItem from './BookItem'

const BookListContainer = styled.div`
  width: 100%;
  margin-top: 24px;
  border: 1px solid #ececec;
  border-radius: 8px;
  overflow-x: hidden;
`

function BookList() {
  const { data, isLoading, isError, fetchNextPage, hasNextPage } =
    useFetchBooks()

  if (isLoading) {
    return (
      <BookListContainer>
        {Array.from({ length: 5 }).map((_, index) => (
          <Skeleton
            key={index}
            width="1050px"
            height="100px"
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
      dataLength={data?.pages.flat().length || 0}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<LoadingDots />}
    >
      <BookListContainer>
        {data?.pages.flat().map((book) => (
          <BookItem
            key={book.id}
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
