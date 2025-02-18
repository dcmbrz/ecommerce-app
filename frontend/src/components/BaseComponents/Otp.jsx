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
        <div className="space-y-2">
            <InputOTP maxLength={6} value={value} onChange={handleChange}>
                <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                </InputOTPGroup>
            </InputOTP>
        </div>
    );
}
