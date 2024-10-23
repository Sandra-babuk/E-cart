import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import whishlistSlice from "./slices/whishlistSlice";
import cartSlice from "./slices/cartSlice";

const cartStore = configureStore({
    reducer : {
        productReducer : productSlice,
        whishlistReducer : whishlistSlice,
        cartReducer : cartSlice
    }
})

export default cartStore