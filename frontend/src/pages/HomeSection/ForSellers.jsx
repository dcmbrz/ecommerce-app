import React from "react";

function ForSellers() {
    const instructions = [
        {
            key:1,
            number:"1",
            header:"Build",
            description:"Create a profile to attract followers and show your products/services",
        },
        {
            key:2,
            number:"2",
            header:"Declutter",
            description:"List old textbooks, furniture, or clothing quickly to free up space and earn cash",
        },
        {
            key:3,
            number:"3",
            header:"Monetize",
            description:"List services like tutoring, fitness training, or photography and start making money on campus",
        },
        {
            key:4,
            number:"4",
            header:"Monitor",
            description:"Manage your listings and keep tabs on all transactions through your profile dashboard",
        },
    ]
    return (
        <div className={"py-20 flex flex-col"}>
            <div className={"flex justify-center"}>
                <h1 className={"text-5xl font-medium text-center"}>How it Works</h1>
            </div>
            <h2 className={"text-5xl font-light py-6"}>For Sellers</h2>
            {instructions.map((instruction) => (
                <div key={instruction.key}>
                    <div className={"flex border-t-2 items-center"}>
                        <p className={"border-2 px-7 py-3 font-extralight text-blue-400 text-7xl rounded-full mr-10"}>{instruction.number}</p>
                        <h1 className={"text-6xl font-light w-96"}>{instruction.header}</h1>
                        <h2 className={"text-lg font-light max-w-md"}>{instruction.description}</h2>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ForSellers