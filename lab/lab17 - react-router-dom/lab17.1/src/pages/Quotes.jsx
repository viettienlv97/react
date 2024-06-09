import React, {useEffect} from 'react'
import QuoteList from '../components/quotes/QuoteList'
import useFetch from '../components/hooks/useFetch'
import {getQuotes} from '../db/api'

export const quotes = [
  {
    id: 'q1',
    author: 'Viet Tien',
    text: '123',
  },
  {
    id: 'q2',
    author: 'Viet Tien',
    text: '123',
  },
  {
    id: 'q3',
    author: 'Viet Tien',
    text: '123',
  },
  {
    id: 'q4',
    author: 'Viet Tien',
    text: '123',
  },
]

const QuotesPage = () => {
  const {data, fetchData} = useFetch(getQuotes)
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      <QuoteList quotes={data ?? []} />
    </>
  )
}

export default QuotesPage
