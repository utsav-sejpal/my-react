import React,{ useState, useMemo }from 'react';

export default function useMemoComponent(){
    const [count, setCount] = useState(0);
    const [value, setName] = useState(10);

    const expensiveResult = useMemo(() => {
        console.log('Calculating...');

        return value * 2;
    }, [value]);

    return(
        <div>
            <h1>Expensive Calculation Component</h1>
            <p> count: {count}</p>
            <p>Expensive Calculation Result: {expensiveResult}</p>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <button onClick={() => setCount (value + 1)}>Change Value</button>

        </div>
    );

}