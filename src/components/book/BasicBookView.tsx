import { BookType } from '@/models/Book'
import styled from '@emotion/styled'
import { TiArrowSortedDown } from 'react-icons/ti'
import Button from '../shared/Button'
import Flex from '../shared/Flex'
import Text from '../shared/Text'
import { WishlistToggle } from '../shared/WishlistToggle'

const BookItemContainer = styled(Flex)<{ isHighlighted?: boolean }>`
  width: 1000px;
  padding: 16px;
  border-bottom: 1px solid #ececec;
  align-items: center;
  overflow-x: hidden;
  background-color: ${({ isHighlighted }) =>
    isHighlighted ? '#f5f7ff' : '#fff'};
  position: relative;
`

const BookImageContainer = styled.div`
  position: relative;
  width: 60px;
  height: 80px;
  margin-right: 16px;
`

const BookImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const BookDetails = styled(Flex)`
  width: 700px;
  align-items: center;
  justify-content: space-between;
`

const BookTitle = styled(Text)`
  font-size: 16px;
  font-weight: 600;
  color: #333333;
  margin-right: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const BookAuthor = styled(Text)`
  font-size: 14px;
  color: #666666;
  margin-right: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const BookPrice = styled(Text)`
  font-size: 14px;
  font-weight: 700;
  color: #0070f3;
  white-space: nowrap;
  margin-left: 16px;
`

const ButtonGroup = styled(Flex)`
  margin-left: 35px;
  align-items: center;
  gap: 8px;
`

export default function BasicBookView({
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
    <BookItemContainer isHighlighted={book.isHighlighted}>
      <BookImageContainer>
        <BookImage src={imageSrc} alt={book.title} />
        <WishlistToggle book={book} />
      </BookImageContainer>
      <BookDetails>
        <Flex direction="row" align="flex-start">
          <BookTitle>{book.title}</BookTitle>
          <BookAuthor>{book.authors}</BookAuthor>
        </Flex>
        <BookPrice>{book.price.toLocaleString()}원</BookPrice>
      </BookDetails>
      <ButtonGroup>
        <Button color="primary" size="medium" onClick={handlePurchaseClick}>
          구매하기
        </Button>
        <Button color="lightgray" size="medium" onClick={onToggleDetails}>
          <Flex justify="center" align="center">
            상세보기
            <TiArrowSortedDown />
          </Flex>
        </Button>
      </ButtonGroup>
    </BookItemContainer>
  )
}
