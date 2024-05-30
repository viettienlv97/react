import React, { useMemo } from 'react'
import { memo } from 'react'

import classes from './DemoList.module.css'

const sort = (items) => {
  console.log('Items sorted')

  const sorted = items.sort((a, b) => a - b)
  return sorted
}

const DemoList = memo((props) => {
  const { items } = props

  const sortedList = useMemo(() => sort(items), [items])

  console.log('DemoList RUNNING')
  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
})

export default DemoList
