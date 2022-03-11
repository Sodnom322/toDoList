import { configureStore } from '@reduxjs/toolkit'
import filmReducer from './films'

export const store = configureStore({
  reducer: {
      films: filmReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch