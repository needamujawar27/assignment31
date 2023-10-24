import React,{useState,useEffect} from "react";
import { Button, Grid, Rating, TextField } from "@mui/material";
import Slider from '@mui/material/Slider';
import axios from "axios";
import { ProducItem } from "./ProducItem";
import { CateList } from "./CateList";
export const ProducList=()=>{
    const[data,setData]=useState([]);
    const[datacopy,setDatacopy]=useState([]);
    const[text,setText]=useState("");
    const [rate,setRate]=useState("");
    const [slide,setSlide]=useState("");
   // console.log("rating",rate)//
    const getData=async()=>{
    const result=await axios.get("http://localhost:8080/sales");
    setData(result.data);
    setDatacopy(result.data);
    }
    useEffect(()=>{
     getData()
    },[]);

    const handleClick=(item)=>{
    const filt=datacopy.filter((elem)=>elem.category===item)
    setData(filt)
    };
    ////updating phase for textField & rating//
    useEffect(()=>{
    const search=datacopy.filter((item)=>
    item.name.toLowerCase().includes(text.toLowerCase())
    ///for ranging price we have taken or ///
    ||
    item.price.toString().includes(Number(text))
    );
    
    setData(search);
    },[text])
    useEffect(()=>{
     const filt=datacopy.filter((elem)=>elem.rating===Number(rate));
     setData(filt)
    },[rate]);
    useEffect(()=>{
        if (slide>100 && slide<=1000){
         setSlide("green")
         }else if (slide>1000 && slide <=2000){
             setSlide("blue")
         }else if (slide >2000 && slide <=3000){
             setSlide("yellow")
         }else if (slide>3000 && slide<=4000)
             setSlide("red")
         },[slide])

    
    return(
<Grid container spacing={2}>
    <Grid item xs={8}>
        <TextField onChange={(e)=>setText(e.target.value)}  variant="outlined" fullWidth label="Search Here..."></TextField>
    </Grid>
    {/* <Grid item xs={4}>
        <Rating onChange={(e)=>setRate(e.target.value)}/>
    </Grid> */}
    <Grid item xs={4}>
    <Slider
       onChange={(e)=>slide<1000 && setSlide (slide +4000) }
       defaultValue={5000}
        // ||slide>5000 && setSlide (slide-4000)  }
        aria-label="Rating"
        color="secondary"
      />
    </Grid>

    <CateList handleClick={handleClick}/>
 {
    data.map((item)=>
    <ProducItem item={item}/>
    )
 }
</Grid>
    )
}