import React,{useState,useEffect} from "react";
import {Grid,Typography,Card,CardContent} from "@mui/material"
import axios from "axios";


export const Maha=()=>{
    const [data,setData]=useState([]);
    const getData=async ()=>{
    const result=await axios.get("http://localhost:4040/maha");
    setData(result.data);    
    }
    useEffect(()=>{
    getData();
    },[])
    
    return(
 <Grid container spacing={2} sx={{marginTop:"20px"}}>
    <Grid item xs={12}>
        <Typography variant="h4" sx={{color:"orange",textAlign:"center"}}>Maharashtra Cities</Typography>
    </Grid>
    {
        data.map((item)=>
        <Grid item xs={4}>
            <Card sx={{height:"120px",bgcolor:"darkorange",color:"white",fontWeight:"bold",fontSize:"30px",textAlign:"center",paddingTop:"20px"}}>
                <CardContent>
                    {item}
                </CardContent>
            </Card>
        </Grid>
        )
    }
 </Grid>
    )
}
