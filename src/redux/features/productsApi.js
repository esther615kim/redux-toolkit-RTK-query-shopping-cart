import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
    reducerPath: "productsApi", // or products?
    baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/products" }), // 여기 엔드포인트 fetch 의 엔드포인트?
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => `products`,
        })
    })
})

export const { useGetProductsQuery } = productsApi; // custom hook to call api serivce
//useGetProductsQuery => hook name