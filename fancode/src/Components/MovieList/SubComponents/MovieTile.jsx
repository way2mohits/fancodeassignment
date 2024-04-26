import React from "react";
import "../MovieListStyle.css";
import { imagePath } from "../../../Network/NetworkConstants";
const MovieTile = ({movieObj,getGeneresName})=>{
    return <>
    <div className="movieTile">
    <img src={imagePath(movieObj.poster_path)} style={{height:"100%",width:"100%",position:"absolute",zIndex:"-2",bottom:"0px"}} />
        <div className="movieInfoContainer">
            <div>
                <div><span>Title:-</span><span>{movieObj.title}</span></div>
                <div><span>Generes:-</span><span>{getGeneresName(movieObj.genre_ids)}</span></div>
                <div><span>Rating:-</span><span>{movieObj.vote_average}</span></div>
            </div>
            <div>
                overview:-{movieObj.overview && movieObj.overview.length>40 ? `${movieObj.overview.substring(0,40)}...` : movieObj.overview}
            </div>
        </div>
        <div className="tileBackgroundContainer"></div>
    </div>
    </>
}
export default MovieTile;