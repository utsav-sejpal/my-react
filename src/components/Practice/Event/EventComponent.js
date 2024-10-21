import React from "react";

const handelClick = () => console.log('clicked');
// const handelClickWithParam = (param) => console.log(param);

export default function EventComponent(){
    return(
       <div>
        <h2>EVENT</h2>
        <button onClick={handelClick}>Click</button> <br />
        <button onClick={() => alert('clicked!')}>Alert</button><br />
        <button onClick={() => console.log('clicked with param')}>Click with param</button><br />
        <button onMouseEnter={(event) => console.log(event)}>Event</button><br />
        <button onMouseEnter={() => console.log('mouse hover effect')}>Mouse Hover</button>
        </div>
    )
}