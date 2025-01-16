import React from "react";

export default function Increment({setCount}){
    const handleIncrement=()=>{
        setCount((prevValue)=>{
            return prevValue+1;
        })
    }
    return(
        <button onClick={handleIncrement}>Increment</button>
    )
}