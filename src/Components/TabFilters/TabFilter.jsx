import React from "react";
import Tabs from "./SubComponents/Tabs";
import "./TabFilterStyle.css";

const TabFilter = ()=>{
    const tabNamesArr = [{name:"All",id:0},{name:"Action",id:28},{name:"Comedy","id": 35},{name:"Horror","id": 27},{name:"Drama","id": 18},{name:"Sci-Fi","id": 878}];
    return<div className="tabList">
    {
        tabNamesArr.map((tab)=><Tabs key={tab.id}tab={tab} />)
    }
    </div>
}
export default TabFilter