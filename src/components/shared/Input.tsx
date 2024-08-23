import styled from '@emotion/styled'
import { colors } from '../../styles/colorPalette'

type InputProps = {
  bottomBorderColor?: string
  placeholderColor?: string
}

const Input = styled.input<InputProps>`
  padding: 8px 0;
  font-size: 15px;
  height: 48px;
  font-weight: 500;
  border: none;
  border-bottom: 2px solid
    ${({ bottomBorderColor }) => bottomBorderColor || colors.gray};
  width: 100%;
  box-sizing: border-box;

  &::placeholder {
    color: ${({ placeholderColor }) => placeholderColor || colors.gray500};
  }

  &:focus {
    outline: none;
    border-bottom-color: ${({ bottomBorderColor }) =>
      bottomBorderColor || colors.blue};
  }

  &[aria-invalid='true'] {
    border-bottom-color: ${colors.red};
  }
`

export default Input
