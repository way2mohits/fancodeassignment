import { createSlice } from "@reduxjs/toolkit";
import { initialMovieState } from "../initialStates";

const movieSlice = createSlice({
  name: "movieList",
  initialState: initialMovieState,
  reducers: {
    addMoviesAtBottom: (state, action) => {
        console.log(action.payload);
        return {...state, ...action.payload}
    },
    addMoviesAtTop: (state, action) => { 
        console.log(action.payload);
        return {...action.payload, ...state}
    },
  },
});
export const { addMoviesAtBottom, addMoviesAtTop } = movieSlice.actions;
const movieReducer = movieSlice.reducer;
export default movieReducer;
