import { createSlice } from '@reduxjs/toolkit';

const writeToLS = (arg) =>
    localStorage.setItem('basket', JSON.stringify(arg));

const readFromLS = (key) =>
    JSON.parse(localStorage.getItem(key)) || [];

const initialState = {
    products: readFromLS('basket'),
    totalPrice: 0,
    totalItems: 0,
    totalDiscount: 0,
}

const calculateTotal = (state) =>
    state.products.reduce((acc, el) => (el.discont_price ? el.discont_price : el.price) * el.quantity + acc, 0).toFixed(2);

const calculateTotalItems = (state) =>
    state.products.reduce((acc, el) => el.quantity + acc, 0);

const calculateTotalDiscount = (state) => 
        state.products.reduce((acc, el) => (el.discont_price ? (el.price - el.discont_price) : 0) * el.quantity + acc, 0).toFixed(1);


export const basketSlice = createSlice({
    name: 'basket',
    initialState ,
    reducers: {
        addItemToBasket: (state, action) => {
            const isNew = state.products.find(({ id }) => id === action.payload.id) === undefined;
            state.products = isNew
            ? [...state.products, { ...action.payload, quantity: 1 }]
            : [...state.products.map((el) => el.id === action.payload.id ? { ...el, quantity: el.quantity + 1 } : el)];
            state.totalPrice = calculateTotal(state);
            state.totalDiscount = calculateTotalDiscount(state);
            state.totalItems = calculateTotalItems(state);
            writeToLS(state.products)
        },
        deleteItem: (state, action) => {
            state.products = [...state.products.filter(el => el.id !== action.payload.id)];
            state.totalPrice = calculateTotal(state);
            state.totalDiscount = calculateTotalDiscount(state);
            state.totalItems = calculateTotalItems(state);
            writeToLS(state.products)
        },
        addQuantityToItem: (state, action) => {
            state.products = [
                ...state.products.map((el) =>
                    el.id === action.payload.id
                        ? { ...el, quantity: el.quantity + 1 }
                        : el),
            ];
            state.totalPrice = calculateTotal(state);
            state.totalDiscount = calculateTotalDiscount(state);
            state.totalItems = calculateTotalItems(state);
            writeToLS(state.products)
            
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
            state.totalDiscount = calculateTotalDiscount(state);
            state.totalItems = calculateTotalItems(state);
            writeToLS(state.products)
        },
    }
});

export const {
    addItemToBasket,
    addQuantityToItem,
    deleteItem,
    deleteQuantityToItem } = basketSlice.actions;
export const basketReducer = basketSlice.reducer;