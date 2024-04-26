import { createSlice } from "@reduxjs/toolkit";
import { initialTabState } from "../initialStates";

const tabSlice = createSlice({
    name:"tab",
    initialState:initialTabState,
    reducers:{
        changeTab:(state,action)=>action.payload
    }
})
export const {changeTab} = tabSlice.actions;
const tabReducer = tabSlice.reducer;
export default tabReducer;