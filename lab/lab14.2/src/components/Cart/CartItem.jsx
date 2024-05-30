import React from 'react'
import styles from './CartItem.module.css'
import { useContext } from 'react'
import CartContext from '../../store/cart-context'

const CartItem = ({ item }) => {
  const { addItem, removeItem } = useContext(CartContext)
  return (
    <div className={styles.cartItem}>
      <div className='d-flex justify-content-between w-100 align-items-center'>
        <div className='text-start'>
          <h2>{item.name}</h2>
          <span className={styles.price}>${item.price}</span>
          <span className={`ms-3 ${styles.amount}`}>x{item.amount}</span>
        </div>
        <div>
          <button onClick={() => {}}>-</button>
          <button onClick={() => {}}>+</button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
