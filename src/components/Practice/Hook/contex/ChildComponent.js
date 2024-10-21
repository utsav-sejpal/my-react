import React, { useContext }from 'react'
import { UserContext } from './ParentComponent'
import SuperChildComponent from './SuperChildComponent'

export default function ChildComponent() {
    const user = useContext(UserContext);
    return(
        <>
        <h1>{`Child ${user}!`}</h1>
        <SuperChildComponent/>
        </>
    )
}