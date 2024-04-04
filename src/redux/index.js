import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import todoSilce from "./slices/todoSilce";
import countrySlice from "./slices/countrySlice";
const store = configureStore({
    reducer: {
        counter: counterSlice,
        todos: todoSilce, 
        countries: countrySlice
    },
});

export default store;
