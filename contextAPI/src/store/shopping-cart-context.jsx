import { act, createContext, useReducer } from 'react'

export const CartContext = createContext({
  items: [],
  addItemToCart: () => {}
})

const shoppingCartReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    // todo
  } else if (action.type === 'UPDATE_ITEM') {
    //todo
  }

  switch (action.type) {
    case 'ADD_ITEM':
      // todo
      break

    case 'UPDATE_ITEM':
      //todo
      break
    default:
      //todo
      break
  }
  return state
}

const CartContextProvider = ({ childen }) => {
  const [shoppingCartState, shoppingCartDispatch] = useReducer(
    shoppingCartReducer,
    { items: [] }
  )

  const handleAddItemToCart = (id) => {
    shoppingCartDispatch({
      type: 'ADD_ITEM',
      payload: id
    })
  }
  const handleUpdateItemToCart = () => {
    shoppingCartDispatch({
      type: 'UPDATE_ITEM'
    })
  }

  const ctxValue = {
    items: shoppingCartState.items,
    addItemToCart: handleAddItemToCart,
    updateItemToCart: handleUpdateItemToCart
  }
  return <CartContext.Provider value={ctxValue}>{childen}</CartContext.Provider>
}

export default CartContextProvider
