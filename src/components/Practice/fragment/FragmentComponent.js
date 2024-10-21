import React, { Fragment } from 'react'
import './FragmentComponent.css'


export default function FragmentComponent() {
    let items = ['Name', 'Gender', 'Address', 'Number']

    return (
        <table>
            {items.map((value, index) =>
                <Fragment key={index}>
                    <span className='fragment-item'>{value}</span>
                </Fragment>

            )}
        </table>
    )
}