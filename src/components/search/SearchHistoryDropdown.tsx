import styled from '@emotion/styled'
import { colors } from '../../styles/colorPalette'
import SearchHistoryItem from './SearchHistoryItem'
import { generateUUID } from '../../utils/uuidUtils'

const DropdownContainer = styled.ul`
  width: 352px;
  box-sizing: border-box;
  max-height: 200px;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: ${colors.white};
  border: 1px solid #ececec;
  border-radius: 0 0 12px 12px;
  position: absolute;
  top: 48px;
  left: -2px;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-top: none;
`

const SearchHistoryDropdown = ({
  items,
  onItemClick,
  onDeleteItem,
}: {
  items: string[]
  onItemClick: (item: string) => void
  onDeleteItem: (item: string) => void
}) => {
  return (
    <DropdownContainer>
      {items.map((item) => (
        <SearchHistoryItem
          key={generateUUID()}
          item={item}
          onClick={() => onItemClick(item)}
          onDelete={() => onDeleteItem(item)}
        />
      ))}
    </DropdownContainer>
  )
}

export default SearchHistoryDropdown
