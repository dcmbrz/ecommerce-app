import React, { useRef } from "react";
import Slider from "react-slick";
import {Link} from "react-router-dom";
import TextField from '@mui/material/TextField';
import {Checkbox, FormControlLabel} from "@mui/material";
import uci from "../assets/uci-students.jpg"
import usc from "../assets/usc-students.jpg"
import lmu from "../assets/lmu-students.jpeg"

function SignUp() {
    let sliderRef = useRef(null);
    const play = () => {
        sliderRef.slickPlay();
    };
    const pause = () => {
        sliderRef.slickPause();
    };

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false
    };
    return (
        <div className="flex text-gray-300 font-light container max-w-5xl mx-auto space-x-5 my-12 p-5 pb-8 bg-gray-700 rounded-lg">
            <div className="w-1/2">
                <Slider ref={slider => (sliderRef = slider)} {...settings}>
                    <div>
                        <img src={uci} alt={"uci-students"} className={"rounded-md"}/>
                    </div>
                    <div>
                        <img src={usc} alt={"usc students"} className={"rounded-md"}/>
                    </div>
                    <div>
                        <img src={lmu} alt={"lmu students"} className={"rounded-md"}/>
                    </div>
                </Slider>
            </div>

            <div className="w-1/2 flex flex-col items-center justify-center w-full min-h-screen">
                <h1>Create an account</h1>
                <span className={"flex gap-1"}>
                    <p>Already have an account?</p>
                    <Link to={"/sign-in"}></Link>
                </span>
                <div className={"flex flex-col gap-3 justify-between"}>
                    <div className={"flex gap-3"}>
                        <TextField
                            required
                            id="outlined-required"
                            label="Firstname"
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Lastname"
                        />
                    </div>
                    <TextField
                        required
                        id="outlined-required"
                        label="Email (.edu only)"
                        className={"w-full"}
                    />
                    <TextField
                        required
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        className={"w-full"}
                    />
                    <TextField
                        required
                        id="outlined-password-input"
                        label="Confirm password"
                        type="password"
                        autoComplete="current-password"
                        className={"w-full"}
                    />
                    <FormControlLabel
                        required
                        control={<Checkbox />}
                        label={
                            <>
                                I agree to the{' '}
                                <Link to="terms-and-conditions" className={"underline"}>Terms & Conditions</Link>
                            </>
                        }
                    />
                </div>
                <div>
                    <Link to={"/explore"}>Create Account</Link>
                    <span className={"flex"}>
                        <hr/>
                        <p>Or register with</p>
                        <hr/>
                    </span>
                    <button className={"border border-gray-300 hover:border-white"}>Google</button>
                    <button className={"border border-gray-300 hover:border-white"}>Apple</button>
                </div>
            </div>
        </div>
    )
}

export default SignUp