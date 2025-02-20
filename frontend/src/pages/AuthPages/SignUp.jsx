import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShieldCheck, HeartHandshake, X, Check, LoaderCircle } from "lucide-react";
import image3 from "../../assets/lmu-students.jpeg";
import { Input } from "@/components/ui/input";
import { useAppContext } from "@/context/AppContext.jsx"
import { Separator } from "@/components/ui/separator";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import SchoolSelector from "@/components/SchoolSelector.jsx";
import { toast } from "sonner"

function SignUp() {
    const { setUser } = useAppContext();
    const navigate = useNavigate();
    const [hasLength, setHasLength] = useState(false);
    const [hasNumber, setHasNumber] = useState(false);
    const [hasSymbol, setHasSymbol] = useState(false);
    const [textVisible, setTextVisible] = useState(false);
    const [formData, setFormData] = useState({});
    const [error, setError] = useState(false);
    const [inputErrors, setInputErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handlePasswordClick = () => {
        setTextVisible(true);
    };

    const handleSchoolSelect = (selectedSchool) => {
        setFormData((prevData) => ({
            ...prevData,
            campus: selectedSchool ? { id: selectedSchool.value, name: selectedSchool.text } : null,
        }));
        if (selectedSchool) {
            setInputErrors((prevErrors) => {
                const { campus, ...rest } = prevErrors;  // Remove the campus error if a valid school is selected
                return rest;
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = {};

        // Check required fields
        if (!formData.firstname) newErrors.firstname = "First name is required";
        if (!formData.lastname) newErrors.lastname = "Last name is required";
        if (!formData.email) newErrors.email = "Email is required";
        if (!formData.username) newErrors.username = "Username is required";
        if (!formData.password) newErrors.password = "Password is required";
        if (!formData.campus) newErrors.campus = "Please select a school";

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
            const res = await fetch('http://localhost:4000/api/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            setLoading(false);

            if (data.success === false) {
                setError(true);
                setErrorMessage(data.message);
                return;
            }

            setUser({firstname: formData.firstname, lastname: formData.lastname, email: formData.email, username: formData.username, campus: formData.campus});

            // Navigate to success page or next step here
            const response = await fetch('http://localhost:4000/api/user/send-verify-otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email:formData.email}),
            });

            const verifyData = await response.json();
            console.log(verifyData)
            if (verifyData.success === false) {
                setError(true);
                setErrorMessage(verifyData.message);
                toast.error(verifyData.message);
                return;
            }
            toast.success(verifyData.message);
            navigate('/verify');
        } catch (err) {
            setLoading(false);
            setError(true);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });


        setInputErrors(prevErrors => {
            const { [e.target.id]: deletedError, ...rest } = prevErrors;  // Remove the error for the specific key
            return rest;
        });


        if (e.target.id === "email") {
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(edu)$/;
            if (!emailPattern.test(e.target.value.toLowerCase())) {
                setInputErrors(prevErrors => ({ ...prevErrors, email: "Please use a valid .edu email address" }));
            } else {
                setInputErrors(prevErrors => {
                    const { [e.target.id]: deletedError, ...rest } = prevErrors;  // Remove the error for the specific key
                    return rest;
                });
            }
        }

        if (e.target.id === "password") {
            // Set the validation conditions
            const isValidLength = e.target.value.length >= 8;
            const hasNumber = /\d/.test(e.target.value);
            const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(e.target.value);

            setHasLength(isValidLength);
            setHasNumber(hasNumber);
            setHasSymbol(hasSymbol);

            // If the password meets all conditions, remove the error
            if (isValidLength && hasNumber && hasSymbol) {
                setInputErrors(prevErrors => {
                    const { [e.target.id]: deletedError, ...rest } = prevErrors;  // Remove the error for the specific key
                    return rest;
                });
            } else {
                // Optionally, set an error if the password is invalid
                setInputErrors(prevErrors => ({
                    ...prevErrors,
                    [e.target.id]: " ",
                }));
            }
        }

    };

    const handleGoogleLogin = (credentialResponse) => {
        const credentials = jwtDecode(credentialResponse.credential);
        const googleUser = {
            email: credentials.email,
            firstname: credentials.given_name,
            lastname: credentials.family_name,
            password: " ",
        };
        navigate('/sign-up/google', { state: googleUser });
    };

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
                                    className={`h-12 ${inputErrors.firstname ? "border-red-500" : ""}`}
                                    onChange={handleChange}
                                />
                                {inputErrors.firstname &&
                                    <p className="text-red-500 text-sm">{inputErrors.firstname}</p>}
                            </span>
                            <span className={"space-y-1"}>
                                <h1 className={"text-black flex gap-1"}>Last name<p
                                    className={"text-red-500 font-bold"}>*</p></h1>
                                <Input
                                    placeholder={"Last name"}
                                    id={"lastname"}
                                    type="text"
                                    className={`h-12 ${inputErrors.lastname ? "border-red-500" : ""}`}
                                    onChange={handleChange}
                                />
                                {inputErrors.lastname && <p className="text-red-500 text-sm">{inputErrors.lastname}</p>}
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
                                className={`h-12 ${inputErrors.email ? "border-red-500" : ""}`}
                                onChange={handleChange}
                            />
                            {inputErrors.email && <p className="text-red-500 text-sm">{inputErrors.email}</p>}
                        </span>
                        <span className={"space-y-1"}>
                            <h1 className={"text-black flex items-center gap-1"}>Username<p
                                className={"text-sm text-gray-500"}></p><p
                                className={"text-red-500 font-bold"}>*</p></h1>
                            <Input
                                placeholder={"Username"}
                                id={"username"}
                                type="text"
                                className={`h-12 ${inputErrors.username ? "border-red-500" : ""}`}
                                onChange={handleChange}
                            />
                            {inputErrors.username && <p className="text-red-500 text-sm">{inputErrors.username}</p>}
                        </span>
                        <span className={"space-y-1"}>
                            <h1 className={"text-black flex gap-1"}>Password<p
                                className={"text-red-500 font-bold"}>*</p></h1>
                            <Input
                                type="password"
                                id={"password"}
                                placeholder={"Password"}
                                className={`h-12 ${inputErrors.password ? "border-red-500" : ""}`}
                                onClick={handlePasswordClick}
                                onChange={handleChange}
                            />
                            {inputErrors.password && <p className="text-red-500 text-sm">{inputErrors.password}</p>}
                            <div className={"flex flex-col items-start w-full gap-2 text-sm"}>
                                {textVisible &&
                                    (hasLength ? (
                                            <span className={"text-green-600 flex items-center justify-center gap-2"}>
                                            <Check size={18}/>
                                            <p>Must be at least 8 characters</p>
                                        </span>
                                        ) : (
                                            <span className={"text-red-500 flex items-center justify-center gap-1"}>
                                            <X size={18}/>
                                            <p>Must be at least 8 characters</p>
                                        </span>
                                        )
                                    )}
                                {textVisible &&
                                    (hasNumber ? (
                                            <span className={"text-green-600 flex items-center justify-center gap-1"}>
                                            <Check size={18}/>
                                            <p>Must include at least one number</p>
                                        </span>
                                        ) : (
                                            <span className={"text-red-500 flex items-center justify-center gap-1"}>
                                            <X size={18}/>
                                            <p>Must include at least one number</p>
                                        </span>
                                        )
                                    )}
                                {textVisible &&
                                    (hasSymbol ? (
                                            <span className={"text-green-600 flex items-center justify-center gap-1"}>
                                            <Check size={18}/>
                                            <p>Must include at least one symbol</p>
                                        </span>
                                        ) : (
                                            <span className={"text-red-500 flex items-center justify-center gap-1"}>
                                            <X size={18}/>
                                            <p>Must include at least one symbol</p>
                                        </span>
                                        )
                                    )}
                            </div>
                        </span>

                        <SchoolSelector onSelect={handleSchoolSelect} onChange={handleChange} id={"campus"}/>
                        {inputErrors.campus && <p className="text-red-500 text-sm">{inputErrors.campus}</p>}
                        <button
                            type="submit"
                            disabled={loading}
                            className={"flex items-center justify-center bg-black text-white p-2 rounded-md w-full my-5 text-center hover:bg-black/90"}>
                            {loading ? <LoaderCircle className={"animate-spin"}/> : 'Sign Up'}
                        </button>
                    </form>

                    <span className={"flex gap-1 text-sm"}>
                        <p className={"text-black font-medium"}>Already have an account?</p>
                        <Link to={"/sign-in"} className={"text-blue-500 font-medium"}>Log in</Link>
                    </span>
                    {error && <p className={"text-red-700"}>{errorMessage}</p>}
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
    );
}

export default SignUp;
