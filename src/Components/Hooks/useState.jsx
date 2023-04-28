import React, { useState } from 'react'
import style from "./style.css"

const UseState = () => {
  // const initialData=0;
  const [NewNum,setNewNum] = useState(0);
  return (
    <div className="center_div">
      <p>{NewNum}</p>
      <button class='button2' onClick={()=> setNewNum(NewNum+1)}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        INCR
      </button>
      <button class='button2' onClick={()=> NewNum>0? setNewNum(NewNum-1): setNewNum(0)}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        DECR
      </button>
    </div>
  )
}

export default UseState;