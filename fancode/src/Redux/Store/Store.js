import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../Slice/MovieSlice";
import tabReducer from "../Slice/TabSlice";
import generesReducer from "../Slice/GenereSlice";
import searchBarReducer from "../Slice/SearchBarSlice";

const movieStore = configureStore({
    reducer:{
        movieList:movieReducer,
        tab:tabReducer,
        genereList:generesReducer,
        searchBarValue:searchBarReducer
    }
})
export default movieStore;