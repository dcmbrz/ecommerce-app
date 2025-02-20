import React from "react";
import Navbar from "./components/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner"
import Home from "./pages/HomeSection/Home.jsx"
import SignIn from "./pages/AuthPages/SignIn.jsx"
import SignUp from "./pages/AuthPages/SignUp.jsx"
import Explore from "./pages/Explore.jsx"
import Cart from "./pages/Cart.jsx";
import Favorites from "./pages/Favorites.jsx";
import GoogleSignUp from "./pages/GoogleSignUp.jsx";
import VerifyOtp from "@/pages/AuthPages/VerifyOtp.jsx";
import ResetPassword from "@/pages/AuthPages/ResetPassword.jsx";

function App() {

  return (
      <div className={""}>
          <Toaster/>
        <Navbar/>
          <Routes>
              <Route path={'/'} element={<Home/>}/>
              <Route path={'/sign-up'} element={<SignUp/>}/>
              <Route path={'/sign-in'} element={<SignIn/>}/>
              <Route path={'/explore'} element={<Explore/>}/>
              <Route path={'/cart'} element={<Cart/>}/>
              <Route path={'/favorites'} element={<Favorites/>}/>
              <Route path={'/sign-up/google'} element={<GoogleSignUp/>}/>
              <Route path={'/verify'} element={<VerifyOtp/>}/>
              <Route path={'/reset-password'} element={<ResetPassword/>}/>
          </Routes>
      </div>
  )
}

export default App
