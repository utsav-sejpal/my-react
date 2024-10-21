import React from 'react'

export default function ListAndKeysComponent(){
    let items =['Krishna','Balarama','Shyamsundar','Bhagavad Gita']
    return(
        <div>
            <ul>
                {items.map((value, index) =>
                <li key={index}>{value}</li>
                )}
            </ul>
        </div>
    )
}