import React from 'react'
import {useSelector} from "react-redux"
export default function Result() {
    const count=useSelector((a)=>a.count)
  return (
   <>
   <h1>{count}</h1>
   </>
  )
}
