import { useRecoilState } from 'recoil'
import { searchQueryState, searchTargetState } from '../atoms/searchQueryState'
import { useCallback } from 'react'

export const useSearchStateManagement = () => {
  const [searchQuery, setSearchQuery] = useRecoilState(searchQueryState)
  const [searchTarget, setSearchTarget] = useRecoilState(searchTargetState)

  const handleSearch = useCallback(
    (query: string, target: string) => {
      if (target) {
        setSearchQuery('')
      } else {
        setSearchTarget('')
      }
      setSearchQuery(query)
      setSearchTarget(target)
    },
    [setSearchQuery, setSearchTarget],
  )

  const resetSearch = useCallback(() => {
    setSearchQuery('')
    setSearchTarget('')
  }, [setSearchQuery, setSearchTarget])

  return {
    searchQuery,
    searchTarget,
    handleSearch,
    resetSearch,
    setSearchQuery,
  }
}
