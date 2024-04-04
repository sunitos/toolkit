import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        counterData: 11,
    },
    reducers: {
        plus: (state) => {
            state.counterData += 1;
        },
        minus: (state) => {
            state.counterData -= 1;
        },
        reset: (state) => {
            state.counterData = 0;
        },
    },
});


export const { plus, minus, reset } = counterSlice.actions;
export default counterSlice.reducer;
