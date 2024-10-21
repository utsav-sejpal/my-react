import React from "react";
import { useState } from "react";  

function App(){

    const [color,setColor] = useState('red')

    const changeColor = () => {setColor('Blue')}
    

    // const counter = useState(0);
    // console.log(counter);

    // let color = "red";
    // const changeColor = () =>{
    //     color = "blue";
    //     console.log(color);
    // }
    return(
        <>
        <h3>My favorites color is {color} ! </h3>
        <button onClick={changeColor}>Blue</button>
        </>
    )
}

export default App