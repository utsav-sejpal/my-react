import React, { useEffect, useRef, useState } from 'react'

export default function UseRefHookComponent(){
    const inputElement = useRef();
    const h1 = useRef();

    const focusInput = () => {
        console .log(inputElement);
        inputElement.current.focus();
        h1.current.style.color = 'green'
    };

    return(
        <>
        <h1 ref={h1}>uesRef Hook</h1>
        <input type="text" ref={inputElement} />
        <button onClick={focusInput}> Focus Input</button>
        </>
    );
}