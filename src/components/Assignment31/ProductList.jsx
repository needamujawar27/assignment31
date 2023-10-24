import React,{useState,useEffect} from "react";
import {Grid,TextField,Button} from "@mui/material"
import axios from "axios"
import { ProductItem } from "./ProductItem";

export const ProductList=()=>{
    const [data,setData]=useState([]);
    const [datacopy,setDatacopy]=useState([]);
    const [category,setCategory]=useState([]);
    const [sendcate,setSendcate]=useState([]);
    const getData=async()=>{
    const result=await axios.get("https://fakestoreapi.com/products/");
    const result1=await axios.get("https://fakestoreapi.com/products/categories")
    setData(result.data);
    setDatacopy(result.data);
    setCategory(result1.data);
    };

    useEffect(()=>{
      getData()
    },[]);
    useEffect(()=>{
        const filt=datacopy.filter((item)=>item.category==sendcate);
        setData(filt)
},[sendcate])
return(
        <Grid container spacing={2}>

            <Grid item xs={8}>
                <TextField variant="outlined" fullWidth label="Serach Here"></TextField>
            </Grid>
            <Grid item xs={4}>
                <Button variant="contained" fullWidth color="info" sx={{height:"55px"}}>ADD</Button>
            </Grid>
            {
                category.map((item)=>
                <Grid item xs={3}>
                    <Button onClick={()=>setSendcate(item)} variant="contained" fullWidth>{item}</Button>
                </Grid>
                )
            }
            {
                data.map((item)=>
                <ProductItem item={item}/>
                )
            }

            
        </Grid>
    )
        }