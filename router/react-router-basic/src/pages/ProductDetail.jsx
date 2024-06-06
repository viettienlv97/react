import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const ProductDetail = () => {
  const { productId } = useParams()
  console.log(productId)
  return (
    <>
      <h1>Product Detail!</h1>
      <p>{productId}</p>
      <button>
        <Link
          to='..'
          // to là để quay lại parent path,
          //lựa chọn relative là path hoặc là route để chọn giữa path hoặc về thẳng route cha
          relative='path' // default: route
        >
          Back
        </Link>
      </button>
    </>
  )
}

export default ProductDetail
