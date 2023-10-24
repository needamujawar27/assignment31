import React, { useState } from "react";
import {Grid,Button,Card,CardContent,TextField} from "@mui/material"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
export const TodoList=()=>{
    const [data,setData]=useState([])
    const [msg,setMsg]=useState("")
    return(
<Grid container spacing={2}>
    <Grid item xs={8}>
        <TextField onChange={(e)=>setMsg(e.target.value)} variant="outlined" label="Enter Thoughts of The Day" fullWidth></TextField>
    </Grid>
    <Grid item xs={4}>
        <Button onClick={()=>setData([...data,msg])} variant="contained"  fullWidth sx={{height:"55px"}} >Add Thoughts</Button>
    </Grid>
    <Grid item xs={3}></Grid>
    <Grid item xs={6}>
            {
                data.map((item)=>
    <Card sx={{bgcolor:"black",color:"white",margin:"10px"}}>
        <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={11}>{item} </Grid>
                    <Grid item xs={1}>
                   < DeleteOutlineIcon />
                    </Grid>
                </Grid>
        </CardContent>
    </Card>
                )
            }
    </Grid>
    <Grid item xs={3}></Grid>
</Grid>
    )
}