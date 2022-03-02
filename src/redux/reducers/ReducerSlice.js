import { createSlice } from "@reduxjs/toolkit";

const ReducerSlice = createSlice({
    name:'toDoList',
    initialState:{
        list:[],
        loadingState:1
    },
    reducers:{
        loading:( state ) =>{
            state.loadingState = 0;
        },
        addDoing:( state, action ) => {
            state.list.push({ 
                title: action.payload.title, 
                timeNow: action.payload.timeNow, 
                update:action.payload.update 
            })
        },
        editDoing:( state, action ) => {
            state.list.map( el => el.update = 0 ); 
            state.list[action.payload.indx].update = 1;
        },
        uploadDoing:( state, action ) => {
            let title = action.payload.title;
            let update = action.payload.update;
            let timeNow = action.payload.timeNow;
            let indx = action.payload.indx;
            state.list[indx].title = title;
            state.list[indx].update = update;
            state.list[indx].timeNow = timeNow;
        },
        deleteDoing:( state, action ) => {
            state.list = state.list.filter( ( el, indx ) => indx !== action.payload.indx )
        }
    }
});

export const { loading, addDoing, editDoing, uploadDoing, deleteDoing } = ReducerSlice.actions;
export default ReducerSlice.reducer;
