import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Products } from "../../../helpers/types/types";

export const categoriesApi = createApi({
  reducerPath: "categoriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/products" }),
  endpoints: (builder) => ({
    getCategories: builder.query<string[], null | string>({
      query: () => "/categories",
      keepUnusedDataFor: 200,
    }),
    getProductsByCategory: builder.query<Products, {category?: string | null; limit?: number; skip?: number;}>({
      query: ({category, limit = 9, skip}) => {
        const query = `?limit=${limit}&skip=${skip}`;
        return category ? `/category/${category}${query}` : query
      },
    }),
  }),
});

export const { useGetCategoriesQuery, useGetProductsByCategoryQuery } = categoriesApi;