import React, {useState} from "react";
import {Link} from "react-router-dom";
import { ShieldCheck, HeartHandshake, X, Check } from "lucide-react";
import image3 from "../assets/lmu-students.jpeg";
import { Input } from "@/components/ui/input";
import { Separator } from "../components/ui/separator";

function SignUp() {
    const [hasLength, setHasLength] = useState(false);
    const [hasNumber, setHasNumber] = useState(false);
    const [hasSymbol, setHasSymbol] = useState(false);
    const [textVisible, setTextVisible] = useState(false);
    const handlePasswordChange = (e) => {
        if (e.target.value.length >= 8) {
            setHasLength(true);
        }else{
            setHasLength(false);
        }

        setHasNumber(/\d/.test(e.target.value));
        setHasSymbol(/[!@#$%^&*(),.?":{}|<>]/.test((e.target.value)));
    }

    const handlePasswordClick = () => {
        setTextVisible(true);
    };
    return (
        <div className="flex items-center justify-center h-screen ">
            <div className="flex text-gray-300 font-normal justify-center w-screen">
                <div className="w-1/2 flex flex-col max-w-sm mx-auto gap-1 justify-center">
                    <div className={"flex flex-col items-center gap-2"}>
                        <h1 className={"flex text-3xl text-black font-medium"}>Create an account</h1>
                        <p className={"text-gray-500 text-md"}>Let's get started with your free account</p>
                    </div>

                    <div className={"flex items-center justify-center gap-8"}>
                        <a className={"border-2 rounded-full border-gray-300 gap-2 p-3 my-5"}>
                            <img className={"w-[24px]"}
                                 src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg"
                                 alt={"google-logo"}
                            />
                        </a>
                        <a className={"border-2 rounded-full border-gray-300 gap-2 p-3 my-5"}>
                            <img className={"w-[24px]"}
                                 src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg"
                                 alt={"apple-logo"}
                            />
                        </a>
                    </div>

                    <div className={"flex items-center justify-center text-gray-500 font-medium pb-8 gap-3 w-full"}>
                        <Separator className="flex-1"/>
                        <p>Or</p>
                        <Separator className="flex-1"/>
                    </div>

                    <form className={"flex flex-col gap-3 justify-between w-full"}>
                        <div className={"flex gap-3"}>
                            <span className={"space-y-1"}>
                                <h1 className={"text-black flex gap-1"}>First name<p
                                    className={"text-red-500 font-bold"}>*</p></h1>
                                <Input placeholder={"First name"}
                                       type="text"
                                       className={"h-10"}
                                />
                            </span>
                            <span className={"space-y-1"}>
                                <h1 className={"text-black flex gap-1"}>Last name<p
                                    className={"text-red-500 font-bold"}>*</p></h1>
                                <Input placeholder={"Last name"}
                                       type="text"
                                       className={"h-10"}
                                />
                            </span>
                        </div>
                        <span className={"space-y-1"}>
                            <h1 className={"text-black flex items-center gap-1"}>Email<p
                                className={"text-sm text-gray-500"}>(.edu only)</p><p
                                className={"text-red-500 font-bold"}>*</p></h1>
                            <Input placeholder={"Email"}
                                   type="email"
                                   className={"h-10"}
                            />
                        </span>
                        <span className={"space-y-1"}>
                                <h1 className={"text-black flex gap-1"}>Phone number<p
                                    className={"text-red-500 font-bold"}>*</p></h1>
                                <Input placeholder={"Phone number"}
                                       type="text"
                                       className={"h-10"}
                                />
                        </span>
                        <span className={"space-y-1"}>
                            <h1 className={"text-black flex gap-1"}>Password<p
                                className={"text-red-500 font-bold"}>*</p></h1>
                            <Input type="password"
                                   placeholder={"Password"}
                                   className={"h-10"}
                                   onClick={handlePasswordClick}
                                   onChange={handlePasswordChange}
                            />
                                <div className={"flex flex-col items-start w-full gap-2 text-sm"}>
                                    {textVisible &&
                                        (hasLength ? (
                                                <span
                                                    className={"text-green-600 flex items-center justify-center gap-2"}>
                                                    <Check size={18}/>
                                                    <p>Must be at least 8 characters</p>
                                                </span>
                                            ) : (
                                                <span className={"text-red-500 flex items-center justify-center gap-1"}>
                                                    <X size={18}/>
                                                    <p>Must be at least 8 characters</p>
                                                </span>
                                            )
                                        )
                                    }
                                    {textVisible &&
                                        (hasNumber ? (
                                                <span
                                                    className={"text-green-600 flex items-center justify-center gap-1"}>
                                                    <Check size={18}/>
                                                    <p>Must include at least one number</p>
                                                </span>
                                            ) : (
                                                <span className={"text-red-500 flex items-center justify-center gap-1"}>
                                                    <X size={18}/>
                                                    <p>Must include at least one number</p>
                                                </span>
                                            )
                                        )
                                    }
                                    {textVisible &&
                                        (hasSymbol ? (
                                                <span
                                                    className={"text-green-600 flex items-center justify-center gap-1"}>
                                                    <Check size={18}/>
                                                    <p>Must include at least one symbol</p>
                                                </span>
                                            ) : (
                                                <span className={"text-red-500 flex items-center justify-center gap-1"}>
                                                    <X size={18}/>
                                                    <p>Must include at least one symbol</p>
                                                </span>
                                            )
                                        )
                                    }
                                </div>

                        </span>

                    </form>

                    <Link to={"/explore"}
                          className={"bg-black text-white p-2 rounded-md w-full my-5 text-center hover:bg-black/90"}>Sign
                        Up</Link>
                    <span className={"flex gap-1 text-sm"}>
                        <p className={"text-black font-medium"}>Already have an account?</p>
                    <Link to={"/sign-in"} className={"text-blue-500 font-medium"}>Log in</Link>
            </span>

                </div>
                <div className="w-1/2">
                    <div className={"relative w-full h-screen object-cover"}>
                        <img src={image3}
                             alt="Students walking and laughing"
                             className="w-full h-full object-cover"
                        />
                        <div className="absolute bg-black/20 text-white inset-0  flex flex-col p-10 justify-end gap-3 items-center">
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