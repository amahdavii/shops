import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
// import { CartsApi } from '../services/cartService'
// import { LoginsApi } from '../services/loginService'
import { LocationService } from '../services/location'


export const store = configureStore({
  reducer: {
    // [LoginsApi.reducerPath]: LoginsApi.reducer,
    // [CartsApi.reducerPath]: CartsApi.reducer,
    [LocationService.reducerPath]: LocationService.reducer,

    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([LocationService.middleware]),
})


const createStore = () =>store

export const wrapper = createWrapper(createStore)