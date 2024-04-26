import React from "react";
import "./HeaderStyle.css"
import { useDispatch, useSelector } from "react-redux";
import { searchQuery } from "../../Redux/Slice/SearchBarSlice";

const Header = ()=>{
    const searchBarValue = useSelector(state=>state.searchBarValue);
    const dispatch = useDispatch();
    const handleSearchInput = (e)=>{
        dispatch(searchQuery(e.target.value));
    }
    return<>
    <div className="headerContainer">
        <p className="headerText">MOVIEFIEX</p>
        <input className="searchBar" type="text" placeholder="Search By Title" onChange={handleSearchInput} value={searchBarValue} />
    </div>
    </>
}
export default Header;