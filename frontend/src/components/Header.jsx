import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass, faHeart, faUser, faCartShopping} from "@fortawesome/free-solid-svg-icons";

function Header() {

    return (
        <div className={"flex justify-between"}>
            <div className={"bg-black w-10 h-10 rounded-xs"}></div>
            <h1>College Marketplace</h1>
            <span>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input placeholder={"Search"} className={"border border-gray-500 rounded-full"}/>
            </span>
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faUser} />
            <FontAwesomeIcon icon={faCartShopping} />

        </div>
    )
}

export default Header