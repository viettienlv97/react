import React, {useEffect, useState} from 'react'
import QuoteForm from '../components/quotes/QuoteForm'
import useFetch from '../components/hooks/useFetch'
import {addQuote} from '../db/api'
import {useNavigate} from 'react-router-dom'

const QuoteNew = () => {
  const navigate = useNavigate()
  const {data, loading, fetchData} = useFetch(addQuote)
  const addQuoteHandler = async ({author, text}) => {
    console.log(author)
    console.log(text)

    fetchData({author, content: text})
  }

  useEffect(() => {
    if (data === true) {
      navigate('/quotes')
    }
  }, [data])

  return (
    <div>
      <QuoteForm isLoading={loading} onAddQuote={addQuoteHandler} />
    </div>
  )
}

export default QuoteNew
