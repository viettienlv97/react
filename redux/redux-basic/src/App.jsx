import React from 'react'
import Counter from './components/Counter'
import Auth from './components/Auth'
import Header from './components/Header'
import UserProfile from './components/UserProfile'
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
