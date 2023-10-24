import React,{useState} from "react";
import {Grid,Button,TextField,Typography} from "@mui/material"


export const TextComp=()=>{
    const [data,setData]=useState("");
    const handleUpper=()=>{
        setData(data.toUpperCase())
    }
    const handleLower=()=>{
        setData(data.toLowerCase())
    }
    const handleClear=()=>{
        setData("")
    }
    return(
        <Grid container spacing={2} sx={{width:"1000px",marginLeft:"230px"}}>
            <Grid item xs={12}>
                <TextField value={data} onChange={(e)=>setData(e.target.value)} variant="outlined" label="Enter the text here..." fullWidth></TextField>
            </Grid>
            <Grid item xs={2}>
                <Button onClick={handleUpper} variant="contained" fullWidth color="success">uppercase</Button>
            </Grid> 
            <Grid item xs={2}>
                <Button onClick={handleLower} variant="contained" fullWidth color="success">Lowercase</Button>
            </Grid>
            <Grid item xs={2}>
                <Button onClick={handleClear} variant="contained" fullWidth color="error">Clear</Button>
            </Grid>
            <Grid item xs={6}></Grid>
            <Grid item xs={12}>
            <Typography variant="h6"><b>Previous Your Text</b></Typography>
            <p style={{color:"grey"}}>{data.length===0 ? "Enter The Text to Preview" : data}</p>
            </Grid>

            
        </Grid>     
    )

}
