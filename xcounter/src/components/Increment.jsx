import React from "react";

export default function Increment({setValue}){
    const handleIncrement=()=>{
        setValue((prevValue)=>{
            return prevValue+1;
        })
    }
    return(
        <button onClick={handleIncrement}>Increment</button>
    )
}