import React, { useEffect, useState } from 'react'

function Stopwatch() {
    const [time,setTime] = useState(10);
    const [flag,setFlag] = useState(false)

    function handleTime(){
        setFlag(prev => !prev)
    }

    function handleReset(){
        setFlag(false)
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
        setTime(0)
    }
   
    return () => clearInterval(timeId)
   }, [flag])



   

  return (
    <div>
        <h3>Stopwatch</h3>
        <p>{formatTime(time)}</p>
        <div>
            <button onClick={() => handleTime()}>{!flag ? "start" : "stop"}</button>
            <button onClick={() => handleReset()}>Reset</button>
        </div>

    </div>
  )
}

export default Stopwatch