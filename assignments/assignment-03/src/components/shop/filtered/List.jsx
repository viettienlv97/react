import React from 'react'
import Product from '../../products/Product'
import { useNavigate } from 'react-router-dom'

const List = ({ list }) => {
  const navigate = useNavigate()

  const handleNavigateToProduct = (product) => {
    const productId = product._id.$oid
    navigate(`/detail/${productId}`)
  }

  return (
    <div className='row'>
      {list.map((item) => {
        return (
          <Product
            key={item._id.$oid}
            product={item}
            className={'col-4'}
            selectProduct={handleNavigateToProduct}
          />
        )
      })}
    </div>
  )
}

export default List
