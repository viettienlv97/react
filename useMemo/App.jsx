import React, { useState, useMemo } from 'react'
const isPrime = (number) => {
  // calculating number
  return number
}

const App = () => {
  const [count, setCount] = useState(0)

  // sử dụng useMemo để ngăn việc chạy lại function mỗi khi re-render component
  //
  const calcTotal = useMemo(() => isPrime(count), [count])

  return (
    <div>
      <div>{count}</div>
      <div>{calcTotal}</div>
    </div>
  )
}

export default App
