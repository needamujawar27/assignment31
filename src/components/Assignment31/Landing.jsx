import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { NavList } from "./NavList";
import { Home } from "./Home";
import { About } from "./About";
import { Contact } from "./Contact";
import { ProductList } from "./ProductList";

export const Landing=()=>{
    return(
        <BrowserRouter>
        <NavList/>
        <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/con" element={<Contact/>}/>
         <Route path="/prod" element={<ProductList/>}/>
        </Routes>
        </BrowserRouter>
    )
}