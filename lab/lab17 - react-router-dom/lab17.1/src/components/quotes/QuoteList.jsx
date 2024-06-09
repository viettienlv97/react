import {Fragment, useState} from 'react'

import QuoteItem from './QuoteItem'
import classes from './QuoteList.module.css'
import {useNavigate, useSearchParams} from 'react-router-dom'

const QuoteList = (props) => {
  const navigate = useNavigate()
  const [toggleSort, setToggleSort] = useState(0)
  const [searchParams] = useSearchParams()
  const sort = searchParams.get('sort')
  console.log(sort)

  const toggleSortHandler = () => {
    if (toggleSort === 0 || toggleSort === 1) {
      setToggleSort(2)
      navigate('/quotes?sort=desc')
    } else {
      setToggleSort(1)
      navigate('/quotes?sort=asc')
    }
  }

  const sortedQuotes =
    sort !== 'desc' ? [...props.quotes].reverse() : props.quotes

  return (
    <Fragment>
      <button onClick={toggleSortHandler}>
        {toggleSort !== 2 ? 'Sort Descending' : 'Sort Ascending'}
      </button>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.content}
          />
        ))}
      </ul>
    </Fragment>
  )
}

export default QuoteList
