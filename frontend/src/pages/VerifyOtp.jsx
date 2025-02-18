import React from "react"
import Otp from "@/components/BaseComponents/Otp.jsx"

export default function VerifyOtp() {
    const [otp, setOtp] = React.useState("");

    const handleOtpChange = (newOtp) => {
        setOtp(newOtp);
    };

    const handleSubmit = () => {
        console.log("Entered OTP:", otp);
        // Perform OTP validation or API call here
    };

    return (
        <div className="bg-slate-900 p-8 rounded-lg shadow-lg w-96 text-sm">
            <h2>Enter OTP</h2>
            <Otp onChange={handleOtpChange}/>
            <button onClick={handleSubmit} className="mt-4 p-2 bg-blue-500 text-white rounded">
                Submit
            </button>
        </div>
    )
}