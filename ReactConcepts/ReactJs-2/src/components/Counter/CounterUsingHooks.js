import React, {useState, useEffect } from 'react';

const Counter = () => {
    const [count, setCounter] = useState(0)

    useEffect(() => {
        document.title = `Chats(${count})`
    },[count])

    const incrementCounter = () => {
        let incCount = count + 1
        setCounter(incCount)
    }
    const decrementCounter = () => {
        let incCount = count - 1
        if (incCount > 0) {            
            setCounter(incCount)
        } else {
            setCounter(0)
        }
    }
    const incrementCounterBy5 = () => {
        let incCount = count + 5
        setCounter(incCount)
    }

    return(
        <>
            <div>Counter</div>
            <h1 className='display-3'>{count}</h1>
            <button onClick = {()=>incrementCounter()}>Increment</button><br/><br/>
            <button onClick = {()=>decrementCounter()}>Decrement</button><br/><br/>
            <button onClick = {()=>incrementCounterBy5()}>IncrementBy5</button>
        </>
    )
}
export default Counter