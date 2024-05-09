import React, { useEffect, useState } from 'react'

function Stopwatch() {
    const [time,setTime] = useState(0);
    const [flag,setFlag] = useState(false)

    function handleTime(){
        setFlag(prev => !prev)
    }

    function handleReset(){
        setFlag(false)
        setTime(0)
    }
    
    function formatTime(seconds){
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
    };

   useEffect(() => {
    let timeId;
    if(flag){
        timeId = setInterval(() => {
            setTime(prev => prev + 1)
        },1000)
    } else {
        clearInterval(timeId)
        // setTime(0)
    }
   
    return () => clearInterval(timeId)
   }, [flag])


   const stopwatchStyle ={
    border: "1px solid black",
    width: "50%",
    padding:"20px",
    borderRadius: "10px",
    margin: "auto"
   }
   

  return (
    <div style={stopwatchStyle}>
        <h3>Stopwatch</h3>
        <p>Time {formatTime(time)}</p>
        <div>
            <button onClick={() => handleTime()}>{!flag ? "start" : "stop"}</button>
            <button onClick={() => handleReset()}>Reset</button>
        </div>
    </div>
  )
}

export default Stopwatch