import styled from '@emotion/styled'
import { useRecoilValue } from 'recoil'
import { searchResultCountState } from '../../atoms/searchQueryState'
import Flex from '../shared/Flex'
import Spacing from '../shared/Spacing'
import Text from '../shared/Text'

const ResultCountContainer = styled(Flex)`
  margin-top: 8px;
  color: #333;
  width: 100%;
  margin-left: 85px;
`

const ResultCount = () => {
  const resultCount = useRecoilValue(searchResultCountState)

  return (
    <ResultCountContainer>
      <Text typography="t6">도서 검색 결과 </Text>
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
