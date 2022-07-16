import React, {useState, useEffect} from 'react';

const BulbOnOffUsingHooks = () => {
    const [bulbStatus, setBulbStatus] = useState(true)
    
    const toggleBtn = () => {
        let status = !bulbStatus
        setBulbStatus(status)
    }
    return (
        <>
            <img
              src={
                bulbStatus
                  ? "https://www.w3schools.com/js/pic_bulbon.gif"
                  : "https://www.w3schools.com/js/pic_bulboff.gif"
              }
              alt="bulb"
            />
            <br />
            <button onClick={()=> toggleBtn()}>On/Off</button>
        </>
    )
}
export default BulbOnOffUsingHooks
