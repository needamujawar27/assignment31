import React,{useState} from "react";
import {Grid,Card,CardContent,Button} from "@mui/material"
import Switch from '@mui/material/Switch';



export const BoxList=()=>{
    const [clr,setClr]=useState(false)

    return(
    <Card sx={{width:'900px',marginLeft:"350px",marginTop:"40px"}}>
    <CardContent>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Card sx={{height:"400px",bgcolor: clr ? "red":"green"}}>
                    <CardContent>

                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={5}>
            </Grid>
            <Grid item xs={2}>
            <Switch {...clr} onclick={()=>setClr (!clr)} defaultChecked />
            {clr ? "on":"off"}
                {/* <Button  onClick={()=>setClr(!clr)} variant="contained" fullWidth>{clr ? "on":"off"}</Button> */}
            </Grid>
        </Grid>
    </CardContent>
    </Card>
    )
}