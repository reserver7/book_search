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
