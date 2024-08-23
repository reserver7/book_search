import styled from '@emotion/styled'
import { TiDelete } from 'react-icons/ti'

const SearchHistoryItemContainer = styled.li`
  padding: 10px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  max-width: 100%;
  line-height: normal;

  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex-grow: 1;
    margin-right: 10px;
  }

  &:hover {
    background-color: #e9ecef;
  }
`

const DeleteButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SearchHistoryItem = ({
  item,
  onDelete,
  onClick,
}: {
  item: string
  onDelete: () => void
  onClick: () => void
}) => {
  return (
    <SearchHistoryItemContainer onClick={onClick}>
      <span>{item}</span>
      <DeleteButton
        onClick={(e) => {
          e.stopPropagation()
          onDelete()
        }}
      >
        <TiDelete />
      </DeleteButton>
    </SearchHistoryItemContainer>
  )
}

export default SearchHistoryItem
