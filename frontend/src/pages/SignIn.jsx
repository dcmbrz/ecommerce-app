import React, { useRef } from "react";
import Slider from "react-slick";
import {Link} from "react-router-dom";

function SignIn() {
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
        autoplaySpeed: 2000,
        arrows: false
    };
    return (
        <div className="flex container max-w-6xl mx-auto space-x-8">
            <div className="w-1/2">

            </div>

            <div className="w-1/2">
                <Slider ref={slider => (sliderRef = slider)} {...settings}>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default SignIn