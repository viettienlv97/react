import React from 'react'

const DestinationInput = () => {
  return (
    <div className='mb-3 d-flex flex-column'>
      <label
        htmlFor='destination-input'
        className='fs-5 mb-2'
      >
        Destination
      </label>
      <input
        type='text'
        className='p-2 fw-600'
        id='destination-input'
      />
    </div>
  )
}

export default DestinationInput
