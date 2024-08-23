import { css } from '@emotion/react'
import { colors } from './colorPalette'

export const buttonColorMap = {
  primary: css`
    background-color: ${colors.blue};
    color: ${colors.white};
    &:active {
      background-color: ${colors.blue980};
    }
  `,
  success: css`
    background-color: ${colors.teal900};
    color: ${colors.white};
    &:active {
      background-color: ${colors.teal900};
      opacity: 0.9;
    }
  `,
  error: css`
    background-color: ${colors.red};
    color: ${colors.white};
    &:active {
      background-color: ${colors.red100};
    }
  `,
  gray: css`
    background-color: ${colors.grayFont};
    color: ${colors.white};
    &:active {
      background-color: ${colors.gray200};
    }
  `,
  lightgray: css`
    background-color: ${colors.lightGray};
    color: ${colors.gray600};
    &:active {
      background-color: ${colors.gray100};
    }
  `,
}

export const buttonWeakMap = {
  primary: css`
    background-color: ${colors.white};
    color: ${colors.blue};
    border: 1px solid ${colors.blue};
    &:active {
      background-color: ${colors.blue980};
    }
  `,
  success: css`
    background-color: ${colors.white};
    color: ${colors.teal900};
    border: 1px solid ${colors.teal900};
    &:active {
      background-color: ${colors.teal900};
      opacity: 0.1;
    }
  `,
  error: css`
    background-color: ${colors.white};
    color: ${colors.red};
    border: 1px solid ${colors.red};
    &:active {
      background-color: ${colors.red50};
    }
  `,
  gray: css`
    background-color: ${colors.white};
    color: ${colors.grayFont};
    border: 1px solid ${colors.grayFont};
    &:active {
      background-color: ${colors.gray100};
    }
  `,
  lightgray: css`
    background-color: ${colors.white};
    color: ${colors.lightGray};
    border: 1px solid ${colors.lightGray};
    &:active {
      background-color: ${colors.gray100};
    }
  `,
}

export const buttonSizeMap = {
  small: css`
    font-size: 13px;
    padding: 8px 9px;
  `,
  medium: css`
    font-size: 15px;
    padding: 10px 15px;
  `,
  large: css`
    font-size: 16px;
    padding: 15px 90px;
  `,
}

export type ButtonColor = keyof typeof buttonColorMap
export type ButtonSize = keyof typeof buttonSizeMap
