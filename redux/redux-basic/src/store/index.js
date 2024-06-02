import { createStore } from 'redux'
import { createSlice, configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './counter'
import { authSlice } from './auth'

// const initialCounterState = {
//   counter: 0,
//   showCounter: true
// }

// const counterSlice = createSlice({
//   name: 'counter',
//   initialState: initialCounterState,
//   reducers: {
//     increment(state) {
//       state.counter++
//     },
//     decrement(state) {
//       state.counter--
//     },
//     increase(state, { payload }) {
//       state.counter += payload
//     },
//     toggleCounter(state) {
//       state.showCounter = !state.showCounter
//     }
//   }
// })

// const initialAuthState = {
//   isAuthenticated: false
// }

// const authSlide = createSlice({
//   name: 'authentication',
//   initialState: initialAuthState,
//   reducers: {
//     login(state) {
//       state.isAuthenticated = true
//     },
//     logout(state) {
//       state.isAuthenticated = false
//     }
//   }
// })

// const counterReducer = (state = initialState, action) => {
//   if (action.type === 'increment') {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter
//     }
//   }

//   if (action.type === 'increase') {
//     return {
//       counter: state.counter + action.value,

//       showCounter: state.showCounter
//     }
//   }

//   if (action.type === 'decrement') {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter
//     }
//   }

//   if (action.type === 'toggle') {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter
//     }
//   }
//   return state
// }

// const store = createStore(counterSlice.reducer)
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer }
})

// export const counterActions = counterSlice.actions
// export const authActions = authSlice.actions

export default store
