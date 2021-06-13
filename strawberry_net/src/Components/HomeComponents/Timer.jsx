import React from 'react'
import { useState, useEffect } from 'react';

export const Timer = () => {
    // const {initialMinute = 0,initialSeconds = 0} = props;
    const [ hours, setHours ] = useState(3);
    const [ minutes, setMinutes ] = useState(59);
    const [seconds, setSeconds ] =  useState(12);
    useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    if (hours === 0) {
                        clearInterval(myInterval)
                    }
                    else {
                        setHours(hours - 1);
                        setMinutes(59)
                        setSeconds(59)
                    }
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } 
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    });

    return (
        <>
        { minutes === 0 && seconds === 0
            ? null
                : <>{hours<10? `0${hours}`:hours}h: {minutes< 10 ?  `0${minutes}` : minutes}m:{seconds < 10 ?  `0${seconds}` : seconds}s!</>
        }
        </>
    )
}
