import { createSlice } from '@reduxjs/toolkit';

const initialState = {
     product : []
}

export const itemsSlice = createSlice({
    name:'item',
    initialState,
    reducers : {
        addItems : (state,action) => {
            console.log(action.payload)
           const items = {
                image : action.payload.image,
                title: action.payload.title,
                price:action.payload.price,
                category:action.payload.category
            }
            state.product.push(items);
        },
        getProduct : (state,action) => {
            state.product = action.payload;
        }
    }
})


export const { addItems ,getProduct } = itemsSlice.actions;
export default itemsSlice.reducer;