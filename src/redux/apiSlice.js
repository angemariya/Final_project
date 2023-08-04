import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'categories',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://gardenshop.onrender.com/'}), 
    endpoints: (builder) => ({
        getAllCategories: builder.query({
            query: () => 'categories/all'
        }),
        getOneCategory: builder.query({
            query: (id) => `categories/${id}`, 
        }),
        getOneProductByCategory: builder.query({
            query: (id) => `products/${id}`,
        }),
        getAllSale: builder.query({
            query: () => 'products/all',
        }),
        getAllProducts: builder.query({
            query: () => 'products/all',
        }),
        sendData: builder.mutation({
            query: (data) => ({
                url: 'sale/send',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: data
            }),
        }),
    }),
});

export const {
    useGetAllCategoriesQuery,
    useGetOneCategoryQuery,
    useGetOneProductByCategoryQuery,
    useGetAllSaleQuery,
    useGetAllProductsQuery,
    useSendDataMutation } = apiSlice;