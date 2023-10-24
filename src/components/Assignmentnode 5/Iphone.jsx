import React,{useState,useEffect} from "react";
import {Grid,Card,CardContent} from "@mui/material"
import axios from "axios";

export const Iphone=()=>{
    const[data,setData]=useState([]);
    const getData= async()=>{
    const result=await axios.get("http://localhost:4050/iphone");
    setData(result.data)
    }
    useEffect(()=>{
      getData()
    },[])
    return(
  <Grid container spacing={2} sx={{marginTop:"20px"}}>
     {
        data.map((item)=>
       <Grid item xs={6}>
        <Card sx={{height:"100px",textAlign:"center" ,fontSize:"20px",fontWeight:"bolder",marginTop:"10px"}}>
            <CardContent>
                {item.toUpperCase()}
            </CardContent>
        </Card>
       </Grid>

        )
     }
  </Grid>
    )
}