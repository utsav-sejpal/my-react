import React from 'react';

export default function ChildComponent({ increment }) {
    console.log('ChildComponent rendered');
  return (
    <div>
        <h2>Child Component</h2>
        <button onClick={increment}>Increment from child</button>
      
    </div>
  );
}
