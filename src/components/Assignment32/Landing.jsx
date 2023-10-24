import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { RegistrationForm } from "./RegistrationForm";
import { Login } from "./Login";
import { Home } from "./Home";

export const Landing=()=>{
    return(
     <BrowserRouter>
     <Routes>
    <Route path="/" element={<RegistrationForm/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/home" element={<Home/>}/>

     </Routes>
     </BrowserRouter> 
    )
}