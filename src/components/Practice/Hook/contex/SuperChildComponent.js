import React, {useContext} from 'react'
import { UserContext} from './ParentComponent';

export default function SuperChildComponent(){
    const user = useContext(UserContext);
    return(
        <>
        <h1> {`Super Child ${user}!`}</h1>
        </>
    )
}   