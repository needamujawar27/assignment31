import React, { useState } from "react";
import {Grid,Card,Button,CardContent,TextField} from "@mui/material"
import { Link } from "react-router-dom";


export const Login=()=>{
    return(
        <Card sx={{width:"250px",marginLeft:"550px",marginTop:"120px"}}>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12} textAlign={"center"}>
                        <h3>LoginForm</h3>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField variant="outlined" fullWidth sx={{bgcolor:"lightblue"}} label=" Enter Mobile Number"></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField variant="outlined" fullWidth sx={{bgcolor:"lightblue"}} label="Enter Password"></TextField>
                    </Grid>
                    <Grid item xs={6} >
                        <Link to="/home">
                        <Button variant="contained" fullWidth>submit</Button>
                        </Link>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="contained" fullWidth>cancel</Button>
                    </Grid>
                    <p>if you don't have and account? <Link to="/"><span>Register Here</span></Link></p>
                </Grid>
            </CardContent>
        </Card>
    )
}