import { createSlice } from '@reduxjs/toolkit'
import { getItem } from '../utils/storage'

const authSlice = createSlice({
  name: 'auth',
  initialState: getItem('user', null),
  reducers: {
    setAuth: (state, actions) => actions.payload,
    clearAuth: () => null
  }
})

export const authActions = authSlice.actions
export const authReducer = authSlice.reducer
