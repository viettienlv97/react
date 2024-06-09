import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {quotes} from './Quotes'
import {getQuote} from '../db/api'
import useFetch from '../components/hooks/useFetch'
import HighlightedQuote from '../components/quotes/HighlightedQuote'

const QuoteDetail = () => {
  const {id} = useParams()
  const {data, fetchData} = useFetch(getQuote)
  useEffect(() => {
    if (!data) {
      fetchData(id)
    }
  }, [data])
  //const quote = quotes.find((q) => q.id === id)
  return (
    <>{data && <HighlightedQuote text={data.content} author={data.author} />}</>
  )
}

export default QuoteDetail
