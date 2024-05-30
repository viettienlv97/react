import React from 'react'
import styles from './MealItemForm.module.css'
import { useContext } from 'react'
import CartContext from '../../../store/cart-context'
import { useRef } from 'react'

const MealItemForm = ({ meal }) => {
  const { addItem } = useContext(CartContext)
  const input = useRef()

  const handleAddItem = () => {
    const item = { ...meal, amount: Number(input.current.value) }
    addItem(item)
  }

  return (
    <div className={styles.form}>
      <div className='mb-3'>
        <label htmlFor=''>Amount</label>
        <input
          ref={input}
          type='number'
          className='ms-2'
          value={1}
          onChange={() => {}}
          style={{ width: '50px' }}
        />
      </div>
      <button onClick={handleAddItem}>+ Add</button>
    </div>
  )
}

export default MealItemForm
