import React, {
  useCallback,
  useEffect,
  useRef,
} from "react";
import MovieTile from "./SubComponents/MovieTile";
import "./MovieListStyle.css";
import { fetchMovieList } from "../../Network/NetworkCalls";
import { getFilteredMoviesByYear, getFilteredMoviesFromSearch, getGeneresName } from "../../MovieUtils";
import { useDispatch, useSelector } from "react-redux";
import {
    addMoviesAtBottom,
  addMoviesAtTop,
} from "../../Redux/Slice/MovieSlice";
const MovieList = () => {
  const moviesByYear = useSelector(state=>state.movieList);
  const genereList = useSelector(state=>state.genereList);
  const selectedTab = useSelector(state=>state.tab);
  const searchBarValue = useSelector(state=>state.searchBarValue);
  // const {movieList:moviesByYear,genereList,tab:selectedTab,searchBarValue} = useSelector((state) => state);
  let filteredMoviesByYear = getFilteredMoviesByYear(moviesByYear,selectedTab.id)
  filteredMoviesByYear = getFilteredMoviesFromSearch(filteredMoviesByYear,searchBarValue)
  const dispatch = useDispatch();
  const yearRef = useRef({ prevYear: 2012, nextYear: 2013 });
  const fetchMovies = useCallback(async (year, isOnTop) => {
    const response = await fetchMovieList(year);
    if (response != "Error") {
      if (isOnTop) {
        yearRef.current.prevYear = year-1;
        dispatch(addMoviesAtTop({ [year]: response.results }));
        window.scrollTo(0, 25);
      } else {
        yearRef.current.nextYear = year+1;
        dispatch(addMoviesAtBottom({ [year]: response.results }));
      }
    }
  }, []);
  useEffect(() => {
    handleScroll();
  }, []);
  const handleScroll = async () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop === 0) {
      await fetchMovies(yearRef.current.prevYear, true);
    } else if (
      clientHeight + document.documentElement.scrollTop + 1 >=
      scrollHeight
    ) {
      await fetchMovies(yearRef.current.nextYear, false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.addEventListener("wheel", handleScroll);
    };
  });
  return (
    <>
      <div id="parentMovieContainer">
        <div id="childMovieContainer">
          {Object.entries(filteredMoviesByYear).map(([year, movies]) => (
            <React.Fragment key={year}>
              <div className="year">{year}</div>
              <div className="movieTilesList">
                {movies.map((movie) => (
                  <MovieTile
                    key={movie.id}
                    movieObj={movie}
                    getGeneresName={(movieGenres) =>
                      getGeneresName(genereList, movieGenres)
                    }
                  /> // Use ID or title for unique key
                ))}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};
export default MovieList;
