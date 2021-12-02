// api-fetching하는 custom hook의 개념
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }), // base주소
    endpoints: (builder) => ({
        getProducts: builder.query({ // custom-hook
            query: () => `products`,
        })
    })
})

export const { useGetProductsQuery } = productsApi; // custom hook to call api serivce => line  7의 getPRoducts
//useGetProductsQuery => hook name