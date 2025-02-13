import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import { ShieldCheck, HeartHandshake, X, Check } from "lucide-react";
import image3 from "../assets/lmu-students.jpeg";
import { Input } from "@/components/ui/input";
import { Separator } from "../components/ui/separator";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import SchoolSelector from "@/components/SchoolSelector.jsx";

function SignUp() {
    const navigate = useNavigate();
    const [hasLength, setHasLength] = useState(false);
    const [hasNumber, setHasNumber] = useState(false);
    const [hasSymbol, setHasSymbol] = useState(false);
    const [textVisible, setTextVisible] = useState(false);
    const [formData, setFormData] = useState({})
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handlePasswordClick = () => {
        setTextVisible(true);
    };

    const handleChange = (e) => {
        setFormData({...formData, [e.target.id]: e.target.value});
        if (e.target.id === "password"){
            if (e.target.value.length >= 8) {
                setHasLength(true);
            }else{
                setHasLength(false);
            }

            setHasNumber(/\d/.test(e.target.value));
            setHasSymbol(/[!@#$%^&*(),.?":{}|<>]/.test((e.target.value)));
        }

    }

    const handleSchoolSelect = (selectedSchool) => {
        setFormData((prevData) => ({
            ...prevData,
            campus: selectedSchool ? { id: selectedSchool.value, name: selectedSchool.text } : null,
        }));
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const res = await fetch('http://localhost:4000/api/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        const data = await res.json();
        console.log(data);
    }


    const handleGoogleLogin = (credentialResponse) => {
        const credentials = jwtDecode(credentialResponse.credential)
        const googleUser = {
            email: credentials.email,
            firstname: credentials.given_name,
            lastname: credentials.family_name,
            password:" ",
        };
        navigate('/sign-up/google', { state: googleUser });
    }

    console.log(formData);

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="flex text-gray-300 font-normal justify-center w-screen">
                <div
                    className="w-screen h-screen flex flex-col max-w-sm mx-auto gap-1 justify-center md:max-w-md lg:max-w-sm lg:w-1/2">
                    <div className={"flex flex-col items-center gap-2"}>
                        <h1 className={"flex text-3xl text-black font-medium"}>Create an account</h1>
                        <p className={"text-gray-500 text-md"}>Let's get started with your free account</p>
                    </div>

                    <div className={"w-full my-5"}>
                        <GoogleLogin
                            onSuccess={credentialResponse => {
                                handleGoogleLogin(credentialResponse);
                            }}
                            onError={() => console.log("Login failed")}
                            text={"signup_with"}
                        />
                    </div>

                    <div className={"flex items-center justify-center text-gray-500 font-medium pb-8 gap-3 w-full"}>
                        <Separator className="flex-1"/>
                        <p>Or</p>
                        <Separator className="flex-1"/>
                    </div>

                    <form className={"flex flex-col gap-3 justify-between w-full text-black"} onSubmit={handleSubmit}>
                        <div className="flex flex-col md:flex-row gap-3 justify-between">
                            <span className={"space-y-1"}>
                            <h1 className={"text-black flex gap-1"}>First name<p
                                className={"text-red-500 font-bold"}>*</p></h1>
                            <Input
                                placeholder={"First name"}
                                id={"firstname"}
                                type="text"
                                className={"h-12"}
                                onChange={handleChange}
                                required={true}
                            />
                        </span>
                            <span className={"space-y-1"}>
                            <h1 className={"text-black flex gap-1"}>Last name<p
                                className={"text-red-500 font-bold"}>*</p></h1>
                            <Input
                                placeholder={"Last name"}
                                id={"lastname"}
                                type="text"
                                className={"h-12"}
                                onChange={handleChange}
                                required={true}
                            />
                        </span>
                        </div>
                        <span className={"space-y-1"}>
                            <h1 className={"text-black flex items-center gap-1"}>Email<p
                                className={"text-sm text-gray-500"}>(.edu only)</p><p
                                className={"text-red-500 font-bold"}>*</p></h1>
                            <Input
                                placeholder={"Email"}
                                id={"email"}
                                type="email"
                                className={"h-12"}
                                onChange={handleChange}
                                required={true}
                            />
                        </span>
                        <span className={"space-y-1"}>
                            <h1 className={"text-black flex items-center gap-1"}>Username<p
                                className={"text-sm text-gray-500"}></p><p
                                className={"text-red-500 font-bold"}>*</p></h1>
                            <Input
                                placeholder={"Username"}
                                id={"username"}
                                type="text"
                                className={"h-12"}
                                onChange={handleChange}
                                required={true}
                            />
                        </span>
                        <span className={"space-y-1"}>
                            <h1 className={"text-black flex gap-1"}>Password<p
                                className={"text-red-500 font-bold"}>*</p></h1>
                            <Input
                                type="password"
                                id={"password"}
                                placeholder={"Password"}
                                className={"h-12"}
                                onClick={handlePasswordClick}
                                onChange={handleChange}
                                required={true}
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

                        <SchoolSelector onSelect={handleSchoolSelect}/>

                        <button
                            type="submit"
                            className={"bg-black text-white p-2 rounded-md w-full my-5 text-center hover:bg-black/90"}>Sign
                            Up
                        </button>
                    </form>

                    <span className={"flex gap-1 text-sm"}>
                        <p className={"text-black font-medium"}>Already have an account?</p>
                    <Link to={"/sign-in"} className={"text-blue-500 font-medium"}>Log in</Link>
                    </span>
                </div>
                <div className="hidden lg:block lg:w-1/2">
                    <div className={"relative w-full h-screen object-cover"}>
                        <img src={image3}
                             alt="Students walking and laughing"
                             className="w-full h-full object-cover"
                        />
                        <div
                            className="absolute bg-black/20 text-white inset-0 flex flex-col p-10 justify-end gap-3 items-center">
                            <h1 className={"text-center text-3xl max-w-md mx-auto font-medium"}>
                                Discovering the Best Services and Products for You
                            </h1>
                            <p className={"max-w-md mx-auto text-center"}>
                                Our practice is providing a platform for students to gain access to affordable
                                products/services
                            </p>
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