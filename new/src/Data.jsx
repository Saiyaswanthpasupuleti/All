import React, { useEffect, useState } from "react";
import ResultData from "./Example";

export default function Data() {
  // const [data,setdata]=useState([])
  // const [fetchs,setfetch]=useState("")
  // useEffect(()=>{
  //   let result=async ()=>{
  //     let a=await fetch("https://fakestoreapi.com/products");
  //     let b=await a.json()
  //     setdata(b)

  //   }
  //   result()
  // },[])

  // const mainData=data.filter((a)=>a.title.toLowerCase().includes(fetchs.toLowerCase())).sort((a,b)=>b.title.localeCompare(a.title))
 
return(
    <>
    {/* <input type="text" placeholder="search" value={fetchs} onChange={(e)=>setfetch(e.target.value)}></input>
    {mainData.length==0?(<p>No data</p>):(mainData.map((a)=>(<h6>{a.title}</h6>)))} */}


<ResultData name="Sai Yaswangh"/>
</>

  
)
  
}
