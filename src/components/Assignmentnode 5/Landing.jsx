import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import{Card,CardContent} from "@mui/material"
import { NavList } from "./NavList";
import { Iphone } from "./Iphone";
import { Samsung } from "./Samsung";
import { Redmi } from "./Redmi";
import { Realme } from "./Realme";
import { Oneplus } from "./Oneplus";

export const Landing=()=>{
    return(
 <BrowserRouter>
 <Card sx={{bgcolor:"darkblue"}}>
    <CardContent>
 <NavList/>
    </CardContent>
 </Card>
 <Routes>
    <Route path="/iphone" element={<Iphone/>}/>
    <Route path="/samsung" element={<Samsung/>}/>
    <Route path="/redmi" element={<Redmi/>}/>
    <Route path="/realme" element={<Realme/>}/>
    <Route path="/oneplus" element={<Oneplus/>}/>
 </Routes>
 </BrowserRouter>
    )
}