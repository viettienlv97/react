import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/quotes')
  }, [])

  return <h1>Home Page</h1>
}

export default HomePage
