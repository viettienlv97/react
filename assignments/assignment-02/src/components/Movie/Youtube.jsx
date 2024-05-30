import React from 'react'

const Youtube = ({ ytKey }) => {
  console.log(ytKey)
  return (
    <iframe
      src={`https://www.youtube.com/embed/${ytKey}`}
      width='100%'
      height={'500'}
    ></iframe>
  )
}

export default Youtube
