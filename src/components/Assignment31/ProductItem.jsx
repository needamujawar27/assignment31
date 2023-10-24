import React from "react";
import {Grid,Card,CardContent,Badge,Button} from "@mui/material"

export const ProductItem=({item})=>{
    return(
    <Grid item xs={3}>
        <Card sx={{textAlign:"center"}}>
            <CardContent>
              <Badge badgeContent={item.price} color="secondary">
         <img src={item.image} alt="" height={200} width={200} />
              </Badge>
         
         <h3>{item.title.slice(0,30)}</h3>
         <h3>{item.category}</h3>
            <Grid container spacing={2}>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
            <Button variant="contained" color="warning">Rs:{item.price}</Button>
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={3}>
            <Button  variant="contained" color="success">BUy</Button>
            </Grid>
            <Grid item xs={5}>
            <Button variant="contained" color="secondary">ADD to cart</Button>
            </Grid>
            <Grid item xs={4}>
            <Button variant="contained" color="secondary">Delete</Button>
            </Grid>
            </Grid>
         </CardContent>
         </Card>
    </Grid>
    )
}