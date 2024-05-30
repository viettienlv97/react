import React from 'react'

const OptionInput = ({ title, type, id }) => {
  return (
    <div className='row mx-0 mb-3'>
      <label
        className='col-8 text-gray'
        htmlFor={id}
      >
        {title}
      </label>
      <input
        className='col-4 fw-600'
        type={type}
        id={id}
        min={0}
      />
    </div>
  )
}

export default OptionInput
