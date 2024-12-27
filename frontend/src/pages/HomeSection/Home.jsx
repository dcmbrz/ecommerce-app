import React from "react";
import Hero from "./Hero.jsx";
import ConnectStudents from "./ConnectStudents.jsx";
import Features from "./Features.jsx";
import ForSellers from "./ForSellers.jsx";
import ForBuyers from "./ForBuyers.jsx";
import Slideshow from "./Slideshow.jsx";
import Footer from "./Footer.jsx";

function Home() {
    return (
        <div className={"py-16 container relative max-w-6xl mx-auto"}>
            <Hero/>
            <ConnectStudents/>
            <Features/>
            <ForSellers/>
            <ForBuyers/>
            <Slideshow/>
            <Footer/>
        </div>
    )
}

export default Home