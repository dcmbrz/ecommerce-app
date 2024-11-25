import React, { useState } from "react";
import { Plus } from "lucide-react";

function ConnectStudents() {
    const info = [
        {
            id: 1,
            header: "Create a Profile",
            description: "Sign up, set up your profile, and start listing your products or services",
        },
        {
            id: 2,
            header: "Browse or List Items",
            description: "Explore products or services available near you, or upload your own listings",
        },
        {
            id: 3,
            header: "Message and Pay In-App",
            description: "Connect with other students, ask questions, and securely pay directly through our platform",
        },
        {
            id: 4,
            header: "Get Notified",
            description: "Set alerts for products you’re interested in or for services with limited availability",
        },
        {
            id: 5,
            header: "Build Your Network",
            description: "Follow your favorite sellers, leave reviews, and be part of a growing student community!",
        },
        {
            id: 6,
            header: "Manage Your Listings",
            description: "Easily edit or remove your products and services, track sales, and keep your profile up to date",
        },
    ];

    const [openSections, setOpenSections] = useState(
        info.reduce((acc, item) => {
            acc[item.id] = true; // Set each section to true (open)
            return acc;
        }, {})
    );

    const handleToggle = (id) => {
        setOpenSections((prev) => ({
            ...prev,
            [id]: !prev[id], // Toggle the specific section by its id
        }));
    };

    return (
        <div className="flex flex-col items-center justify-center text-center py-32 gap-5">
            <h1 className="text-5xl font-medium">We Connect Students</h1>
            <h2 className="text-xl font-light max-w-4xl text-gray-500">
                Join a growing community of students buying. Simplify your life, make money, and support fellow students along
                the way!
            </h2>
            <div className="flex flex-wrap justify-center max-w-7xl py-24 justify-center gap-14">
                {info.map((data) => (
                    <div key={data.id} className="w-full max-w-md">
                        <div
                            className="flex items-start justify-between group cursor-pointer"
                            onClick={() => handleToggle(data.id)}
                        >
                            <div className="flex items-start gap-6">
                                {!openSections[data.id] ? (
                                    <Plus
                                        className="ml-1 transform transition-transform duration-500 ease-in-out opacity-100"
                                    />
                                ) : (
                                    <Plus
                                        className="rotate-180 ml-1 transform transition-transform duration-500 ease-in-out"
                                    />
                                )}
                                <h3 className="text-2xl font-medium">{data.header}</h3>
                            </div>
                        </div>
                        <div
                            className={`transition-[max-height] duration-700 ease-in-out overflow-hidden ${
                                openSections[data.id] ? "max-h-40" : "max-h-0"
                            }`}
                        >
                            <div className="ml-14 text-sm md:text-lg font-light text-gray-600 transition-opacity duration-700 ease-in-out text-start">
                                <p>{data.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ConnectStudents;
