import React from 'react'
import {useDispatch} from "react-redux"
import { increment,decrement ,incbyfive,decbyfive,latency} from '../RRedux/Action/Actions'
import Result from './Result'
export default function Page1() {
    const dispatch=useDispatch()
  return (
  <>
  <button onClick={()=>dispatch(increment())}>Click here to increase 1</button>
  <button onClick={()=>dispatch(decrement())}>Click here to decrease 1</button>
  <button onClick={()=>dispatch(incbyfive(5))}>Click here to increase 5</button>
  <button onClick={()=>dispatch(decbyfive(5))}>Click here to decrease 5</button>
  <button onClick={()=>dispatch(latency())}>Click here to see it is latency</button>
<Result/>
  </>
  )
}
