import React, { useState } from 'react'
import CartContextProvider, {
  CartContext
} from './src/store/shopping-cart-context'

const App = () => {
  return (
    <CartContextProvider>
      <Header />
      <Cart />
    </CartContextProvider>
  )
}

export default App
