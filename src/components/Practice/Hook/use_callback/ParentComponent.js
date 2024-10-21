import React, { useState, useCallback } from 'react';
import ChildComponent from './ChildComponent.js';

export default function ParentComponent(){
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    }, []);


    return(
        <div>
            <h1>Parent Component</h1>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <ChildComponent increment={increment} />
        </div>
    );
}