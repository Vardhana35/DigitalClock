import React, { useState } from 'react';
function DigitalClock() {
    let time = new Date().toLocaleTimeString();
    const [T, setT] = useState(time);
    const updateTime = () => {
        let time = new Date().toLocaleTimeString();
        setT(time);
    }
    setInterval(updateTime, 1000);
    return (<div>
        <h1>{T}</h1>
    </div>)
}
export default DigitalClock;