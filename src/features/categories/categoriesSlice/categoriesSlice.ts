import { createSlice } from "@reduxjs/toolkit";

interface InitialStateProps {
  categories: string[];
  selectedCategory: string | null;
}

const initialState: InitialStateProps = {
  categories: [],
  selectedCategory: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories(state, action) {
      state.categories = action.payload;
    },
    setSelectedCategory(state, action) {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setCategories, setSelectedCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;