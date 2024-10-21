import { useState } from 'react';

function useCounter(initialValue = 0, increaseCount = 1, decreaseCount = 1) {
    const [count, setCount] = useState(initialValue);

    const increment = () => {
        setCount(count + increaseCount);
    };

    const decrement = () => {
        setCount(count - decreaseCount);
    };

    return { count, increment, decrement };
}

export default useCounter;