import { CustomSelectProps } from '../../models/Select'
import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import Flex from './Flex'
import Text from './Text'

const SelectContainer = styled.div`
  position: relative;
  width: 100%;
`

const DropdownButton = styled.button`
  width: 100%;
  height: 48px;
  padding: 0 16px;
  text-align: left;
  background-color: white;
  border: none;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:focus {
    outline: none;
  }
`

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 0;
  list-style: none;
  max-height: 200px;
  overflow-y: auto;
  z-index: 1000;
`

const DropdownListItem = styled.li`
  padding: 8px 16px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`

const Select = ({
  label,
  options,
  placeholder,
  value,
  onSelect,
  ...props
}: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selectedLabel, setSelectedLabel] = useState<string | undefined>(
    placeholder,
  )

  useEffect(() => {
    const selectedOption = options.find((option) => option.value === value)
    setSelectedLabel(selectedOption?.label || placeholder)
  }, [value, options, placeholder])

  const handleSelect = (optionValue: string | number) => {
    const selectedOption = options.find(
      (option) => option.value === optionValue,
    )
    setSelectedLabel(selectedOption?.label || placeholder)
    setIsOpen(false)
    onSelect(optionValue)
  }

  return (
    <Flex direction="column">
      {label && (
        <Text
          typography="t7"
          color="black"
          display="inline-block"
          style={{ marginBottom: 6 }}
        >
          {label}
        </Text>
      )}
      <SelectContainer {...props}>
        <DropdownButton onClick={() => setIsOpen(!isOpen)}>
          {selectedLabel}
        </DropdownButton>
        {isOpen && (
          <DropdownList>
            {options.map((option) => (
              <DropdownListItem
                key={option.value}
                onClick={() => handleSelect(option.value)}
              >
                {option.label}
              </DropdownListItem>
            ))}
          </DropdownList>
        )}
      </SelectContainer>
    </Flex>
  )
}

export default Select
