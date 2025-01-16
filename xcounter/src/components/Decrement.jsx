import React from "react";

export default function Decrement({setCount}){
    const handleDecrement=()=>{
        setCount((prevValue)=>{
            return prevValue-1;
        })
    }
    return(
        <button onClick={handleDecrement}>Decrement</button>
    )
}