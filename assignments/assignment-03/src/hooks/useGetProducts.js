import React, { useEffect } from 'react'
import useFetch from './useFetch'
import { apiListUrl } from '../utils/apiUrl'
import { useDispatch, useSelector } from 'react-redux'
import { productsListActions } from '../store/ProductsList'

const useGetProducts = () => {
  const products = useSelector((state) => state.productsList.products)
  const dispatch = useDispatch()
  const { data, loading, error, fetchData } = useFetch(apiListUrl, [])

  useEffect(() => {
    !products?.length &&
      (data?.length
        ? dispatch(productsListActions.setProductsList(data))
        : fetchData())
  }, [data, products])

  return { products, error, loading }
}

export default useGetProducts
