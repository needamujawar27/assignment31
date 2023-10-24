import React from "react";
import { Grid } from "@mui/material";
import { NavItem } from "./NavItem";
import { NavData } from ".";

export const Nav=()=>{
    return(
    <Grid container spacing={2}>
     {
        NavData.map((item)=>
        <NavItem item={item}/>
        )
     }
    </Grid>
    )
}