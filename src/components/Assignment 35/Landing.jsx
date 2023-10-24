import React from "react";
import {Card,CardContent} from "@mui/material"
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { TextComp } from "./TextComp";
import { TodoList } from "./TodoList";
import { NavList } from "./NavList";
export const Landing=()=>{
    return(
        <Card sx={{height:"100vh",bgcolor:"whitesmoke"}}>
      <CardContent>
     <BrowserRouter>
     <NavList/>
     <Routes>
        <Route path="/" element={<TextComp/>}/>
        <Route path="/todo" element={<TodoList/>}/>
     </Routes>
     </BrowserRouter>
     </CardContent>
     </Card>
    )
}