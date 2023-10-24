import React from "react";
import { Grid } from "@mui/material";
import { NavItem } from "./NavItem";
import { Navi } from "./index";

export const NavList=()=>{
return(
<Grid container spacing={2} sx={{marginBottom:3}}>
{
    Navi.map((item)=>
        <NavItem item={item}/>
    )
}
</Grid>
)
}
