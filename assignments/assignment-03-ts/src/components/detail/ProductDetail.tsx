import { FC, useEffect, useState } from 'react'
import Detail from './Detail'
import Description from './Description'
import useGetProducts from '../../hooks/useGetProducts'
import RelatedProduct from './RelatedProduct'
import { Product } from '../../store/interface'

const imgs = ['img1', 'img2', 'img3', 'img4']

type Props = {
  productId: string
}

const ProductDetail: FC<Props> = ({ productId }) => {
  const { products, loading } = useGetProducts()
  const [selectedImg, setSelectedImg] = useState<string | undefined>('')
  const [product, setProduct] = useState<Product | undefined>(undefined)
  const [relatedProducts, setRelatedProducts] = useState<Array<Product>>([])

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
                    const imgKey = `img${index + 1}` as keyof Product
                    const imgSrc = product[imgKey]
                    let src: string
                    if (typeof imgSrc === 'string') src = imgSrc
                    else src = ''
                    return (
                      <div
                        className='mb-3'
                        key={key}
                        onClick={() => {
                          const imgKey = `img${index + 1}` as keyof Product
                          const imgSrc = product[imgKey]
                          if (typeof imgSrc === 'string') setSelectedImg(imgSrc)
                          else setSelectedImg(undefined)
                        }}
                      >
                        <img
                          src={src}
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
