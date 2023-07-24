import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import { basketSlice } from "./basketSlice";

export const store = configureStore({
    reducer: {
        [basketSlice.name]: basketSlice.reducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})