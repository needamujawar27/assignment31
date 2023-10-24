import React from "react";
import {Card,CardContent} from "@mui/material"
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Nav } from "./Nav";
import { Maha } from "./Maha";
import { Tele } from "./Tele";
import { Andhra } from "./Andhra";
import { Punjab } from "./Punjab";
export const Landing=()=>{
    return(
    <BrowserRouter>
    <Card sx={{bgcolor:"lightgreen"}}>
        <CardContent>
    <Nav/>
        </CardContent>
    </Card>
    <Routes>
    <Route path="/maha" element={<Maha/>}/>
    <Route path="/te" element={<Tele/>}/>
    <Route path="/ap" element={<Andhra/>}/>
    <Route path="/pb" element={<Punjab/>}/>
    </Routes>
    </BrowserRouter>
    )
}