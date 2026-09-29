import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    order : []
}

const orderSlicer = createSlice({
    name:'order',
    initialState,
    reducers:{
        getOrder : (state,action) => {
            state.order.push(action.payload);
        }
    }
})

export const { getOrder } = orderSlicer.actions;

export default orderSlicer.reducer;