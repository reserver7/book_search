import styled from '@emotion/styled'
import { useRef, useState } from 'react'
import { MdOutlineSearch } from 'react-icons/md'
import useClickOutside from '../../hooks/useClickOutside'
import { useSearchBar } from '../../hooks/useSearchBar'
import Button from '../shared/Button'
import Flex from '../shared/Flex'
import Input from '../shared/Input'
import Spacing from '../shared/Spacing'
import SearchHistoryDropdown from './SearchHistoryDropdown'
import SearchPopup from './SearchPopup'

const SearchBarContainer = styled(Flex)`
  margin-top: 8px;
  position: relative;
`

const InputContainer = styled.div<{ hasHistory: boolean; isFocused: boolean }>`
  position: relative;
  width: 350px;
  box-sizing: border-box;
  border-radius: ${({ hasHistory, isFocused }) =>
    hasHistory && isFocused ? '12px 12px 0 0' : '12px'};
  background-color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  z-index: 1;
  border: 1px solid transparent;
`

const SearchIcon = styled(MdOutlineSearch)`
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
`

const StyledInput = styled(Input)`
  padding-left: 40px;
  padding-right: 10px;
  height: 50px;
  border: none;
  background-color: transparent;
  font-size: 16px;
  color: #333;
  border-radius: 12px;
`

const PopupContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, 8px);
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`

const SearchBar = () => {
  const {
    searchTerm,
    isFocused,
    searchHistory,
    inputContainerRef,
    handleInputChange,
    handleKeyPress,
    handleInputClick,
    handleHistoryItemClick,
    handleDeleteHistoryItem,
    resetSearchTerm,
  } = useSearchBar()

  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const popupRef = useRef<HTMLDivElement>(null)

  useClickOutside(popupRef, () => setIsPopupOpen(false))

  return (
    <SearchBarContainer justify="center" align="center">
      <InputContainer
        ref={inputContainerRef}
        hasHistory={searchHistory.length > 0}
        isFocused={isFocused}
      >
        <SearchIcon />
        <StyledInput
          placeholder="검색어를 입력하세요"
          value={searchTerm}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          onClick={handleInputClick}
        />
        {isFocused && searchHistory.length > 0 && (
          <SearchHistoryDropdown
            items={searchHistory}
            onItemClick={handleHistoryItemClick}
            onDeleteItem={handleDeleteHistoryItem}
          />
        )}
      </InputContainer>
      <Spacing size={10} direction="horizontal" />
      <Button
        weak={true}
        color="gray"
        size="medium"
        onClick={() => setIsPopupOpen(!isPopupOpen)}
      >
        상세검색
      </Button>
      {isPopupOpen && (
        <PopupContainer ref={popupRef}>
          <SearchPopup
            onClose={() => setIsPopupOpen(false)}
            resetSearchTerm={resetSearchTerm}
          />
        </PopupContainer>
      )}
    </SearchBarContainer>
  )
}

export default SearchBar
