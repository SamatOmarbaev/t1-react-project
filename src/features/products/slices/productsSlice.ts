import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IProductCard } from "../../../helpers/types/types";

interface InitialStateProps {
    products?: IProductCard[];
    searchQuery: string;
    productId: number | string | null;
}

const initialState: InitialStateProps = {
    products: [],
    searchQuery: '',
    productId: null
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts(state, action) {
            state.products = action.payload;
        },
        setSearchQuery(state, action: PayloadAction<string>) {
            state.searchQuery = action.payload;
        },
        setProductById(state, action: PayloadAction<number | string | null>) {
            state.productId = action.payload;
        },
    },
});

export const { setProducts, setSearchQuery, setProductById } = productsSlice.actions;

export default productsSlice.reducer;