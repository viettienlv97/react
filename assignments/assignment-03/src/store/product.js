import { createSlice } from '@reduxjs/toolkit'

const initialState = { product: null }

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProduct(state, { payload }) {
      state.product = payload
    },
    removeProduct(state) {
      state.product = null
    },
  },
})

export const productActions = productSlice.actions
