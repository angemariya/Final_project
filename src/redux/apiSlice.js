import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'categories',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:3333/'}), 
    endpoints: (builder) => ({
        getAllCategories: builder.query({
            query: () => 'categories/all'
        }),
        getOneCategory: builder.query({
            query: (id) => `categories/${id}`, 
        })
    })
})

export const { useGetAllCategoriesQuery, useGetOneCategoryQuery } = apiSlice;