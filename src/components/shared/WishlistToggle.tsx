import { BookType } from '@/models/Book'
import styled from '@emotion/styled'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import { useRecoilState } from 'recoil'
import { wishlistState } from '../../atoms/searchQueryState'

const WishlistButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: transparent;
  border: none;
  cursor: pointer;
`

type WishlistToggleProps = {
  book: BookType
}

export function WishlistToggle({ book }: WishlistToggleProps) {
  const [wishlist, setWishlist] = useRecoilState(wishlistState)
  const isWished = wishlist.some((wishlistBook) => wishlistBook.id === book.id)

  const handleWishlistToggle = () => {
    setWishlist((prevWishlist) =>
      isWished
        ? prevWishlist.filter((wishlistBook) => wishlistBook.id !== book.id)
        : [...prevWishlist, book],
    )
  }

  return (
    <WishlistButton onClick={handleWishlistToggle}>
      {isWished ? <MdFavorite color="red" /> : <MdFavoriteBorder />}
    </WishlistButton>
  )
}
