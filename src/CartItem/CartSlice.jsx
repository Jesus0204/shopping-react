import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [], // Initialize items as an empty array
        totalItems: 0,
    },
    reducers: {
        addItem: (state, action) => {
            const { name, image, cost } = action.payload;
            const existingItem = state.items.find(item => item.name === name);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.items.push({ name, image, cost, quantity: 1 });
            }
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.name !== action.payload);
        },
        updateQuantity: (state, action) => {
            const { name, quantity } = action.payload;
            const existingItem = state.items.find(item => item.name === name);
            if (existingItem) {
                existingItem.quantity = quantity;
            }
        },
        updateTotalItems: (state, action) => {
            const { newQuantityChange } = action.payload;
            state.totalItems = state.totalItems + newQuantityChange;
        },
    },
});

export const { addItem, removeItem, updateQuantity, updateTotalItems } = CartSlice.actions;

export default CartSlice.reducer;