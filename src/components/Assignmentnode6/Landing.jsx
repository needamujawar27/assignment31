import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { ProdList } from "./ProdList";

export const Landing=()=>{
    return(
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<ProdList/>}/>
   </Routes>
   </BrowserRouter>
    )
}