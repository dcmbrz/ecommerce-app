import React from "react";
import {Link} from "react-router-dom";
import { ShieldCheck, HeartHandshake } from "lucide-react";
import image3 from "../assets/lmu-students.jpeg";

function SignUp() {
    return (
        <div className="flex items-center justify-center h-screen ">
            <div className="flex text-gray-300 font-normal justify-center container max-w-6xl mx-auto">
                <div className="w-1/2 flex flex-col max-w-sm mx-auto gap-1 justify-center">
                    <div className={"flex flex-col items-center gap-2"}>
                        <h1 className={"flex text-3xl text-black font-medium"}>Create an account</h1>
                        <p className={"text-gray-500 text-md"}>Let's get started with your free account</p>
                    </div>

                    <span className={"inline-flex border-2 rounded-full items-center justify-center border-gray-300 gap-2 p-2 w-full my-5"}>
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
                            <h1 className={"text-black flex gap-1"}>First name<p
                                className={"text-red-500 font-bold"}>*</p></h1>
                            <input placeholder={"Enter your first name"}
                                   className={"pl-3 border-2 rounded-full items-center justify-center border-gray-300 gap-2 p-2 w-full text-gray-600"}/>
                        </span>
                        <span className={"space-y-1"}>
                            <h1 className={"text-black flex gap-1"}>Last name<p
                                className={"text-red-500 font-bold"}>*</p></h1>
                            <input placeholder={"Enter your last name"}
                                   className={"pl-3 border-2 rounded-full items-center justify-center border-gray-300 gap-2 p-2 w-full text-gray-600"}/>
                        </span>
                        <span className={"space-y-1"}>
                            <h1 className={"text-black inline-flex gap-1"}>Email<p
                                className={"text-sm text-gray-500"}>(.edu only)</p><p
                                className={"text-red-500 font-bold"}>*</p></h1>
                            <input placeholder={"Enter your email"}
                                   className={"pl-3 border-2 rounded-full items-center justify-center border-gray-300 gap-2 p-2 w-full text-gray-600"}/>
                        </span>
                        <span className={"space-y-1"}>
                            <h1 className={"text-black flex gap-1"}>Password<p
                                className={"text-red-500 font-bold"}>*</p></h1>
                            <input placeholder={"Enter your password"}
                                   className={"pl-3 border-2 rounded-full items-center justify-center border-gray-300 gap-2 p-2 w-full text-gray-600"}/>
                        </span>
                    </form>

                    <Link to={"/explore"} className={"bg-black text-white p-2 rounded-full w-full my-5 text-center"}>Sign Up</Link>
                    <span className={"flex gap-1 text-sm"}>
                <p className={"text-black font-medium"}>Already have an account?</p>
                <Link to={"/sign-in"} className={"text-blue-500 font-medium"}>Log in</Link>
            </span>

                </div>
                <div className="w-1/2">
                    <div className={"relative rounded-xl w-full h-full object-cover"}>
                        <img src={image3}
                             alt="Students walking and laughing"
                             className="rounded-lg w-full h-full object-cover"
                        />
                        <div className="absolute bg-black/20 text-white inset-0 rounded-lg flex flex-col p-10 justify-end gap-3 items-center">
                            <h1 className={"text-center text-3xl max-w-md mx-auto font-medium"}>Discovering the Best
                                Services and Products for You</h1>
                            <p className={"max-w-md mx-auto text-center"}>Our practice is providing a platform for
                                students to gain access to affordable products/services</p>
                            <div className={"flex justify-evenly w-full max-w-md mx-auto py-5"}>
                                <span className={"inline-flex p-1 border-2 rounded-full px-3 gap-1 items-center"}>
                                    <ShieldCheck size={20}/>
                                    <p>Trusted Community</p>
                                </span>
                                <span className={"inline-flex p-1 border-2 rounded-full px-3 gap-1 items-center"}>
                                    <HeartHandshake size={20}/>
                                    <p>Support Other Students</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default SignUp