import React, { memo } from 'react'

const Counter = memo((props) => {
  console.log(props)
  return <div>{props.counter}</div>
})

export default Counter
