import React from "react";
import { Grid,Card,CardContent,Rating} from "@mui/material";


export const ProdItem=({item})=>{
    return(
<Grid item xs={4}>
<Card sx={{color:"white",bgcolor:"black",marginTop:"20px",borderRadius:"0 25px 0 25px",margin:"10px"}}>
    <CardContent>
        <h2>{item.name}</h2>
        <img src={item.image} alt=""  height={150} width={150}/>
        <h4>{`Price:${item.price}`}</h4>
        <h5 >10%Discount</h5>
        <Card sx={{width:"150px",height:"60px",borderRadius:"25px"}}>
            <CardContent>
        <Rating value={item.rating}></Rating>

            </CardContent>
        </Card>
    </CardContent>
</Card>
</Grid>
    )
}