import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IProductCard, Products } from "@/helpers/types";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/products" }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getProducts: builder.query<Products, {limit?: number; skip?: number; search?: string;}>({
      query: ({limit = 9, skip, search}) => {
        const query = `${!search ? '?' : ''}limit=${limit}&skip=${skip}`;
        return search ? `/search?q=${search}` : query
      }
    }),
    getProductById: builder.query<IProductCard, {id?: string}>({
      query: ({id}) => `/${id}`,
    }),
    changeProductById: builder.mutation<IProductCard, {id?: string | number; updatedProduct: IProductCard}>({
      query: ({id, updatedProduct}) => {
        const {brand, category, description, discountPercentage, price, rating, stock} = updatedProduct;
        return {
          url: `/${id}`,
          method: 'PUT',
          body: { brand, category, description, discountPercentage, price, rating, stock },
          headers: {
            'Content-Type': 'application/json'
          }
        }
      }
    })
  }),
  keepUnusedDataFor: 5 * 60 * 1000 
});

export const { useGetProductsQuery, useGetProductByIdQuery, useChangeProductByIdMutation } = productsApi;