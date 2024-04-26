import React, { useCallback, useEffect} from "react";
import Header from "./Components/Header/Header";
import TabFilter from "./Components/TabFilters/TabFilter";
import MovieList from "./Components/MovieList/MovieList";
import { fetchGenere } from "./Network/NetworkCalls";
import { useDispatch } from "react-redux";
import { addGenereList } from "./Redux/Slice/GenereSlice";

function App() {
  const dispatch = useDispatch()
  const fetchGenereList = useCallback(async()=>{
    const generesList = await fetchGenere();
    if (generesList != "Error") {
      dispatch(addGenereList(generesList.genres));
    }
  },[])
  useEffect(()=>{
    fetchGenereList()
  },[])
  return (
        <div>
          <Header />
          <TabFilter />
          <MovieList />
        </div>
  );
}

export default App;
