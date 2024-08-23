import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { colors } from '../styles/colorPalette'

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  background-color: #ffffff;
  height: 60px;
  border-bottom: 2px solid #ececec;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`

const Logo = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #333333;
`

const Nav = styled.nav`
  display: flex;
  gap: 32px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 768px) {
    position: static;
    transform: none;
    justify-content: center;
    width: 100%;
  }
`

const NavLink = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  color: #333333;
  text-decoration: none;
  transition:
    color 0.3s ease,
    border-bottom-color 0.3s ease;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom-color: ${colors.blue};
  }
`

const Header = () => (
  <HeaderContainer>
    <Logo>CERTICOS BOOKS</Logo>
    <Nav>
      <NavLink to="/">도서 검색</NavLink>
      <NavLink to="/wishlist">내가 찜한 책</NavLink>
    </Nav>
  </HeaderContainer>
)

export default Header
