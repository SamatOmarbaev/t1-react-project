import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IProductCard, Products } from "../../../helpers/types/types";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/products" }),
  endpoints: (builder) => ({
    getProducts: builder.query<Products, {limit?: number; skip?: number; search?: string;}>({
      query: ({limit = 9, skip, search}) => {
        const params = new URLSearchParams();
        if (skip) params.append('skip', skip.toString());
        const query = `${search ? `/search?q=${search}${limit ? '&' : ''}` : '?'}${limit ? `limit=${limit}` : ''}${params.toString()}`
        
        return {
          url: query
        }
      }
    }),
    getProductById: builder.query<IProductCard, {id?: string}>({
      query: ({id}) => `/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi;