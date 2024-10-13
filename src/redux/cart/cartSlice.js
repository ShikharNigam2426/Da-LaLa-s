import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    basket: [],
};

export const CartSlice = createSlice({
    name: 'cart',
    initialState, 
    reducers: {
        addItem: (state, action) => {
            state.basket = [...state.basket, action.payload.product];
            // console.log(action.payload.product); // For debugging
        },
        removeFromCart: (state, action) => {
            const index = state.basket.findIndex((item) => item.id === action.payload);
            if (index !== -1) {
                state.basket.splice(index, 1);
            }
        }
    }
});

export const { addItem, removeFromCart } = CartSlice.actions;
export default CartSlice.reducer;
