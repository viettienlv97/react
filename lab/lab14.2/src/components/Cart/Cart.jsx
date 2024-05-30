import React from 'react'
import styles from './Cart.module.css'
import { createPortal } from 'react-dom'
import { useContext } from 'react'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'
import Form from './Form'

const Cart = ({ setShowCart }) => {
  const { items, totalAmount } = useContext(CartContext)
  return createPortal(
    <div className={styles.wrapper}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <div className={styles.cartItems}>
          {items.map((item) => {
            return (
              <div key={item.id}>
                <CartItem item={item} />
              </div>
            )
          })}
        </div>
        <div className={styles.total}>
          <div>Total amount</div>
          <div>${totalAmount}</div>
        </div>
        <Form setShowCart={setShowCart} />
        {/* <div className={styles.actions}>
          <button onClick={() => setShowCart(false)}>Close</button>
        </div> */}
      </div>
    </div>,
    document.getElementById('modal')
  )
}

export default Cart
