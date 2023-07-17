import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    totalPrice: 0,
    totalItems: 0,
}

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addItemToBasket: (state, action) => {
            const productById = state.products.find(el => el.id === action.payload.id)
            productById
                ? productById.quantity++
                : state.products.push({ ...action.payload, quantity: 1 })
        },
        deleteItem: (state, action) => {
            state.products = state.products.filter(el => el.id !== action.payload.id)
        },
        countTotalPrice: (state) => {
            state.totalPrice = state.products.reduce((total, el) => el.price * el.quantity + total, 0)
        },
        countTotalItems: (state) => { state.totalItems = state.products.length },
        decreaseItemCount: (state, action) => {
            const productById = state.products.find(({ id }) => id === action.payload.id);
            const index = state.products.findIndex(el => el.id === action.payload.id);
            productById.quantity > 1 ? productById.quantity-- : state.products.splice(index, 1)

        }
    }
})

export const {
    addItemToBasket,
    countTotalItems,
    decreaseItemCount,
    deleteItem,
    countTotalPrice } = basketSlice.actions;
export const basketReducer = basketSlice.reducer;