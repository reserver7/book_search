import styled, { CSSObject } from '@emotion/styled'
import { CSSProperties } from 'react'

type FlexProps = {
  align?: CSSProperties['alignItems']
  justify?: CSSProperties['justifyContent']
  direction?: CSSProperties['flexDirection']
  customCss?: CSSObject
}

const Flex = styled.div<FlexProps>(
  ({ align, justify, direction, customCss }) => ({
    display: 'flex',
    alignItems: align,
    justifyContent: justify,
    flexDirection: direction,
    ...customCss,
  }),
)

export default Flex
