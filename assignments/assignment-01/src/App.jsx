import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Search from './pages/search/Search'
import Detail from './pages/detail/Detail'
import city from '../data/city.json'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/search'
          element={<Search />}
        />
        <Route
          path='/detail'
          element={<Detail />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
