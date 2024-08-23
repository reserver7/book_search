import { BookType } from '@/models/Book'
import { atom } from 'recoil'

export const searchQueryState = atom<string>({
  key: 'searchQueryState',
  default: '',
})

export const searchTargetState = atom<string>({
  key: 'searchTargetState',
  default: 'title',
})

export const searchResultCountState = atom<number>({
  key: 'searchResultCountState',
  default: 0,
})

export const searchHistoryState = atom<string[]>({
  key: 'searchHistoryState',
  default: JSON.parse(localStorage.getItem('searchHistory') || '[]'),
  effects_UNSTABLE: [
    ({ onSet }) => {
      onSet((newValue) => {
        localStorage.setItem('searchHistory', JSON.stringify(newValue))
      })
    },
  ],
})

export const wishlistState = atom<BookType[]>({
  key: 'wishlistState',
  default: JSON.parse(localStorage.getItem('wishlist') || '[]'),
  effects_UNSTABLE: [
    ({ onSet }) => {
      onSet((newValue) => {
        localStorage.setItem('wishlist', JSON.stringify(newValue))
      })
    },
  ],
})
