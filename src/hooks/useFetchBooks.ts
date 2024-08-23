import { useInfiniteQuery } from 'react-query'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { fetchBooksFromAPI } from '../api/bookApi'
import {
  searchQueryState,
  searchResultCountState,
  searchTargetState,
} from '../atoms/searchQueryState'

export function useFetchBooks() {
  const query = useRecoilValue(searchQueryState)
  const target = useRecoilValue(searchTargetState)
  const setTotalCount = useSetRecoilState(searchResultCountState)

  return useInfiniteQuery(
    ['books', query, target],
    async ({ pageParam = 1 }) => {
      const { books, totalCount } = await fetchBooksFromAPI(
        query,
        target,
        pageParam,
      )

      if (pageParam === 1) {
        setTotalCount(totalCount)
      }

      return books
    },
    {
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.length === 10 ? allPages.length + 1 : undefined
      },
      enabled: Boolean(query || target),
      refetchOnWindowFocus: false,
    },
  )
}
