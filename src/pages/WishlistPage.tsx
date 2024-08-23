import styled from '@emotion/styled'
import { useRecoilValue } from 'recoil'
import { wishlistState } from '../atoms/searchQueryState'
import BasicBookView from '../components/book/BasicBookView'
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

const WishlistHeader = styled(Flex)`
  width: 100%;
  justify-content: space-between;
  margin-bottom: 16px;
`

const WishlistContainer = styled(Flex)`
  width: 100%;
  flex-direction: column;
  gap: 16px;
`

const WishlistPage = () => {
  const wishlist = useRecoilValue(wishlistState)

  return (
    <>
      <MainContainer>
        <Flex direction="column">
          <Text typography="t4" bold>
            내가 찜한 책
          </Text>
        </Flex>

        <WishlistHeader>
          <Text typography="t5" bold>
            찜한 책 총 {wishlist.length}권
          </Text>
        </WishlistHeader>

        <WishlistContainer>
          {wishlist.length > 0 ? (
            wishlist.map((book) => (
              <BasicBookView
                key={book.id}
                book={book}
                onToggleDetails={() => {}}
              />
            ))
          ) : (
            <Text typography="t6">찜한 책이 없습니다.</Text>
          )}
        </WishlistContainer>
      </MainContainer>
    </>
  )
}

export default WishlistPage
