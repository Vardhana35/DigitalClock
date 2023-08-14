import React,{useState,useEffect} from "react";
function Clock1()
{
    const [date,setDate]=useState(new Date())
    function refreshHook()
    {
        setDate(new Date());
    }
    useEffect(()=>{
        const timerId=setInterval(refreshHook,1000)
        return function cleanUp(){
            clearInterval(timerId)
        }
    })
    return(<span>
        {date.toLocaleTimeString()}
    </span>)

}

export default Clock1;