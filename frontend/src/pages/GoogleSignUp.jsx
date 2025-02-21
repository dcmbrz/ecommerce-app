import React, {useState} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {ChevronLeft, HeartHandshake, LoaderCircle, ShieldCheck} from "lucide-react"
import SchoolSelector from "@/components/SchoolSelector.jsx";
import { Input } from "@/components/ui/input";
import image3 from "@/assets/lmu-students.jpeg";
import {useAppContext} from "@/context/AppContext.jsx";

export default function GoogleSignUp(){
    const navigate = useNavigate();
    const location = useLocation();
    const googleUser = location.state || {};
    const { login } = useAppContext();
    const [formData, setFormData] = React.useState({})
    const [error, setError] = useState(false);
    const [inputErrors, setInputErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

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

    const handleChange = (e) => {
        setFormData({...formData, [e.target.id]: e.target.value});

        setInputErrors(prevErrors => {
            const { [e.target.id]: deletedError, ...rest } = prevErrors;  // Remove the error for the specific key
            return rest;
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = {};

        // Check required fields
        if (!formData.username) newErrors.username = "Username is required";
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
            const userData = { ...googleUser, ...formData }
            const res = await fetch('http://localhost:4000/api/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });
            const data = await res.json();

            setLoading(false);
            if (data.success === false) {
                setError(true);
                setErrorMessage(data.message);
                return;
            }
            // Navigate to success page or next step here
            await login();
            navigate('/explore')
        } catch (err) {
            setLoading(false);
            setError(true);
        }
    }

    return (

    <div className="flex justify-center h-screen">
        <div className="flex font-normal justify-center w-screen">
            <div className="w-screen h-screen flex flex-col max-w-sm mx-auto gap-1 md:max-w-md lg:max-w-sm lg:w-1/2">
                <div className="flex justify-start items-center w-full py-10 gap-10">
                    <Link to={"/sign-up"}>
                        <ChevronLeft/>
                    </Link>

                    <h1 className={"text-2xl font-semibold md:text-3xl"}>Choose your username</h1>
                </div>
                <div className="w-full">
                    <form className="flex flex-col gap-5 w-full" onSubmit={handleSubmit}>
                        <Input
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Username"
                            onChange={handleChange}
                            className={`h-14 ${inputErrors.username ? "border-red-500" : ""}`}
                        />
                        {inputErrors.username && <p className="text-red-500 text-sm">{inputErrors.username}</p>}
                        <SchoolSelector onSelect={handleSchoolSelect} onChange={handleChange} id={"campus"}/>
                        {inputErrors.campus && <p className="text-red-500 text-sm">{inputErrors.campus}</p>}
                        <button
                            type="submit"
                            disabled={loading}
                            className={"flex items-center justify-center bg-black text-white p-2 rounded-md w-full my-5 text-center hover:bg-black/90"}>
                            {loading ? <LoaderCircle className={"animate-spin"}/> : 'Sign Up'}
                        </button>
                    </form>
                    {error && <p className={"text-red-700"}>{errorMessage}</p>}
                </div>


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
};