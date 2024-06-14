import React, { useEffect } from 'react'
import Categories from '../categories/Categories'
import SearchProduct from './search/SearchProduct'
import FilterProduct from './filter/FilterProduct'
import { listUrl } from '../../utils/apiUrl'
import useFetch from '../../hooks/useFetch'

const ProductsList = () => {
  const { data, error, loading, fetchData } = useFetch(listUrl)

  useEffect(() => {
    if (!data) {
      fetchData()
    }
  }, [])

  console.log(data)

  return (
    <section id='products-shop'>
      <div className='container my-5'>
        <div className='row'>
          <div className='col-3 ps-0'>
            <Categories />
          </div>
          <div className='col-9 pe-0'>
            <div className='d-flex justify-content-between align-items-center'>
              <SearchProduct />
              <FilterProduct />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductsList
