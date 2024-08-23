import { HTMLAttributes } from 'react'

export type Option = {
  label: string
  value: string | number
}

export interface CustomSelectProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  label?: string
  options: Option[]
  placeholder?: string
  value?: string | number
  onSelect: (value: string | number) => void
}

export const SearchOption = [
  { label: '제목', value: 'title' },
  { label: '저자명', value: 'person' },
  { label: '출판사', value: 'publisher' },
] as Option[]
