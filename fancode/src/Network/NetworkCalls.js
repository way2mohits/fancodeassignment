import { genrePath, movieListPath } from "./NetworkConstants";

export const fetchMovieList = async (releaseYear)=>{
    try {
        const response = await fetch(movieListPath(releaseYear));
        if (response.success==false) {
            return "Error";
        }
        return await response.json();
    } catch (error) {
        return "Error";
    }
}
export const fetchGenere = async ()=>{
    try{
        const response = await fetch(genrePath);
        if (response.success==false) {
            return "Error";
        }
        return await response.json();
    } catch (error) {
        return "Error";
    }
}