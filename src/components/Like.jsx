"use client"
import React, { useState } from 'react'
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
const Like = () => {
    const [Like,setLike]=useState(null);
  return (
    <div className="sub-box">
    <div className="sub-box-like" onClick={()=>setLike(0)}>
      <div className="like"><AiFillLike color={Like===0 ? "aquamarine": "lightGrey"}/></div>
      <div>Yes</div>
    </div>
    <div className="sub-box-like" onClick={()=>setLike(1)}>
      <div className="like"><AiFillDislike color={Like===1 ? "aquamarine": "lightGrey"}/></div>
      <div>No</div>
    </div>
  </div>
  )
}

export default Like