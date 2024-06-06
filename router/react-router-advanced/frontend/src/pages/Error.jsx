import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()
  console.log(error)
  return (
    <>
      <h1>An Error occured!</h1>
      <p>{error.data?.message}</p>
    </>
  )
}

export default ErrorPage
