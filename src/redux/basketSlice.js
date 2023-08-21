import { createSlice } from '@reduxjs/toolkit';

const writeToLS = (arg) =>
    localStorage.setItem('basket', JSON.stringify(arg));

const readFromLS = (key) =>
    JSON.parse(localStorage.getItem(key)) || [];

const productsFromLS = readFromLS('basket');

const calculateTotal = (state) =>
state.products.reduce((acc, el) => (el.discont_price ? el.discont_price : el.price) * el.quantity + acc, 0).toFixed(2);

const calculateTotalItems = (state) =>
state.products.reduce((acc, el) => el.quantity + acc, 0);

const calculateTotalDiscount = (state) => 
state.products.reduce((acc, el) => (el.discont_price ? (el.price - el.discont_price) : 0) * el.quantity + acc, 0).toFixed(1);


const initialState = {
    products: productsFromLS,
    totalPrice: calculateTotal({products: productsFromLS}),
    totalItems: calculateTotalItems({products: productsFromLS}),
    totalDiscount: calculateTotalDiscount({products: productsFromLS}),
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
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
        clearBasket: (state) => {
            state.products = [];
            state.totalDiscount = 0;
            state.totalItems = 0;
            state.totalPrice = 0;
            writeToLS(state.products);
        }
    }
});

export const {
    addItemToBasket,
    addQuantityToItem,
    deleteItem,
    deleteQuantityToItem,
    clearBasket
} = basketSlice.actions;
export const basketReducer = basketSlice.reducer;