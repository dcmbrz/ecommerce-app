import React from "react";
import collegeStudentImage from '../../assets/college_students.webp';
function Hero() {

    return (
        <div className="relative rounded-3xl">
            <img
                src={collegeStudentImage}
                alt="College Students"
                className="rounded-3xl w-full h-96 object-cover"
            />
            <div className="absolute inset-0 flex flex-col p-10 justify-center gap-5 max-w-xl">
                <h1 className="text-5xl text-white font-bold">
                    The College Marketplace for Students, by Students
                </h1>
                <p className="text-white font-light">
                    Buy and sell products/services within your college community!
                </p>
                <p className="text-white font-medium bg-blue-500 max-w-fit px-5 py-3 rounded-lg cursor-pointer">
                    Get Started Today
                </p>
            </div>
        </div>
    )
}

export default Hero