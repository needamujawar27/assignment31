import React from "react";
import {Card, CardContent, Grid,Button,Rating} from "@mui/material";

export const ProducItem=({item})=>{
    return(
   <Grid item xs={3}>
<Card sx={{textAlign:"center"}}>
    <CardContent>
     <h4>{item.name}</h4>
        <img src={item.image} alt=""  height={200} width={200}/>
         <h4>{item.category}</h4>
         <Button variant="contained" color="success">{item.price}</Button>
         <br />
        <Rating value={item.rating}></Rating>

    </CardContent>
</Card>
   </Grid>
    )
}