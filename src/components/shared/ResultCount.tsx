import styled from '@emotion/styled'
import Flex from './Flex'
import Spacing from './Spacing'
import Text from './Text'

const ResultCountContainer = styled(Flex)`
  margin-top: 8px;
  color: #333;
  width: 100%;
  margin-left: 85px;
`

const ResultCount = ({
  resultCount,
  message,
}: {
  resultCount: number
  message: string
}) => {
  return (
    <ResultCountContainer>
      <Text typography="t6">{message} </Text>
      <Spacing size={14} direction="horizontal" />
      <Text typography="t6">총</Text>
      <Spacing size={2} direction="horizontal" />
      <Text typography="t6" color="blue">
        {resultCount}
      </Text>
      <Text typography="t6">건</Text>
    </ResultCountContainer>
  )
}

export default ResultCount
