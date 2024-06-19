import { createSlice } from '@reduxjs/toolkit'
import { getItem, removeItem, setItem } from '../utils/storage'

const initialState = {
  products: [],
  total: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: getItem('cart', initialState),
  reducers: {
    addToCart: (state, { payload }) => {
      if (!payload || !payload._id?.$oid) return state

      state.products.push(payload)
      state.total += payload.quantity * payload.price
      setItem('cart', state)
      return state
    },

    updateCart: (state, { payload }) => {
      if (!payload || !payload._id?.$oid) return state

      const product = getProductInCart(payload, state)
      if (product) {
        product.quantity += payload.quantity
      }
      state.total += payload.quantity * payload.price
      setItem('cart', state)
      return state
    },

    increaseQuantity: (state, { payload }) => {
      if (!payload || !payload._id?.$oid) return state

      const product = getProductInCart(payload, state)
      if (product) {
        product.quantity++
      }
      state.total = Number(state.total) + Number(payload.price)
      setItem('cart', state)
      return state
    },

    decreaseQuantity: (state, { payload }) => {
      if (!payload || !payload._id?.$oid) return state

      const product = getProductInCart(payload, state)
      if (product) {
        product.quantity--
      }
      state.total = Number(state.total) - Number(payload.price)
      setItem('cart', state)
      return state
    },

    deleteCart: () => {
      removeItem('cart')
      return initialState
    },

    removeProduct: (state, { payload }) => {
      if (!payload || !payload._id?.$oid) return state

      const prodIndex = state.products.findIndex(
        (prod) => prod._id.$oid === payload._id.$oid
      )
      if (prodIndex === -1) return

      state.total -=
        state.products[prodIndex].quantity * state.products[prodIndex].price

      state.products.splice(prodIndex, 1)

      setItem('cart', state)
      return state
    }
  }
})

export const cartActions = cartSlice.actions
export const cartReducer = cartSlice.reducer

export const getProductInCart = (product, cart) => {
  if (!product || !cart || !cart.products?.length) return null
  return cart.products.find((prod) => prod._id.$oid === product._id.$oid)
}
