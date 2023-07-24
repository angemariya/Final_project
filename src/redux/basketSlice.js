import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    totalPrice: 0,
    totalItems: 0,
}

const calculateTotal = (state) =>
    state.products.reduce((acc, el) => el.price * el.quantity + acc, 0);
  


export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addItemToBasket: (state, action) => {
            state.products = state.products.find(({ id }) => id === action.payload.id) === undefined
                ? [...state.products, { ...action.payload, quantity: 1 }]
                : [...state.products.map((el) => ({ ...el, quantity: el.quantity + 1 }))];
            state.totalPrice = calculateTotal(state);
        },
        deleteItem: (state, action) => {
            state.products = [...state.products.filter(el => el.id !== action.payload.id)];
            state.totalPrice = calculateTotal(state);
        },
        addQuantityToItem: (state, action) => {
            state.products = [
                ...state.products.map((el) =>
                    el.id === action.payload.id
                        ? { ...el, quantity: el.quantity + 1 }
                        : el),
            ];
            state.totalPrice = calculateTotal(state);
        },
        deleteQuantityToItem: (state, action) => {
            state.products = [
                ...state.products.map((el) =>
                    el.id !== action.payload.id || el.quantity === 1
                        ? el
                        : { ...el, quantity: el.quantity - 1 }
                ),
            ];
            state.totalPrice = calculateTotal(state);
        },
    }
});

export const {
    addItemToBasket,
    addQuantityToItem,
    deleteItem,
    deleteQuantityToItem } = basketSlice.actions;
export const basketReducer = basketSlice.reducer;