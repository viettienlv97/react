import Header from './components/Header/Header'
import MealsSummary from './components/Meals/MealsSummary'
import AvailableMeals from './components/Meals/AvailableMeals'
import CartProvider from './store/CartProvider'
import Cart from './components/Cart/Cart'
import { useState } from 'react'

function App() {
  const [showCart, setShowCart] = useState(false)
  return (
    <CartProvider>
      {showCart && <Cart setShowCart={setShowCart} />}
      <Header setShowCart={setShowCart} />
      <MealsSummary />
      <AvailableMeals />
    </CartProvider>
  )
}

export default App
