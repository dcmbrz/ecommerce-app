import React from "react";
import collegeStudentImage from '../../assets/college_students.webp';
import {Link} from "react-router-dom";
function Hero() {

    return (
        <div className="relative rounded-3xl bg-black/40">
            <img
                src={collegeStudentImage}
                alt="College Students"
                className="rounded-3xl w-full h-96 object-cover"
            />
            <div className="absolute bg-black/30 inset-0 flex flex-col p-10 justify-center gap-5 rounded-3xl">
                <h1 className="text-5xl text-white font-bold max-w-lg">
                    The college marketplace for Students, by Students
                </h1>
                <p className="text-white font-light max-w-xl">
                    Buy and sell products/services within your college community!
                </p>
                <Link to={"/sign-up"} className="text-white font-medium bg-blue-500 max-w-fit px-5 py-3 rounded-lg cursor-pointer">
                    Get Started Today
                </Link>
            </div>
        </div>
    )
}

export default Hero