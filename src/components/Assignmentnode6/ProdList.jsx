import React,{useState,useEffect}from "react";
import { Button, Grid } from "@mui/material";
import axios from "axios";
import { ProdItem } from "./ProdItem";

 export const ProdList=()=>{
    const [data,setData]=useState([]);
    const [datacopy,setDatacopy]=useState([]);
    const [category,setCategory]=useState([]);
    const[sendcate,setSendcate]=useState([]);
    const getData=async()=>{
    const result=await axios.get("http://localhost:8070/product");
    const result1=await axios.get("http://localhost:8070/category");
    setData(result.data);
    setDatacopy(result.data);
    setCategory(result1.data);
    };
     
    useEffect(()=>{
      getData()
    },[]);
    useEffect(()=>{
      const filt=datacopy.filter((item)=>item.category===sendcate);
      setData(filt)
    },[sendcate])
    return(
      <React.Fragment>
        <Grid container spacing={2} align="center">
          {
            category.map((item)=>{
              return(
                <Grid item xs={3} >
                  <Button onClick={()=>setSendcate(item)} variant="contained" fullWidth color="warning">{item}</Button>
                </Grid>
              )
            })
          }
    {
      data.map((item)=>
      <ProdItem item={item}/>
      )
    }

  </Grid>
      </React.Fragment>
    )
  }