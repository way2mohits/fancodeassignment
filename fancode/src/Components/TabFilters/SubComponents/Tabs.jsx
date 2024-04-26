import React from "react";
import "../TabFilterStyle.css";
import { useDispatch, useSelector } from "react-redux";
import { changeTab } from "../../../Redux/Slice/TabSlice";
import { searchQuery } from "../../../Redux/Slice/SearchBarSlice";

const Tabs = ({ tab }) => {
    const selectedTab = useSelector(state=>state.tab);
    const dispatch = useDispatch();
    const handleTabChange = (selectedTab)=>{
        dispatch(changeTab(tab));
        dispatch(searchQuery(""));
    }
    return <><div className="tab" onClick={handleTabChange} style={{backgroundColor:selectedTab.name===tab.name?"red":"#484848"}}>
        <p>{tab.name}</p>
    </div></>
}
export default Tabs;