import styled from '@emotion/styled'
import { colors } from '../../styles/colorPalette'

const LoadingDots = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50px;
  margin-top: 8px;

  & div {
    width: 8px;
    height: 8px;
    background-color: ${colors.blue};
    border-radius: 50%;
    margin: 4px 0;
    animation: blink 1.4s infinite both;
  }

  & div:nth-of-type(1) {
    animation-delay: 0s;
  }
  & div:nth-of-type(2) {
    animation-delay: 0.2s;
  }
  & div:nth-of-type(3) {
    animation-delay: 0.4s;
  }

  @keyframes blink {
    0%,
    20%,
    50%,
    80%,
    100% {
      opacity: 1;
    }
    40% {
      opacity: 0.3;
    }
    60% {
      opacity: 0.3;
    }
  }
`

const LoadingScroll = () => (
  <LoadingDots>
    <div></div>
    <div></div>
    <div></div>
  </LoadingDots>
)

export default LoadingScroll
