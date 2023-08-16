import React from "react";
import { TABS } from "../Redux/Actions/actionTypes";
import { useDispatch } from "react-redux";
import { toggleTab } from "../Redux/Actions";

  
const TodoNav = (prop) =>{
  const dispatch = useDispatch()
    return(
        <div  className="flex justify-start mb-4 ">
         { TABS.map((tab,index) =><button key={index} onClick={()=> dispatch(toggleTab(tab))} className={`${tab===prop.currentTab ? "    text-primary font-bold py-2 px-4  mr-4 border border-primary rounded shadow":"bg-white hover:bg-gray-100 text-gray-600 font-semibold py-2 px-4  mr-4 border border-gray-400 rounded shadow" }`}>
        { tab}
</button>)}
        </div>
    )
}

export default TodoNav;