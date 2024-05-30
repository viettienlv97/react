import React from 'react'
import styles from './Cart.module.css'
import { useState, useContext } from 'react'
import CartContext from '../../store/cart-context'

const Form = ({ setShowCart }) => {
  const { clearCart } = useContext(CartContext)
  const [invalid, setInvalid] = useState({
    name: false,
    street: false,
    code: false,
    city: false,
    codeLength: false
  })

  const handleValid = (e) => {
    const value = e.target.value
    const inputName = e.target.name
    if (!value) {
      setInvalid((prev) => ({ ...prev, [inputName]: true }))
      return
    }

    setInvalid((prev) => ({ ...prev, [inputName]: false }))
  }

  const handleCheckCode = (e) => {
    const value = e.target.value
    const inputName = e.target.name
    if (inputName === 'code' && value.length < 5) {
      setInvalid((prev) => ({ ...prev, codeLength: true }))
      return
    }
    setInvalid((prev) => ({ ...prev, codeLength: false, code: false }))
  }

  const checkValidSubmit = (data) => {
    let isPass = true
    for (let i in data) {
      if (!data[i]) {
        setInvalid((prev) => ({ ...prev, [i]: true }))
        isPass = false
      }
    }
    if (data.code.length < 5) {
      setInvalid((prev) => ({ ...prev, codeLength: true }))
      isPass = false
    }
    return isPass
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const fd = new FormData(e.target)
    const data = Object.fromEntries(fd.entries())
    if (!checkValidSubmit(data)) return

    clearCart()
    setShowCart(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles['form-group']}>
        <label htmlFor='name-input'>
          Your Name{' '}
          {invalid.name && <small className='invalid'>Must not empty</small>}
        </label>
        <input
          type='text'
          id='name-input'
          name='name'
          className={`${invalid.name ? 'invalid' : ''}`}
          onChange={handleValid}
          onBlur={handleValid}
        />
      </div>
      <div className={styles['form-group']}>
        <label htmlFor='street-input'>
          Street{' '}
          {invalid.street && <small className='invalid'>Must not empty</small>}
        </label>
        <input
          type='text'
          id='street-input'
          name='street'
          className={`${invalid.street ? 'invalid' : ''}`}
          onChange={handleValid}
          onBlur={handleValid}
        />
      </div>
      <div className={styles['form-group']}>
        <label htmlFor='code-input'>
          Postal code{' '}
          {(invalid.code || invalid.codeLength) && (
            <small className='invalid'>
              {invalid.code
                ? 'Must not empty'
                : invalid.codeLength
                ? 'Must at least 5 characters'
                : ''}
            </small>
          )}
        </label>
        <input
          type='text'
          id='code-input'
          name='code'
          className={`${invalid.code || invalid.codeLength ? 'invalid' : ''}`}
          onChange={handleValid}
          onBlur={(e) => {
            handleCheckCode(e)

            handleValid(e)
          }}
        />
      </div>
      <div className={styles['form-group']}>
        <label htmlFor='city-input'>
          City{' '}
          {invalid.city && <small className='invalid'>Must not empty</small>}
        </label>
        <input
          type='text'
          id='city-input'
          name='city'
          className={`${invalid.city ? 'invalid' : ''}`}
          onChange={handleValid}
          onBlur={handleValid}
        />
      </div>
      <div className={styles.actions}>
        <button
          type='button'
          onClick={() => setShowCart(false)}
        >
          Close
        </button>
        <button>Confirm</button>
      </div>
    </form>
  )
}

export default Form
