import styled from '@emotion/styled'
import { useRecoilValue } from 'recoil'
import { searchResultCountState } from '../atoms/searchQueryState'
import BookList from '../components/book/BookList'
import EmptyState from '../components/book/EmptyState'
import ResultCount from '../components/shared/ResultCount'
import SearchBar from '../components/search/SearchBar'
import Flex from '../components/shared/Flex'
import Text from '../components/shared/Text'
import { useFetchBooks } from '../hooks/useFetchBooks'

const MainContainer = styled(Flex)`
  flex-direction: column;
  align-items: center;
  padding: 40px;
  min-height: 100vh;
  background-color: #f8f9fa;
  overflow-x: hidden;
`

const SearchBarContainer = styled(Flex)`
  width: 100%;
  flex-direction: column;
`

const SearchBarRow = styled(Flex)`
  width: 100%;
  justify-content: center;
`

const MainPage = () => {
  const resultCount = useRecoilValue(searchResultCountState)
  const { data, isLoading, isError, fetchNextPage, hasNextPage } =
    useFetchBooks()

  return (
    <>
      <MainContainer>
        <Flex direction="column">
          <Text typography="t4" bold>
            도서 검색
          </Text>

          <SearchBarContainer>
            <SearchBarRow>
              <SearchBar />
            </SearchBarRow>
          </SearchBarContainer>
        </Flex>

        <ResultCount resultCount={resultCount} message={'도서 검색 결과'} />

        <BookList
          books={data?.pages.flat() || []}
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          isLoading={isLoading}
          isError={isError}
        />
        {resultCount === 0 && <EmptyState message="검색 결과가 없습니다." />}
      </MainContainer>
    </>
  )
}

export default MainPage
