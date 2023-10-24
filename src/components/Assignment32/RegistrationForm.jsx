import React,{useState} from "react";
import { Link } from "react-router-dom";
import {Grid,Card,CardContent,Button,TextField, Typography} from "@mui/material"
 export const RegistrationForm=()=>{

    return(
            <Card sx={{width:"380px",marginLeft:"550px",marginTop:"30px"}}>
                <CardContent>
        <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <h3>Registration Form</h3>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField variant="outlined" label="Name" fullWidth></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField variant="outlined" label="Email.id" fullWidth></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField variant="outlined" label="Mobile Number" fullWidth></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField variant="outlined" label="UserName" fullWidth></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField variant="outlined" label="Password" fullWidth></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField variant="outlined" label="Change Password" fullWidth></TextField>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="contained" fullWidth>submit</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="contained" fullWidth>cancel</Button>
                    </Grid>
                    <Grid item xs={12}>
                  <h5> If You Have Already Registered <Link to="/login"><span>Login Here</span></Link></h5>
                    </Grid>
            
        </Grid>
                </CardContent>
            </Card>
    )
}