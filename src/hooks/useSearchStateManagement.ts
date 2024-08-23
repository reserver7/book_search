import { useRecoilState } from 'recoil'
import { searchQueryState, searchTargetState } from '../atoms/searchQueryState'

export const useSearchStateManagement = () => {
  const [searchQuery, setSearchQuery] = useRecoilState(searchQueryState)
  const [searchTarget, setSearchTarget] = useRecoilState(searchTargetState)

  const handleSearch = (query: string, target: string) => {
    if (target) {
      // When detailed search is triggered, reset main search
      setSearchQuery('')
    } else {
      // When main search is triggered, reset detailed search
      setSearchTarget('')
    }
    setSearchQuery(query)
    setSearchTarget(target)
  }

  const resetSearch = () => {
    setSearchQuery('')
    setSearchTarget('')
  }

  return {
    searchQuery,
    searchTarget,
    handleSearch,
    resetSearch,
    setSearchQuery, // Allow external control to reset search input
  }
}
