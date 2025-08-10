import { createSlice } from "@reduxjs/toolkit";
import { element } from "prop-types";
const cart = createSlice({
    name:'cartSlice',
    initialState:{
        items:[],
        count:0,
    },
    reducers:{
        addItems: (state, action) => {
            // Check if item already exists
            const existingItem = state.items.find(item => item.id === action.payload.id);
            
            if (existingItem) {
                // If item exists, just increment quantity
                existingItem.quantity += 1;
            } else {
                // If new item, add with quantity 1
                state.items.push({ ...action.payload, quantity: 1 });
            }
            state.count++;
        },
        IncrementItems: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            
            if (existingItem) {
                existingItem.quantity += 1;
                state.count++;
            }
        },
        DecrementItems: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            
            if (existingItem) {
                if (existingItem.quantity > 1) {
                    existingItem.quantity -= 1;
                } else {
                    // Remove item if quantity becomes 0
                    state.items = state.items.filter(item => item.id !== action.payload.id);
                }
                state.count--;
            }
        }
    }
})

export const {addItems, IncrementItems, DecrementItems} = cart.actions;
export default cart.reducer;