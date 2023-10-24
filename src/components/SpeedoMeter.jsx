import React,{useState,useEffect} from "react";
import { Grid,Button,Card,CardContent,Typography } from "@mui/material";


export const SpeedoMeter=()=>{
    const [curr,setCurr]=useState(+5);
    const [clr,setClr]=useState("");

    useEffect(()=>{
   if (curr>5 && curr<=20){
    setClr("green")
    }else if (curr>21 && curr <=30){
        setClr("blue")
    }else if (curr >31 && curr <=40){
        setClr("yellow")
    }else if (curr>41 && curr <=50)
        setClr("red")
    },[curr])
    
    
    return(
    <Grid container spacing={2}>
        <Grid item xs={12} sx={{textAlign:"center"}}>
            <Typography variant="h3" >Speedo Meter</Typography>
        </Grid>
        <Grid item xs={4}>
            <Button onClick={(e)=>curr>0 && setCurr(curr-5)} disabled={curr===0} variant="contained" color="info" fullWidth>Minus -</Button>
        </Grid>
        <Grid item xs={4} sx={{textAlign:"center",color:"green"}}>
            <Typography variant="h4">{curr}</Typography>
        </Grid>
        <Grid item xs={4}>
            <Button onClick={(e)=>curr<50 && setCurr(curr+5)} disabled={curr===50} variant="contained" color="info" fullWidth>Plus +</Button>
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
            <Card sx={{height:"200px",borderRadius:"25px",width:"750px",marginTop:"30px",border:"4px solid black",bgcolor:clr}}>
                <CardContent>
               {setClr}
                </CardContent>
            </Card>
        </Grid>
        <Grid item xs={3}></Grid>
    </Grid>
    )
}