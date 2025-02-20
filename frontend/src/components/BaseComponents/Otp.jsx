import React from "react";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp";

export default function Otp({ onChange }) {  // Accept onChange prop
    const [value, setValue] = React.useState("");

    const handleChange = (newValue) => {
        setValue(newValue);
        if (onChange) {
            onChange(newValue); // Pass the OTP value to the parent component
        }
    };

    return (
        <div className="space-y-2 text-white">
            <InputOTP maxLength={6} value={value} onChange={handleChange}>
                <InputOTPGroup className={"text-white font-semibold gap-1"}>
                    <InputOTPSlot index={0} className={"bg-slate-700 "}/>
                    <InputOTPSlot index={1} className={"bg-slate-700 "}/>
                    <InputOTPSlot index={2} className={"bg-slate-700 "}/>
                    <InputOTPSlot index={3} className={"bg-slate-700 "}/>
                    <InputOTPSlot index={4} className={"bg-slate-700 "}/>
                    <InputOTPSlot index={5} className={"bg-slate-700 "}/>
                </InputOTPGroup>
            </InputOTP>
        </div>
    );
}
