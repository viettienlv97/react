import { createSlice } from '@reduxjs/toolkit'

const initialState = { products: [] }

export const productsListSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProductsList(state, { payload }) {
      state.products = payload
    }
  }
})

export const productsListActions = productsListSlice.actions
