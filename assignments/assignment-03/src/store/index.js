import { configureStore } from '@reduxjs/toolkit'
import { productSlice } from './product'
import { productsListSlice } from './ProductsList'
import { authReducer } from './auth'
import { cartReducer } from './cart'

const store = configureStore({
  reducer: {
    product: productSlice.reducer,
    productsList: productsListSlice.reducer,
    auth: authReducer,
    cart: cartReducer
  }
})

export default store
