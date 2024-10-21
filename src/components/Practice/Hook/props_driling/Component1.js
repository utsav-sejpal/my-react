import React from 'react'
import Component2 from './Component2'

export default function Component1(){
    const name = 'Test User';
    return(
        <>
        <h1> This is ONE Component</h1>
        <h1>{name}</h1>
        <Component2 name={name}/>
        </>
    )
}   