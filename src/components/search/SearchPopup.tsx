import styled from '@emotion/styled'
import { useRef, useState } from 'react'
import { MdClose } from 'react-icons/md'
import useClickOutside from '../../hooks/useClickOutside'
import { useSearchStateManagement } from '../../hooks/useSearchStateManagement'
import { SearchOption } from '../../models/Select'
import { colors } from '../../styles/colorPalette'
import Button from '../shared/Button'
import Flex from '../shared/Flex'
import Input from '../shared/Input'
import Select from '../shared/Select'

const PopupContainer = styled(Flex)`
  position: absolute;
  top: 100%;
  margin-top: 8px;
  width: 360px;
  background-color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  z-index: 1000;
  box-sizing: border-box;
`

const Header = styled(Flex)`
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 16px;
  padding: 8px 8px 0 0;
`

const CloseIcon = styled(MdClose)`
  cursor: pointer;
  width: 20px;
  height: 20px;
`

const DropdownContainer = styled(Flex)`
  width: 100%;
  margin-bottom: 16px;
  justify-content: space-between;
`

const SearchButton = styled(Button)`
  width: 100%;
`

type SearchPopupProps = {
  onClose: () => void
  resetSearchTerm: () => void // Add this prop
}

function SearchPopup({ onClose, resetSearchTerm }: SearchPopupProps) {
  const { handleSearch } = useSearchStateManagement()
  const [selectedValue, setSelectedValue] = useState<string | number>(
    SearchOption[0].value,
  )
  const [searchInput, setSearchInput] = useState<string>('')

  const popupRef = useRef<HTMLDivElement>(null)
  useClickOutside(popupRef, onClose)

  const handleSelectChange = (value: string | number) => {
    setSelectedValue(value)
  }

  const handleSearchClick = () => {
    handleSearch(searchInput, selectedValue.toString())
    resetSearchTerm() // Reset the main search term input
    onClose()
  }

  return (
    <PopupContainer direction="column" ref={popupRef}>
      <Header>
        <CloseIcon size={24} onClick={onClose} />
      </Header>
      <Flex direction="column" style={{ padding: '16px' }}>
        <DropdownContainer>
          <div style={{ width: '30%' }}>
            <Select
              defaultValue={SearchOption[0].value}
              options={SearchOption}
              placeholder="제목"
              value={selectedValue}
              onSelect={handleSelectChange}
            />
          </div>
          <Input
            bottomBorderColor={colors.blue}
            placeholderColor={colors.gray500}
            placeholder="검색어 입력"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            style={{ width: '65%', textIndent: '8px' }}
          />
        </DropdownContainer>
        <SearchButton color="primary" size="large" onClick={handleSearchClick}>
          검색하기
        </SearchButton>
      </Flex>
    </PopupContainer>
  )
}

export default SearchPopup
