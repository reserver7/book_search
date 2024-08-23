import { BookType } from '@/models/Book'
import styled from '@emotion/styled'
import React, { useCallback, useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { searchQueryState } from '../../atoms/searchQueryState'
import BasicBookView from './BasicBookView'
import DetailedBookView from './DetailedBookView'

const AccordionContainer = styled.div<{ isOpen: boolean }>`
  overflow: hidden;
  transition:
    max-height 0.3s ease-out,
    opacity 0.3s ease-out;
  max-height: ${({ isOpen }) => (isOpen ? '500px' : '0')};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
`

const MemoizedBasicBookView = React.memo(BasicBookView)
const MemoizedDetailedBookView = React.memo(DetailedBookView)

function BookItem({ book }: { book: BookType }) {
  const [isDetailsOpen, setIsDetailsOpen] = useState<boolean>(false)
  const searchQuery = useRecoilValue(searchQueryState)

  useEffect(() => {
    setIsDetailsOpen(false)
  }, [searchQuery])

  const toggleDetails = useCallback(() => {
    setIsDetailsOpen((prev) => !prev)
  }, [])

  return (
    <>
      {!isDetailsOpen && (
        <MemoizedBasicBookView book={book} onToggleDetails={toggleDetails} />
      )}
      <AccordionContainer isOpen={isDetailsOpen}>
        <MemoizedDetailedBookView book={book} onToggleDetails={toggleDetails} />
      </AccordionContainer>
    </>
  )
}

export default React.memo(BookItem)
