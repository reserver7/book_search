import { BookType } from '@/models/Book'
import styled from '@emotion/styled'
import { TiArrowSortedUp } from 'react-icons/ti'
import Button from '../shared/Button'
import Flex from '../shared/Flex'
import Spacing from '../shared/Spacing'
import Text from '../shared/Text'
import { WishlistToggle } from '../shared/WishlistToggle'

const Container = styled(Flex)`
  width: 1000px;
  padding: 16px;
  border-bottom: 1px solid #ececec;
  background-color: #fff;
`

const Details = styled(Flex)`
  flex-direction: column;
  width: 100%;
`

const Title = styled(Text)`
  font-size: 18px;
  font-weight: 600;
  color: #333;
`

const Author = styled(Text)`
  font-size: 14px;
  color: #666;
`

const Content = styled(Text)`
  font-size: 14px;
  color: #333;
  line-height: 2;
  width: 60%;
`

const PriceDetails = styled(Flex)`
  flex-direction: column;
  justify-content: space-between;
`

const OriginalPriceText = styled(Text)`
  font-size: 14px;
  color: #666;
  text-decoration: line-through;
`

const SalePriceText = styled(Text)`
  font-size: 16px;
  font-weight: 700;
  color: #d32f2f;
`

const BookImageContainer = styled.div`
  position: relative;
  width: 210px;
  height: 280px;
  margin-right: 16px;
`

const BookImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

function DetailedBookView({
  book,
  onToggleDetails,
}: {
  book: BookType
  onToggleDetails: () => void
}) {
  const imageSrc = book.thumbnail ? book.thumbnail : '/images/empty_img.png'

  const handlePurchaseClick = () => {
    window.open(book.url, '_blank')
  }

  return (
    <Container>
      <BookImageContainer>
        <BookImage src={imageSrc} alt={book.title} />
        <WishlistToggle book={book} />
      </BookImageContainer>
      <Spacing direction="horizontal" size={16} />
      <Details>
        <Flex direction="row" justify="space-between" style={{ width: '100%' }}>
          <Flex align="center">
            <Title>{book.title}</Title>
            <Spacing direction="horizontal" size={10} />
            <Author>{book.authors}</Author>
          </Flex>
          <Button color="lightgray" size="medium" onClick={onToggleDetails}>
            상세보기
            <TiArrowSortedUp />
          </Button>
        </Flex>
        <Spacing size={20} />
        <Text typography="t6">책 소개</Text>
        <Spacing size={20} />
        <Flex justify="space-between" style={{ width: '100%' }}>
          <Content typography="t6">{book.contents}</Content>
          <Spacing direction="horizontal" size={16} />
          <PriceDetails>
            <Flex direction="column" align="flex-end">
              <OriginalPriceText>
                정가: {book.price.toLocaleString()}원
              </OriginalPriceText>
              <Spacing size={8} />
              <SalePriceText>
                할인가: {book.sale_price?.toLocaleString() || 'N/A'}원
              </SalePriceText>
            </Flex>

            <Flex>
              <Button
                color="primary"
                size="large"
                onClick={handlePurchaseClick}
              >
                구매하기
              </Button>
            </Flex>
          </PriceDetails>
        </Flex>
      </Details>
    </Container>
  )
}

export default DetailedBookView
