import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/products" }), // 여기 엔드포인트 fetch 의 엔드포인트?
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => "products",
        })
    })
})

export const { useGetProductsQuery } = productApi;
//useGetProductsQuery => hook name