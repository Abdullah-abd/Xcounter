import React from "react";

export default function Decrement({setValue}){
    const handleDecrement=()=>{
        setValue((prevValue)=>{
            return prevValue-1;
        })
    }
    return(
        <button onClick={handleDecrement}>Decrement</button>
    )
}