import { createContext, useContext, useState } from "react";
import {toast} from "sonner";

// Create the context
const AppContext = createContext();

function useAuth() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    const login = async () => {
        try {
            const res = await fetch('http://localhost:4000/api/user/get-data', {
                credentials: 'include'  // Ensure cookies are sent with request
            });
            const data = await res.json();
            console.log(data.userData);
            setUser(data.userData);
            setIsAuthenticated(data.userData.isVerified);
        } catch (err) {
            console.error("Error fetching user data:", err);
        }
    };

    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
    };

    return { isAuthenticated, user, login, logout };
}

// Create the provider component
export const AppProvider = ({ children }) => {
    const auth = useAuth();
    return (
        <AppContext.Provider value={auth}>
            {children}
        </AppContext.Provider>
    );
};

// Custom hook to use the AppContext
export const useAppContext = () => {
    return useContext(AppContext);
};
