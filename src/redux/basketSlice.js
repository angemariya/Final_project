import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    totalPrice: 0,
}

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addItemToBasket: (state, action) => {
            state.products = [...state.products, action.payload]
        },
        cleanBasket: (state) => {
            state.products = []
        }
    }
})

export const { addItemToBasket, cleanBasket } = basketSlice.actions;
export const basketReducer = basketSlice.reducer;