import React from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {ChevronLeft, HeartHandshake, ShieldCheck} from "lucide-react"
import SchoolSelector from "@/components/SchoolSelector.jsx";
import { Input } from "@/components/ui/input";
import image3 from "@/assets/lmu-students.jpeg";

export default function GoogleSignUp(){
    const navigate = useNavigate();
    const location = useLocation();
    const googleUser = location.state || {};
    const [formData, setFormData] = React.useState({})
    const handleSchoolSelect = (selectedSchool) => {
        setFormData((prevData) => ({
            ...prevData,
            campus: selectedSchool ? { id: selectedSchool.value, name: selectedSchool.text } : null,
        }));
    };
    const handleChange = (e) => {
        setFormData({...formData, [e.target.id]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = { ...googleUser, ...formData }
        const res = await fetch('http://localhost:4000/api/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        const data = await res.json();
        console.log(data);
    }

    console.log({ ...googleUser, ...formData })

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
                            className={"h-14"}
                        />
                        <SchoolSelector onSelect={handleSchoolSelect}/>
                        <button
                            type="submit"
                            className={"bg-black text-white p-2 rounded-md w-full my-5 text-center hover:bg-black/90"}>Sign
                            Up
                        </button>
                    </form>
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