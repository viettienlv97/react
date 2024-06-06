import React from 'react'
import QuoteList from '../components/quotes/QuoteList'

export const quotes = [
  {
    id: 'q1',
    author: 'Viet Tien',
    text: '123'
  },
  {
    id: 'q2',
    author: 'Viet Tien',
    text: '123'
  },
  {
    id: 'q3',
    author: 'Viet Tien',
    text: '123'
  },
  {
    id: 'q4',
    author: 'Viet Tien',
    text: '123'
  }
]

const QuotesPage = () => {
  return (
    <>
      <QuoteList quotes={quotes} />
    </>
  )
}

export default QuotesPage
