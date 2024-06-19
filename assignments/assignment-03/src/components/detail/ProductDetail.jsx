import React, { useEffect, useState } from 'react'
import Detail from './Detail'
import Description from './Description'
import useGetProducts from '../../hooks/useGetProducts'
import RelatedProduct from './RelatedProduct'

const imgs = ['img-1', 'img-2', 'img-3', 'img-4']

const ProductDetail = ({ productId }) => {
  const { products, loading } = useGetProducts()
  const [selectedImg, setSelectedImg] = useState(null)
  const [product, setProduct] = useState(null)
  const [relatedProducts, setRelatedProducts] = useState([])

  useEffect(() => {
    if (products) {
      setProduct(products.find((prod) => prod._id.$oid === productId))
    }
    if (product) {
      setRelatedProducts(
        products.filter(
          (prod) =>
            prod.category === product.category &&
            prod._id.$oid !== product._id.$oid
        )
      )
      setSelectedImg(product.img1)
    }
  }, [product, products, productId])

  return (
    <section id='product-detail'>
      <div className='container my-5'>
        {loading && <p>Loading ...</p>}
        {!loading && !product && <p>Cannot find this product!</p>}
        {!loading && product && (
          <>
            <div className='row'>
              <div className='col-1'>
                {product &&
                  imgs.map((key, index) => {
                    return (
                      <div
                        className='mb-3'
                        key={key}
                        onClick={() =>
                          setSelectedImg(product[`img${index + 1}`])
                        }
                      >
                        <img
                          src={product[`img${index + 1}`]}
                          alt=''
                          className='w-100'
                        />
                      </div>
                    )
                  })}
              </div>
              {selectedImg && (
                <div className='col-5'>
                  <img
                    src={selectedImg}
                    alt=''
                    className='w-100'
                  />
                </div>
              )}
              <div className='col-6'>
                <Detail product={product} />
              </div>
            </div>
            <Description product={product} />
            <RelatedProduct list={relatedProducts} />
          </>
        )}
      </div>
    </section>
  )
}

export default ProductDetail
