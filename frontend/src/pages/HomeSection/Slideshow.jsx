import React from "react"
import image1 from "../../assets/slideshow-image1.jpg"
import image2 from "../../assets/slideshow-image2.jpg"
import image3 from "../../assets/slideshow-image3.jpg"
import Slider from "react-slick";

function Slideshow() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className={"border-b-4 border-t-4"}>
            <div className={"mx-20 my-16 relative flex flex-col"}>
                <span className={"flex flex-row items-center justify-center gap-5"}>
                    <span className="relative flex h-5 w-5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-600 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-5 w-5 bg-yellow-500"></span>
                    </span>
                    <h1 className={"my-10 flex text-center items-center justify-center gap-3 text-3xl py-3 font-light text-black"}>Join the College Marketplace today and start interacting with your peers</h1>
                </span>
                <Slider {...settings}>
                    <div className={"relative rounded-xl flex items-center justify-center"}>
                        <img src={image1}
                             alt="Students laughing"
                             className="rounded-xl w-full h-96 object-cover"
                        />
                        <div className="absolute inset-0 rounded-xl flex flex-col p-10 justify-center gap-5 items-center ">
                        </div>
                    </div>
                    <div className={"relative rounded-xl"}>
                        <img src={image2}
                             alt="Students laughing"
                             className="rounded-xl w-full h-96 object-cover"
                        />
                        <div className="absolute inset-0 rounded-xl flex flex-col p-10 justify-center gap-5 items-center"></div>
                    </div>
                    <div className={"relative rounded-xl"}>
                        <img src={image3}
                             alt="Students laughing"
                             className="rounded-xl w-full h-96 object-cover"
                        />
                        <div className="absolute inset-0 rounded-xl flex flex-col p-10 justify-center gap-5 items-center">
                        </div>
                    </div>
                </Slider>
            </div>
        </div>

    )
}

export default Slideshow