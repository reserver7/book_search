import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Header from './components/Header'
import MainPage from './pages/MainPage'
import WishlistPage from './pages/WishlistPage'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
      </Routes>
    </Router>
  )
}

export default App
