import React from 'react'

const ShippingContent = ({title, desc, className}) => {
  return (
    <div className={className}>
      <h5>
        <i>{title}</i>
      </h5>
      <span className='text-gray lato-light-italic'>{desc}</span>
    </div>
  )
}

export default ShippingContent
