import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialStateProps {
    searchQuery: string;
}

const initialState: InitialStateProps = {
    searchQuery: '',
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setSearchQuery(state, action: PayloadAction<string>) {
            state.searchQuery = action.payload;
        },
    },
});

export const { setSearchQuery } = productsSlice.actions;

export const productsReducer = productsSlice.reducer;