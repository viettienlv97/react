import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import Product from './Product'
import ProductModal from '../modal/ProductModal'
import ModalDetail from './ModalDetail'
import { useDispatch } from 'react-redux'
import { productActions } from '../../store/product.js'
import { listUrl } from '../../utils/apiUrl.js'

const Products = () => {
  const { data, error, loading, fetchData } = useFetch(listUrl, [])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!data || !data.length) {
      fetchData()
    }
  }, [])
  const openModal = (product) => {
    console.log('open')
    dispatch(productActions.setProduct(product))
    setIsModalOpen(true)
  }

  const closeModal = () => {
    console.log('close')
    dispatch(productActions.removeProduct())
    setIsModalOpen(false)
  }

  return (
    <section id='products'>
      <div className='container mt-5'>
        <div className='mb-4'>
          <h6 className='text-gray fs-7 lato-light-italic'>
            MADE THE HARD DAY
          </h6>
          <h5>
            <i>TOP TRENDING PRODUCTS</i>
          </h5>
        </div>
        {loading && <p>Loading...</p>}
        {!loading && data && data.length && (
          <>
            <div className='row g-5'>
              {data.map((product) => {
                return (
                  <Product
                    key={product._id.$oid}
                    product={product}
                    openModal={openModal}
                  />
                )
              })}
            </div>

            <ProductModal isOpen={isModalOpen} onClose={closeModal}>
              <ModalDetail onClose={closeModal} />
            </ProductModal>
          </>
        )}
        {!loading && error && <p>Error: {error.message}</p>}
      </div>
    </section>
  )
}

export default Products
