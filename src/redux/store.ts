import { configureStore } from '@reduxjs/toolkit'
import { reliefGoodsApi } from './features/relief-goods/reliefGoodsApi'


export const store = configureStore({
      reducer: {
            [reliefGoodsApi.reducerPath]: reliefGoodsApi.reducer
      },
      middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(reliefGoodsApi.middleware)
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch