import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    category: "All",
};

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        updateCategory: (state, action) => {
            state.category = action.payload.category;
        }
    }
})

export const { updateCategory } = categorySlice.actions;
export default categorySlice.reducer;