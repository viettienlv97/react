import { Fragment } from 'react'
import { Link } from 'react-router-dom'

import QuoteItem from './QuoteItem'
import classes from './QuoteList.module.css'

const QuoteList = (props) => {
  return (
    <Fragment>
      <h1>All Quotes Page</h1>
      <ul className={classes.list}>
        {props.quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
      <Link to={'new-quote'}>To New Quote</Link>
    </Fragment>
  )
}

export default QuoteList
