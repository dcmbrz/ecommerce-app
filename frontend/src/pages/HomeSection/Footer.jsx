import React from "react"
import {Link} from "react-router-dom";

function Footer(){
    return (
        <div className={"flex flex-col items-center justify-center bg-blue-500/40 rounded-2xl p-16 gap-3 w-full my-20"}>
            <h1 className={"text-center font-bold text-4xl"}>Minimal effort and maximum exposure</h1>
            <h2 className={"text-center text-gray-600 font-normal text-2xl"}>Start building your student business today</h2>
            <Link to={"/sign-up"} className={"my-6 bg-black text-white font-normal rounded-lg p-3 px-20"}>Join Now</Link>
            <div className={"flex justify-between items-center border-b-2 w-full py-4"}>
                <Link to={"/"} className={"flex gap-3 items-center"}>
                    <div className={"bg-gray-400 w-10 h-10 rounded-lg"}></div>
                    <h1 className={"font-medium text-2xl"}>SideHustle</h1>
                </Link>
                <p>Contact Us</p>
                <p>About Us</p>
                <p>Terms and Conditions</p>
                <p>Privacy Policy</p>
            </div>
            <div className={"flex items-start w-full"}>Copyright © 2024 SideHustle Inc.</div>
        </div>
    )
}

export default Footer