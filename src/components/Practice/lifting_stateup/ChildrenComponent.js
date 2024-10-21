import React  from 'react'

export default function ChildrenComponent(props){
    const date = 'changed  date from child component !';

    return(
        <div>
        <h1>child component</h1>
        <button onClick={() => props.sendDate(date)}>send Date</button>
        </div>
    )
}