import { createSlice } from '@reduxjs/toolkit';

const initialState = {
        items : [{
                image : 'https://i.pinimg.com/736x/95/9d/07/959d075f1d43263e53f1bbff0dee4baf.jpg',
                title:'Pizza',
                price:'120'
            }]
}

export const itemsSlice = createSlice({
    name:'item',
    initialState,
    reducers : {
        addItems : (state,action) => {
           const items = {
                image : action.payload.image,
                title: action.payload.title,
                price:action.payload.price,
                category:action.payload.category
            }
            state.items.push(items);
        }
    }
})


export const { addItems } = itemsSlice.actions;
export default itemsSlice.reducer;