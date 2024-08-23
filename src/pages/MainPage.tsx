import styled from '@emotion/styled'
import { useRecoilValue } from 'recoil'
import { searchResultCountState } from '../atoms/searchQueryState'
import BookList from '../components/book/BookList'
import EmptyState from '../components/book/EmptyState'
import ResultCount from '../components/search/ResultCount'
import SearchBar from '../components/search/SearchBar'
import Flex from '../components/shared/Flex'
import Text from '../components/shared/Text'

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

        <ResultCount />

        <BookList />
        {resultCount === 0 && <EmptyState />}
      </MainContainer>
    </>
  )
}

export default MainPage
