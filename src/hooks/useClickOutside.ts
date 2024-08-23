import { RefObject, useEffect, useCallback } from 'react'

const useClickOutside = (ref: RefObject<HTMLElement>, handler: () => void) => {
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler()
      }
    },
    [ref, handler],
  )

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [handleClickOutside])

  return null
}

export default useClickOutside
