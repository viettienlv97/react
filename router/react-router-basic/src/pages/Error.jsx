import React from 'react'
import MainNavigation from '../components/MainNavigation'

const ErrorPage = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>An Error occurred! 404</h1>
        <p>Could not find this page!</p>
      </main>
    </>
  )
}

export default ErrorPage
