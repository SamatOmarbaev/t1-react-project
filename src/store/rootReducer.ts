import { combineReducers } from "@reduxjs/toolkit";

import categoriesReducer from '../features/categories/categoriesSlice/categoriesSlice'
import productsReducer from '../features/products/slices/productsSlice'
import { categoriesApi } from "../features/categories/api/categoriesApi";
import { productsApi } from "../features/products/api/productsApi";

export const rootReducers = combineReducers({
    categories: categoriesReducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    products: productsReducer,
    [productsApi.reducerPath]: productsApi.reducer,
})