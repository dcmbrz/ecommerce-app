import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { Heart, Search, CircleUserRound, ShoppingCart} from "lucide-react";
import {Link, useLocation} from "react-router-dom";
function Navbar() {
    const location = useLocation();
    return (
        <div className={"flex justify-between items-center py-3"}>
            <div className={"bg-gray-400 w-10 h-10 rounded-lg"}></div>
            <h1 className={"font-medium text-lg"}>College Marketplace</h1>
            <span className="relative flex items-center">
  <Search className="absolute left-3" />
  <input
      placeholder="Search"
      className="pl-10 border-2 border-gray-300 rounded-full w-full py-2 w-[700px]"
  />
</span>
            {location.pathname == "/" ? (<Link to={"/"}>Home</Link>): (<Heart/>)}
            {location.pathname == "/" ? (<Link to={"/about"}>About</Link>): (<CircleUserRound/>)}
            {location.pathname == "/" ? (<Link to={"/sign-in"}>Sign In</Link>): (<ShoppingCart/>)}
        </div>
    )
}

export default Navbar