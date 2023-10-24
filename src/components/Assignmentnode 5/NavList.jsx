import React from "react";
import {Grid} from "@mui/material"
import { NavItem } from "./NavItem";
import { Navdata } from ".";

export const NavList=()=>{
    return(
    <Grid container spacing={2}>
                {
                 Navdata.map((item)=>
                <NavItem item={item}/>

                 )
                }
    </Grid>
    )
}