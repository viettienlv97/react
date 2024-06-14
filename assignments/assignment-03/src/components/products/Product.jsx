import React, { useState } from 'react'
import { formattedPrice } from '../../utils/helper'

const Product = ({ product, openModal }) => {
  return (
    <div className='col-3' role='button' onClick={() => openModal(product)}>
      <img src={product.img1} alt='' className='w-100 product-img' />
      <div className='text-center mt-4'>
        <h6 className='fw-bold'>
          <i>{product.name}</i>
        </h6>
        <span className='text-gray fs-7 lato-light-italic'>
          {formattedPrice(product.price)} VND
        </span>
      </div>
    </div>
  )
}

export default Product
