import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import { basketReducer } from "./basketSlice";

export const store = configureStore({
    reducer: {
        basket: basketReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})