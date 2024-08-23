import styled from '@emotion/styled'
import { useRecoilValue } from 'recoil'
import { wishlistState } from '../atoms/searchQueryState'
import BookList from '../components/book/BookList'
import EmptyState from '../components/book/EmptyState'
import Flex from '../components/shared/Flex'
import Text from '../components/shared/Text'
import ResultCount from '../components/shared/ResultCount'
import Spacing from '../components/shared/Spacing'

const MainContainer = styled(Flex)`
  flex-direction: column;
  align-items: center;
  padding: 40px;
  min-height: 100vh;
  background-color: #f8f9fa;
  overflow-x: hidden;
`

const WishlistHeader = styled(Flex)`
  width: 100%;
  justify-content: space-between;
  margin-top: 60px;
`

const WishlistPage = () => {
  const wishlist = useRecoilValue(wishlistState)

  return (
    <>
      <MainContainer>
        <Flex direction="column" style={{ marginLeft: '-350px' }}>
          <Text typography="t4" bold>
            내가 찜한 책
          </Text>
        </Flex>

        <Spacing size={60} />
        <ResultCount resultCount={wishlist.length} message={'찜한 책'} />

        {wishlist.length > 0 ? (
          <BookList books={wishlist} hasNextPage={false} />
        ) : (
          <EmptyState message="찜한 책이 없습니다." />
        )}
      </MainContainer>
    </>
  )
}

export default WishlistPage
