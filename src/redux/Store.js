import { configureStore } from '@reduxjs/toolkit';
import ReducerSlice from './reducers/ReducerSlice';

const Store = configureStore({
    reducer:{
        doList: ReducerSlice
    }
});

export default Store;