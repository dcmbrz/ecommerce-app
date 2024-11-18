import React from "react";
import Navbar from "./components/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomeSection/Home.jsx"
import SignIn from "./pages/SignIn.jsx"
import SignUp from "./pages/SignUp.jsx"

function App() {

  return (
      <div className={"container relative mx-auto"}>
        <Navbar/>
          <Routes>
              <Route path={'/'} element={<Home/>}/>
              <Route path={'/sign-up'} element={<SignUp/>}/>
              <Route path={'/sign-in'} element={<SignIn/>}/>
          </Routes>
      </div>
  )
}

export default App
