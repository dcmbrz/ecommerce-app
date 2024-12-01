import React from 'react'
import { Heart, Search, CircleUserRound, ShoppingCart, AlignJustify} from "lucide-react";
import {Link, useLocation} from "react-router-dom";
function Navbar() {
    const location = useLocation();
    return (
        <div className={"flex justify-between items-center px-5 py-3 border-b"}>

            <div className={"flex gap-3 items-center"}>
                <div className={"bg-gray-400 w-10 h-10 rounded-lg"}></div>
                <Link to={"/"} className={"font-medium text-lg"}>SideHustle</Link>

            </div>

            <div className={"flex items-center gap-5"}>
                <AlignJustify/>
                <span className="relative flex items-center">
                    <Search className="absolute left-3" />
                    <input
                        placeholder="Search"
                        className="pl-10 border-2 border-gray-300 rounded-full w-full py-2 lg:w-[620px]"
                    />
                </span>
            </div>

            <div className={"flex gap-14"}>
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/sign-in"}>Sign In</Link>
            </div>

        </div>
    )
}

export default Navbar;