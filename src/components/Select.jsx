"use client"
import React, { useState } from 'react'

const Select = ({word}) => {
    const [select,setSelect]=useState(false);
  return (
    <div onClick={()=>setSelect(!select)} className={select ? "word word-on" : "word word-off"}>{word}</div>
  )
}

export default Select