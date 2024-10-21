import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart/cartSlice.js';
import categoryReducer from './category/categorySlice.js'

const store = configureStore({
    reducer: {
        cart: cartReducer,
        category: categoryReducer,
    },
})

export default store;