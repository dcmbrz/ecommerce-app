import React from "react";
import {Link} from "react-router-dom";
import { HandCoins, GraduationCap } from "lucide-react";
import image2 from "../assets/usc-students.jpg";


function SignIn() {

    return (
        <div className="flex items-center justify-center h-screen ">
            <div className="flex text-gray-300 font-normal justify-center container max-w-6xl mx-auto">
                <div className="w-1/2">
                    <div className={"relative rounded-xl w-full h-full object-cover"}>
                        <img src={image2}
                             alt="Students walking and laughing"
                             className="rounded-lg w-full h-full object-cover"
                        />
                        <div
                            className="absolute bg-black/15 text-white inset-0 rounded-lg flex flex-col p-10 justify-end gap-3 items-center">
                            <h1 className={"text-center text-3xl max-w-md mx-auto font-medium"}>Welcome Back to SideHustle</h1>
                            <p className={"max-w-md mx-auto text-center"}>Buy, Sell, Connect—Right on Campus</p>
                            <div className={"flex justify-evenly w-full max-w-md mx-auto py-5"}>
                                <span className={"inline-flex p-1 border-2 rounded-full px-3 gap-1 items-center"}>
                                    <HandCoins size={20}/>
                                    <p>Affordable Goods</p>
                                </span>
                                <span className={"inline-flex p-1 border-2 rounded-full px-3 gap-1 items-center"}>
                                    <GraduationCap size={20}/>
                                    <p>Made For Students</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 flex flex-col max-w-sm mx-auto gap-1 justify-center py-20">
                    <div className={"flex flex-col items-center gap-2"}>
                        <h1 className={"flex text-3xl text-black font-medium"}>Sign Back In</h1>
                        <p className={"text-gray-500 text-md"}>Let's get back in to your account</p>
                    </div>

                    <span
                        className={"inline-flex border-2 rounded-full items-center justify-center border-gray-300 gap-2 p-2 w-full my-5"}>
                        <img className={"w-[16px]"}
                             src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg"/>
                        <button className={"text-sm text-black font-medium"}>Login with Google</button>
                    </span>

                    <div className={"flex flex-col items-center w-full"}>
                        <span className={"flex text-gray-500 font-medium py-3"}>
                            <hr/>
                            <p>Or</p>
                            <hr/>
                        </span>
                    </div>
                    <form className={"flex flex-col gap-3 justify-between w-full"}>
                        <span className={"space-y-1"}>
                            <h1 className={"text-black inline-flex gap-1"}>Email<p
                                className={"text-red-500 font-bold"}>*</p></h1>
                            <input placeholder={"Enter your email"} type="email"
                                   className={"pl-3 border-2 rounded-full items-center justify-center border-gray-300 gap-2 p-2 w-full text-gray-600"}/>
                        </span>

                        <span className={"space-y-1"}>
                            <h1 className={"text-black flex gap-1"}>Password<p
                                className={"text-red-500 font-bold"}>*</p></h1>
                            <input placeholder={"Enter your password"} type="password"
                                   className={"pl-3 border-2 rounded-full items-center justify-center border-gray-300 gap-2 p-2 w-full text-gray-600"}/>
                        </span>
                    </form>


                    <Link to={"/explore"} className={"bg-black text-white p-2 rounded-full w-full my-5 text-center"}>Sign
                        In</Link>
                    <span className={"flex gap-1 text-sm"}>
                        <p className={"text-black font-medium"}>Don't have an account?</p>
                        <Link to={"/sign-up"} className={"text-blue-500 font-medium"}>Sign Up</Link>
                    </span>

                </div>

            </div>
        </div>

    )
}

export default SignIn