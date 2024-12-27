import React from "react";

function ForBuyers() {
    const instructions = [
        {
            key:1,
            number:"05",
            title:"Find Unique Products",
            description:"Discover secondhand furniture, textbooks, clothing, and more—perfect for a student budget"
        },
        {
            key:2,
            number:"06",
            title:"Access Useful Services",
            description:"Browse services like tutoring, hairstyling, freelance work, and custom art from talented students"
        },
        {
            key:3,
            number:"07",
            title:"Follow and Favorite Sellers",
            description:"Never miss out on openings from your favorite sellers and get notifications on new listings and availabilities"
        },
        {
            key:4,
            number:"08",
            title:"Direct Communication",
            description:"Reach out to sellers with questions or to confirm details before you buy"
        },
    ]
    return (
        <div className={"my-20 bg-blue-400/70 rounded-xl flex flex-col items-end p-14"}>
            <h1 className={"pl-96 text-5xl font-light pb-6"}>For Buyers</h1>
                <div className={"flex flex-col items-end text-right gap-10 pt-5 border-t"}>
                    {instructions.map((instruction)=>(
                        <div key={instruction.key} className={"flex gap-8"}>
                            <p className={"text-2xl max-w-4xl"}>
                                <span className={"font-bold"}>{instruction.title}: </span>{instruction.description}
                            </p>
                            <p className={"text-5xl font-light underline"}>{instruction.number}</p>
                        </div>
                    ))}
                </div>
        </div>
    )
}

export default ForBuyers