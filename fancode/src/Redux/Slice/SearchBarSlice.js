import { createSlice } from "@reduxjs/toolkit";

const searchBarSlice = createSlice({
    name:"searchBarValue",
    initialState:"",
    reducers:{
        searchQuery:(state,action)=>action.payload
    }
})
export const {searchQuery} = searchBarSlice.actions;
const searchBarReducer = searchBarSlice.reducer;
export default searchBarReducer;