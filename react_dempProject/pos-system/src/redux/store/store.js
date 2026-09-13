import { configureStore } from '@reduxjs/toolkit';
import itemReducer from '../slicer/itemsSlicer.js';
import categoryReducer from '../slicer/categorySlicer.js';

 const store = configureStore({
    reducer:{
        items:itemReducer,
        categorys:categoryReducer
    },
});

export default store;