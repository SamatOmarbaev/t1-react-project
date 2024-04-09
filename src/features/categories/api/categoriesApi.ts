import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IProductCard, Products } from "@/helpers/types";

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
    getProductsByCategories: builder.query({
      queryFn: async (categories: string[], _, __, baseQuery) => {
        const result = await Promise.all(categories.map(category => baseQuery(`/category/${category}`)))
        return {data: (result.flatMap(res => res.data.products) as IProductCard[]).sort((a, b) => b.rating - a.rating).slice(0, 3)}
      }
    })
  }),
});

export const { useGetCategoriesQuery, useGetProductsByCategoryQuery, useGetProductsByCategoriesQuery } = categoriesApi;