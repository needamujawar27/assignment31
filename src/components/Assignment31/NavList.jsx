import React,{useState} from "react";
import { NavItem } from "./NavItem";
import {Grid,Card,CardContent} from "@mui/material"
import { NavData } from "./Data/NavData";

export const NavList=()=>{
  const [data,setData]=useState(NavData);
    return(
          <Card>
          <CardContent>
        <Grid container spacing={2}>
                {
                  data.map((item)=>
                  <NavItem item={item}/>
                  )
                }
        </Grid>
                </CardContent>
                </Card>
    )
}