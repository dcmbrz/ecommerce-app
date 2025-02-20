import React, {useState} from "react"
import Otp from "@/components/BaseComponents/Otp.jsx"
import {HeartHandshake, LoaderCircle, ShieldCheck} from "lucide-react";
import image3 from "@/assets/lmu-students.jpeg";
import {useNavigate} from "react-router-dom";
import { useAppContext } from "@/context/AppContext.jsx"

export default function VerifyOtp() {
    const { user, setIsAuthenticated } = useAppContext();
    const navigate = useNavigate();
    const [otp, setOtp] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleOtpChange = (newOtp) => {
        setOtp(newOtp);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Entered OTP:", otp);

        const userData = { email: user.email, otp };

        try {
            setLoading(true);
            setError(false);
            const res = await fetch('http://localhost:4000/api/user/verify-account', {
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

            setIsAuthenticated(true);
            // Navigate to success page or next step here
            navigate('/explore');
        } catch (err) {
            setLoading(false);
            setError(true);
        }
    };

    console.log(otp);

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="flex text-black font-normal justify-center w-screen">
                <div className="bg-white p-6 text-sm w-screen h-screen flex flex-col justify-center lg:w-1/2 max-w-md mx-auto ">
                    <form className="flex flex-col items-center" onSubmit={handleSubmit}>
                        {/* Heading */}
                        <h1 className="text-black text-2xl sm:text-3xl font-bold text-center mb-4">
                            Your campus awaits.
                        </h1>
                        <p className="text-black text-center mb-6">
                            Enter the 6-digit code sent to your email.
                        </p>

                        <Otp onChange={handleOtpChange}/>

                        <p className="text-gray-400 text-center text-xs mt-4 mb-6">
                            SideHustle uses your email to connect you to the right school campus.
                        </p>

                        <button
                            onClick={handleSubmit}
                            type={"submit"}
                            disabled={loading}
                            className="mt-4 w-full py-2 bg-blue-600 hover:bg-blue-700 transition-all text-white rounded-full shadow-md">
                            {loading ? <LoaderCircle className={"animate-spin"}/> : 'Verify Email'}
                        </button>
                        {error && <p className={"text-red-700"}>{errorMessage}</p>}

                        <p className="text-gray-400 text-sm mt-4 text-center">
                            Didn't receive the code?
                            <button className="text-blue-400 hover:text-blue-500 font-medium ml-1">
                                Re-send OTP
                            </button>
                        </p>
                    </form>


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