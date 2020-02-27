import React, { useState } from 'react';


const Timer = () => {

    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    function toggle() { 
        setIsActive(!isActive); 
    }

    function reset(){
        setSeconds(0);
        setIsActive(false);
    }

    return ( 
        <div className='app'>
            <div className='time'>
                {seconds}Seconds 
            </div>
            <div className='row'>
                <button className={`start-button ${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
                    {isActive ? 'Pause' : 'Start'}
                </button>
                <button className='reset-button' onClick={reset}>
                    Reset
                </button>
            </div>
        </div>
    )
}

export default Timer;