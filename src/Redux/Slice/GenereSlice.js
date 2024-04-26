import { createSlice } from "@reduxjs/toolkit";
import { initialGenereList } from "../initialStates";

const genereList = createSlice({
    name:"genereList",
    initialState:initialGenereList,
    reducers:{
        addGenereList:(state,action)=>action.payload
    }
})
export const {addGenereList} = genereList.actions;
const generesReducer = genereList.reducer;
export default generesReducer;