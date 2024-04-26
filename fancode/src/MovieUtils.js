export const getGeneresName = (allGenresList,movieGenres)=>{
    const genresName = [];
    for(let genereId of movieGenres){
        for(let genereObj of allGenresList){
            if(genereObj.id===genereId){
                genresName.push(genereObj.name);
                break;
            }
        }
    }
    return genresName.join(",");
}
export const getFilteredMoviesByYear = (moviesByYear, genreId) => {
    if(genreId===0){
        return moviesByYear;
    }
    const filteredMovieByYear = {};
    for (const [year, movies] of Object.entries(moviesByYear)) {
      const currentFilteredMovies = movies.filter((movieObj) =>
        movieObj.genre_ids.includes(genreId)
      );
  
      if (currentFilteredMovies.length) {
        filteredMovieByYear[year] = currentFilteredMovies;
      }
    }
  
    return filteredMovieByYear;
  };
export const getFilteredMoviesFromSearch = (moviesByYear, searchQuery) => {
    if(searchQuery===""){
        return moviesByYear;
    }
    const filteredMovieByYear = {};
    for (const [year, movies] of Object.entries(moviesByYear)) {
      const currentFilteredMovies = movies.filter((movieObj) =>
        movieObj.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
  
      if (currentFilteredMovies.length) {
        filteredMovieByYear[year] = currentFilteredMovies;
      }
    }
  
    return filteredMovieByYear;
  };