import { combineReducers } from "@reduxjs/toolkit";

import { categoriesApi, categoriesReducer } from "@/features/categories";
import { productsApi, productsReducer } from "@/features/products";

export const rootReducers = combineReducers({
    categories: categoriesReducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    products: productsReducer,
    [productsApi.reducerPath]: productsApi.reducer,
})