import { Routes, BrowserRouter, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SearchPage from './pages/SearchPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* tạo 2 route để chuyển đổi giữa HomePage và SearchPage */}
        <Route
          path='/'
          element={<HomePage />}
        />
        <Route
          path='/search'
          element={<SearchPage />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
