import React,{useState} from "react";
import {Grid,TextField,Button, CardContent,Card} from "@mui/material"


export const Dynamic=()=>{
    const[data,setData]=useState([]);
    const[clr,setClr]=useState("");
    return(
   <Grid container spacing={2}>
    <Grid item xs={12} sx={{fontSize:"30px",textAlign:"center"}}>
        <h4>Get Field Dynamic</h4>
    </Grid>
    <Grid item xs={8}>
        <TextField onChange={(e)=>setClr(e.target.value)} variant="outlined" label="Type Color Name" fullWidth></TextField>
    </Grid>
    <Grid item xs={4}>
        <Button onClick={()=>setData([...data,clr])}variant="contained" fullWidth sx={{height:"55px"}}>Add</Button>
    </Grid>
    {
        data.map((item)=>
        <Grid item xs={3}>
            <Card sx={{borderRadius:"250px",height:"200px",width:"200px",bgcolor:item,border:"2px solid black"}}>
                <CardContent></CardContent>
            </Card>
        </Grid>

        )
    }
   </Grid>
    )
}