import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name:'whishlist',
    initialState: [],
    reducers :{
        // add products to whishlist
        addToWhishlist : (state,productByComponentAction)=>{
            state.push(productByComponentAction.payload)
        },
        //  remove products from whishlist,component must pass product id
        removeWhishlistItem : (state,productByComponentAction)=>{
            return state.filter(item=>item.id!=productByComponentAction.payload)
        }
    }
})
export const {addToWhishlist,removeWhishlistItem}= wishlistSlice.actions
export default wishlistSlice.reducer