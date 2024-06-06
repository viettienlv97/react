import React from 'react'
import { useParams } from 'react-router-dom'
import { quotes } from './Quotes'

const QuoteDetail = () => {
  const { id } = useParams()
  const quote = quotes.find((q) => q.id === id)
  return (
    <>
      <h1>Quote Detail Page</h1>
      <p>{quote.id}</p>
      <p>{quote.author}</p>
      <p>{quote.text}</p>
    </>
  )
}

export default QuoteDetail
