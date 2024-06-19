import React from 'react'
import BannerShop from '../components/banner/BannerShop'
import Cart from '../components/cart/Cart'

const CartPage = () => {
  return (
    <main>
      <BannerShop title={'CART'} />
      <Cart />
    </main>
  )
}

export default CartPage
