import { configureStore } from '@reduxjs/toolkit';
import itemReducer from '../slicer/itemsSlicer.js';
import categoryReducer from '../slicer/categorySlicer.js';
import tableSlicer from '../slicer/tableSlicer.js';

 const store = configureStore({
    reducer:{
        items:itemReducer,
        categorys:categoryReducer,
        tables:tableSlicer
    },
});

export default store;