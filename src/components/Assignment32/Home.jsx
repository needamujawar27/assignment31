import React,{useState} from "react";
import {Card,CardContent,Grid,Button,TextField} from "@mui/material"

export const Home=()=>{
    const [data,setData]=useState([]);
    const [name,setName]=useState("");
    return(
      <Card sx={{marginTop:"50px"}}>
        <CardContent>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <h3>To Do List</h3>
                </Grid>
                <Grid item xs={12}>
                    <TextField onChange={(e)=>setName(e.target.value)} variant="outlined" label="Type Here...." fullWidth ></TextField>
                </Grid>
                <Grid item xs={12}>
                    <Button onClick={()=>setData([...data,name])}  variant="contained" fullWidth>Add</Button>
                </Grid>
                {
                    data.map((item)=>
                   <Grid item xs={12} textAlign={"center"}>{item.toUpperCase()}</Grid> 
                    )
                }
            </Grid>
        </CardContent>
      </Card>  
    )
}