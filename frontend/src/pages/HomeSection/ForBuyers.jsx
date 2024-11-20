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
        <div className={""}>
            <h1 className={"items-center"}>For Buyers</h1>
            <div className={"flex flex-col items-end"}>
                <div className={"flex items-end"}>
                    <p>Find Unique Products:</p>
                    <p>Discover secondhand furniture, textbooks, clothing, and more—perfect for a student budge</p>
                    <p>05</p>
                </div>
            </div>
        </div>
    )
}

export default ForBuyers