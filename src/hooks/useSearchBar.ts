import { useRef, useState } from 'react'
import { useRecoilState } from 'recoil'
import { searchHistoryState } from '../atoms/searchQueryState'
import useClickOutside from './useClickOutside'
import { useSearchStateManagement } from './useSearchStateManagement'

export const useSearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const { handleSearch } = useSearchStateManagement()
  const [searchHistory, setSearchHistory] = useRecoilState(searchHistoryState)
  const inputContainerRef = useRef<HTMLDivElement>(null)

  const handleSearchAction = () => {
    if (searchTerm.trim()) {
      handleSearch(searchTerm, '') // Perform a main search
      setSearchHistory((prev) =>
        [searchTerm, ...prev.filter((item) => item !== searchTerm)].slice(0, 8),
      )
    } else {
      resetSearchTerm()
    }
    setIsFocused(false)
  }

  const resetSearchTerm = () => {
    setSearchTerm('') // Clear the search input
  }

  useClickOutside(inputContainerRef, () => setIsFocused(false))

  return {
    searchTerm,
    isFocused,
    searchHistory,
    inputContainerRef,
    setSearchTerm,
    resetSearchTerm, // Ensure this function is included in the return
    handleSearch: handleSearchAction,
    handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') handleSearchAction()
    },
    handleInputClick: () => setIsFocused(true),
    handleDeleteHistoryItem: (item: string) =>
      setSearchHistory((prev) =>
        prev.filter((historyItem) => historyItem !== item),
      ),
    handleHistoryItemClick: (item: string) => {
      handleSearch(item, '')
      setSearchTerm(item)
      setIsFocused(false)
    },
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      setSearchTerm(e.target.value),
  }
}
