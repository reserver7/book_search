import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { colors } from '../../styles/colorPalette'

const ScrollButton = styled.button<{ isVisible: boolean }>`
  position: fixed;
  bottom: 40px;
  right: 40px;
  background-color: ${colors.lightGray};
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
  z-index: 1000;
`

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <ScrollButton isVisible={isVisible} onClick={scrollToTop}>
      ↑
    </ScrollButton>
  )
}
