import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            // console.log(current(state));
            state.items = state.items.filter(item => item?.card?.info?.id !== action.payload?.card?.info?.id);
        },
        clearCart: (state) => {
            // state.items.length = 0;
            //above and below are same 
            return { items : []};
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
