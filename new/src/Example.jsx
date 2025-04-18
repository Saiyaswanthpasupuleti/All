
import React, { useState, useEffect } from 'react';

const ResultData = () => {
  const [data,SetData]=useState([])
  const [search,setsearch]=useState("")

  useEffect(()=>{
    let result=async ()=>{
      let a=await fetch("https://jsonplaceholder.typicode.com/posts");
      let b=await a.json();
      SetData(b)

    }
    result()

  },[])

  const handleMainData=data.filter((a)=>a.title.toLowerCase().includes(search.toLowerCase())).sort((a,b)=>a.title.localeCompare(b.title))

  const handleDelete=(id)=>{
     SetData(data.filter((item)=>item.id!==id))
     alert("Deleted")

  }
  return (
    <div>
<input type='text' placeholder='Search' value={search} onChange={(e)=>setsearch(e.target.value)}></input>

{handleMainData.length==0?(<h1>No Data</h1>):(handleMainData.map((a,b)=>(
  <>
   <h3>{a.title}</h3>
   <button onClick={()=>handleDelete(a.id)}>Delete</button>
  </>
 
)))}

      
    </div>
  );
};

export default ResultData;

