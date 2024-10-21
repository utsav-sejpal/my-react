import React, { useState} from "react";
import ChildrenComponent from './ChildrenComponent.js'

export default function ParentComponent(){
    const [date, setDate] = useState('parent component date.');
    const getDate = (date) => {
        console.log(date);
    }
    return(
        <div>
            <h1> Lifting State UP</h1>
            <h3>{date}</h3>
            <ChildrenComponent sendDate = {getDate} />
        </div>
    )
}