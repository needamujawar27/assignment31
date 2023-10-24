import React,{useState,useEffect} from "react";
import {Grid,Card,CardContent} from "@mui/material"
export const TableList=()=>{

 const obj = [
        {
          Id: "1",
          Name: "user21",
          Age: "26",
          Work: "Programmer",
          City: "Pune",
        },
        {
          Id: "2",
          Name: "user22",
          Age: "28",
          Work: "UX Designer",
          City: "Mumbai",
        },
        {
          Id: "3",
          Name: "user23",
          Age: "29",
          Work: "Admin",
          City: "Banglore",
        },
        {
          Id: "4",
          Name: "user24",
          Age: "28",
          Work: "UX Designer",
          City: "Mumbai",
        },
        {
          Id: "5",
          Name: "user25",
          Age: "30",
          Work: "UX/UI Designer",
          City: "Pune",
        },
        {
          Id: "6",
          Name: "user26",
          Age: "25",
          Work: "HR",
          City: "Delhi",
        },
        {
          Id: "7",
          Name: "user27",
          Age: "26",
          Work: "Tester",
          City: "Delhi",
        },
        {
          Id: "8",
          Name: "user28",
          Age: "25",
          Work: "Accountant",
          City: "Pune",
        },
        {
          Id: "9",
          Name: "user29",
          Age: "28",
          Work: "Scrum Master",
          City: "Pune",
        },
    
    
        {
          Id: "10",
          Name: "user30",
          Age: "25",
          Work: "Backend Developer",
          City: "Mumbai",
        },
      ];
      const [itemHeaders,setItemHeaders]=useState([]);
      const [itemRows,setItemRows]=useState([]);
      
      useEffect(()=>{
      const keys=Object.keys(obj[0]);
      setItemHeaders(keys);

      const values=obj.map((item)=>Object.values(item)) 
      setItemRows(values);
      },[obj])
    return(
        <Card sx={{bgcolor:"cadetblue",margin:"20px"}}>
            <CardContent>
                <Grid container spacing={2}>
{
    itemHeaders.map((headers,index)=>
    <Grid item xs keys={index} sx={{bgcolor:"grey"}}>
        <h2>{headers}</h2>
    </Grid>
    )
}
{
    itemRows.map((rows,index)=>
      <Grid container spacing={1} key={index} sx={{margin:"15px"}}>
            {
                rows.map((value,idx)=>
                <Grid item xs keys={idx}>
                    {value}
                </Grid>
                )
            }
        
      </Grid>
    )
}
                </Grid>
            </CardContent>
        </Card>
    
    )
}
   
