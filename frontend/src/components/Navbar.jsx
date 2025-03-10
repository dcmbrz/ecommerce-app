import React from 'react'
import { Search, AlignJustify, Heart, ShoppingCart, Inbox, Store} from "lucide-react";
import {Link, useLocation} from "react-router-dom";
import ProfileDropdown from "./ProfileDropdown.jsx";
import {useAppContext} from "@/context/AppContext.jsx";

function Navbar() {
    const { user, isAuthenticated } = useAppContext();
    const location = useLocation();
    const hideNavbar = location.pathname === '/sign-in' || location.pathname === '/sign-up' || location.pathname === '/sign-up/google' || location.pathname === '/verify';

    if (hideNavbar) {
        return null; // Hide navbar on sign-in or sign-up pages
    }
    return (
        <div className={"flex justify-between items-center py-3 border-b px-10"}>

            <div className={"flex gap-3 items-center"}>
                <div className={"bg-gray-400 w-10 h-10 rounded-lg"}></div>
                <Link to={"/"} className={"font-medium text-lg"}>SideHustle</Link>

            </div>

            <div className={"flex items-center gap-5"}>
                <AlignJustify/>
                <span className="relative flex items-center">
                    <Search className="absolute left-3 text-gray-500" />
                    <input
                        placeholder="Search"
                        className="pl-10 border-2 bg-gray-200 text-gray-500 rounded-lg w-full py-2 lg:w-[820px]"
                    />
                </span>
            </div>
            {user && isAuthenticated ? (
                <div className={"flex gap-10 font-medium text-lg items-center justify-center"}>
                    <Link to={"/shop"}><Store/></Link>
                    <Link to={"/favorites"}><Heart/></Link>
                    <Link to={'/inbox'}><Inbox/></Link>
                    <Link to={"/cart"}><ShoppingCart/></Link>
                    <ProfileDropdown/>
                </div>
            ) : (
                <div className={"flex gap-5 font-medium text-lg items-center justify-center"}>
                    <Link to={"/sign-in"}
                          className={"relative px-4 py-2 ease-in-out duration-300 hover:bg-gray hover:px-4 hover:py-2 hover:rounded-sm"}>Sign
                        in</Link>
                    <Link to={"/favorites"}><Heart/></Link>
                    <Link to={"/cart"}><ShoppingCart/></Link>
                    {/*<Link to={"/sign-up"} className={"border-2 p-1 px-5 rounded-lg border-blue-500"}>Sign up</Link>*/}
                </div>
            )}


        </div>
    )
}

export default Navbar;