import React from "react";
import Hero from "./Hero.jsx";
import ConnectStudents from "./ConnectStudents.jsx";

function Home() {
    return (
        <div className={"py-16 container relative max-w-6xl mx-auto"}>
            <Hero/>
            <ConnectStudents/>
        </div>
    )
}

export default Home