import React, { useEffect, useState } from 'react'
import style from "./style.css"

const UseEffect = () => {
  // const initialData=0;
  const [NewNum,setNewNum] = useState(0);

  useEffect(()=>{
    document.title=`Chats(${NewNum})`;
  });

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
    </div>
  )
}

export default UseEffect;