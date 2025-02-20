import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AppProvider } from "./context/AppContext.jsx";

const GOOGLE_CLIENT_ID="967653315336-okjvg8q5e9i3hqlqhc81sdnlruf9ute6.apps.googleusercontent.com"
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        <AppProvider>
            <App />
        </AppProvider>
    </GoogleOAuthProvider>
  </BrowserRouter>,
)
