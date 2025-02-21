import {useAppContext} from "@/context/AppContext.jsx";

export default function Explore() {
    const { user } = useAppContext();
    console.log(user);
    return (
        <div>
            explore page
        </div>
    )
}