import React from 'react'
import { useState } from 'react'

export default function StateHook() {
    let [count, setCount] = useState(0);
    let increaseCount = () => {
        setCount(count + 1)
    }
    return (
        <div>
            Count: {count}
            <br />
            {<button onClick={() => setCount(count + 1)}>Increase count +</button>}
            {/* <button onClick={increaseCount}> + </button> */}

            {<button onClick={() => setCount(count - 1)}>Decrement count -</button>}
            
        </div>
    )
}