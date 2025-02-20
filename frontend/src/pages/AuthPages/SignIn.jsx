import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {HandCoins, GraduationCap, LoaderCircle} from "lucide-react";
import image2 from "../../assets/usc-students.jpg";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {GoogleLogin} from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

function SignIn() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({})
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [inputErrors, setInputErrors] = useState({});

    const handleChange = (e) => {
        setFormData({...formData, [e.target.id]: e.target.value});

        setInputErrors(prevErrors => {
            const { [e.target.id]: deletedError, ...rest } = prevErrors;  // Remove the error for the specific key
            return rest;
        });
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();

        const newErrors = {};

        // Check required fields
        if (!formData.email) newErrors.email = "Email is required";
        if (!formData.password) newErrors.password = "Password is required";

        // If there are errors, set the errors and return early
        if (Object.keys(newErrors).length > 0) {
            setInputErrors(newErrors);
            return;
        }

        if (inputErrors.length > 0) {
            return;
        }

        try {
            setLoading(true);
            setError(false);
            const res = await fetch('http://localhost:4000/api/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            console.log(data)
            setLoading(false);
            if (data.success === false) {
                setError(true);
                setErrorMessage(data.message);
                return;
            }
            console.log(data)
            // Navigate to success page or next step here
            navigate('/explore');
        } catch (err) {
            setLoading(false);
            setError(true);
        }
    }
    console.log(inputErrors);

    const handleGoogleLogin = async (credentialResponse) => {
        const credentials = jwtDecode(credentialResponse.credential);
        const googleUser = {
            email: credentials.email,
            password: " ",
        };

        try {
            setLoading(true);
            setError(false);
            const res = await fetch('http://localhost:4000/api/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(googleUser),
            });
            const data = await res.json();
            setLoading(false);
            if (data.success === false) {
                setError(true);
                setErrorMessage(data.message);
                return;
            }
            console.log(data)
            // Navigate to success page or next step here
            navigate('/explore')
        } catch (err) {
            setLoading(false);
            setError(true);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen ">
            <div className="flex font-normal justify-center w-screen">
                <div className="hidden lg:block lg:w-1/2">
                    <div className={"relative w-full h-screen object-cover"}>
                        <img src={image2}
                             alt="Students walking and laughing"
                             className="w-full h-full object-cover"
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

                    <div className={"w-full my-5"}>
                        <GoogleLogin
                            onSuccess={credentialResponse => {
                                handleGoogleLogin(credentialResponse);
                            }}
                            onError={() => console.log("Login failed")}
                            text={"signin_with"}
                        />
                    </div>


                    <div className={"flex items-center justify-center text-gray-500 font-medium mb-5 gap-3 w-full"}>
                        <Separator className="flex-1"/>
                        <p>Or</p>
                        <Separator className="flex-1"/>
                    </div>

                    <form className={"flex flex-col gap-3 justify-between w-full"} onSubmit={handleSubmit}>
                        <span className={"space-y-1"}>
                            <h1 className={"text-black inline-flex gap-1"}>Email<p
                                className={"text-red-500 font-bold"}>*</p></h1>
                            <Input
                                placeholder={"Email"}
                                id={"email"}
                                type="email"
                                className={`h-12 ${inputErrors.email ? "border-red-500" : ""}`}
                                onChange={handleChange}
                            />
                            {inputErrors.email &&
                                <p className="text-red-500 text-sm">{inputErrors.email}</p>}
                        </span>

                        <span className={"space-y-1"}>
                            <h1 className={"text-black flex gap-1"}>Password<p
                                className={"text-red-500 font-bold"}>*</p></h1>
                            <Input type="password"
                                   id={"password"}
                                   placeholder={"Password"}
                                   className={`h-12 ${inputErrors.password ? "border-red-500" : ""}`}
                                   onChange={handleChange}
                            />
                            {inputErrors.password &&
                                <p className="text-red-500 text-sm">{inputErrors.password}</p>}
                        </span>
                        <p onClick={()=>navigate('/reset-password')} className={"text-xs md:text-sm font-medium text-blue-500 cursor-pointer"}>Forgot Password?</p>
                        <button
                            type="submit"
                            disabled={loading}
                            className={"flex items-center justify-center bg-black text-white p-2 rounded-md w-full my-5 text-center hover:bg-black/90"}>
                            {loading ? <LoaderCircle className={"animate-spin"}/> : 'Sign Up'}
                        </button>
                    </form>

                    {error && <p className={"text-red-700"}>{errorMessage}</p>}

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