import React,{useState,useEffect}from "react";
import { Button, Grid } from "@mui/material";
import axios from "axios";

export const CateList=({handleClick})=>{
    const [cate,setCate]=useState([]);
    const getApi=async()=>{
    const result=await axios.get("http://localhost:8080/category");
    setCate(result.data);
    }
    useEffect(()=>{
        getApi();
    },[])
    return(
   <Grid item xs={12}>
     {
        cate.map((item)=>
            <Button sx={{marginLeft:10}} variant="contained" color="secondary" onClick={()=>{handleClick(item)}} >{item}</Button>
        )
     }
   </Grid>
    )
}