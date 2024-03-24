import { configureStore } from '@reduxjs/toolkit'

import { rootReducers } from './rootReducer'
import { categoriesApi } from '../features/categories/api/categoriesApi'
import { productsApi } from '../features/products/api/productsApi'

export const store = configureStore({
    reducer: rootReducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            categoriesApi.middleware,
            productsApi.middleware
        ),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch