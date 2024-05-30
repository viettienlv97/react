import { useContext } from 'react'
import { CartContext } from '../store/shopping-cart-context'

const Cart = () => {
  const { items, addItemToCart } = useContext(CartContext)
  console.log(items)

  return <div>Cart</div>
}

export default Cart
