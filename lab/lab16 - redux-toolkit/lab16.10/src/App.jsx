import Header from './components/Header'
import Auth from './components/Auth'
import UserProfile from './components/UserProfile'
import Counter from './components/Counter'
import { useSelector } from 'react-redux'

const App = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated)
  return (
    <>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </>
  )
}

export default App
