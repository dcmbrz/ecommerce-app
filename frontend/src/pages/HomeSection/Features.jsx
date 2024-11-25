import React from "react";
import { UserRoundPen, CreditCard, UsersRound, MessagesSquare } from "lucide-react"
function Features() {
    const features = [
        {
            id:1,
            icon:UserRoundPen,
            header:"Easy Profile Setup",
            description:"Create a personalized profile to showcase all your products and services in one place"
        },
        {
            id:2,
            icon:CreditCard,
            header:"Secure In-App Payments",
            description:"Make safe, seamless transactions without leaving the platform"
        },
        {
            id:3,
            icon:UsersRound,
            header:"Support Fellow Students",
            description:"Keep business on campus and support your peers by buying locally"
        },
        {
            id:4,
            icon:MessagesSquare,
            header:"Real-Time Messaging",
            description:"Chat instantly with sellers or buyers to ask questions and coordinate purchases"
        },
    ]
    return (
        <div className={"flex flex-col items-center justify-center"}>
            <h1 className="text-5xl font-medium pb-5">Buy, Sell, and Connect with Fellow Students</h1>
            <h2 className="text-xl font-light text-gray-500 max-w-2xl text-center">Turn your skills and items into earnings. Connect, sell, and buy with ease—all on one platform</h2>
            <div className={"flex gap-5 py-24 items-center"}>
                {features.map((feature) => (
                    <div key={feature.id} className={"flex flex-col items-start max-w-xs"}>
                        <div className={"bg-blue-400 p-3 rounded-full mb-3"}>
                            <feature.icon className={"w-10 h-10"}/>
                        </div>
                        <h1 className={"text-xl font-medium mb-2 max-w-xs"}>{feature.header}</h1>
                        <p className={"font-light text-gray-600 max-w-xs"}>{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Features