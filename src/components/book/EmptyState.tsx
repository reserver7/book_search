import styled from '@emotion/styled'
import Flex from '../shared/Flex'
import Text from '../shared/Text'

const EmptyStateContainer = styled(Flex)`
  margin-top: 50px;
  text-align: center;
  color: #666666;
  flex-direction: column;
  align-items: center;
`

const EmptyStateImage = styled.img`
  width: 100px;
  height: auto;
  margin-bottom: 16px;
`

const EmptyState = ({ message }: { message: string }) => (
  <EmptyStateContainer>
    <EmptyStateImage src="/images/empty_book.png" alt="empty book" />
    <Text typography="t5" color="gray">
      {message}
    </Text>
  </EmptyStateContainer>
)

export default EmptyState
