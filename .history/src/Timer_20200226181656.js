import React, { useState } from 'react';


const Timer = () => {
    
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    return ( 
        <div className='app'>
            <div className='time'>
                Seconds 
            </div>
            <div className='row'>
                <button className='start-button'>
                    Start
                </button>
                <button className='reset-button'>
                    Reset
                </button>
            </div>
        </div>
    )
}

export default Timer;