import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'

const HomePage = () => {
  const navigate = useNavigate()
  const navigateHandler = () => {
    navigate('/products')
  }
  return (
    <>
      <h1>HomePage</h1>
      <button onClick={navigateHandler}>Navigate</button>
    </>
  )
}

export default HomePage
