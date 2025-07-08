import { configureStore } from "@reduxjs/toolkit"
import { baseApi } from "./api/baseApi";
import cartReducer from "../Redux/features/cart/cartSlice"


const store = configureStore({
    reducer: {
        cart: cartReducer,
        [baseApi.reducerPath]: baseApi.reducer

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),
})

export default store;