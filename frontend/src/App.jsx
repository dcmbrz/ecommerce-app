import React from "react";
import Navbar from "./components/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomeSection/Home.jsx"
import SignIn from "./pages/SignIn.jsx"
import SignUp from "./pages/SignUp.jsx"
import Explore from "./pages/Explore.jsx"

function App() {

  return (
      <div className={""}>
        <Navbar/>
          <Routes>
              <Route path={'/'} element={<Home/>}/>
              <Route path={'/sign-up'} element={<SignUp/>}/>
              <Route path={'/sign-in'} element={<SignIn/>}/>
              <Route path={'/explore'} element={<Explore/>}/>
          </Routes>
      </div>
  )
}

export default App
