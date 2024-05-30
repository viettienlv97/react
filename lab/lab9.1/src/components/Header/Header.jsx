import React from 'react'
import styles from './Header.module.css'
import CartContext from '../../store/cart-context'
import { useContext } from 'react'

const Header = ({ setShowCart }) => {
  const { items } = useContext(CartContext)
  console.log(items)

  let quantity = 0
  items.forEach((item) => {
    quantity += item.amount
  })

  return (
    <header>
      <div className='mb-5'>
        <div className={styles.bgRedBrown}>
          <div className='container'>
            <div className='d-flex justify-content-between align-items-center'>
              <h3 className='fw-bold text-light my-2'>React meal</h3>
              <div
                role='button'
                className={`${styles.bgBrown} px-3 py-2 rounded-5 d-flex align-items-center text-light`}
                onClick={() => setShowCart(true)}
              >
                <div>
                  <span className='fa fa-shopping-cart me-2'></span>
                  <span>Your cart</span>
                </div>
                <span className={`${styles.bgOrange} rounded-5 px-2 ms-3`}>
                  {quantity}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bgImg}></div>
      </div>
    </header>
  )
}

export default Header
