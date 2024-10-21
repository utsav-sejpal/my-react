import React from 'react';
import './Style.css';
import styles from './Style.module.css';
import 'bootstrap/dist/css/bootstrap.css';

export default function StyleComponent() {
    const objectStyle = {
        color: 'skyblue',
        fontFamily: 'fantasy',
        backgroundColor: 'blue',
        padding: '15px',
        margin: '15px',
        border: '5px dashed'
    }
    return (
        <div>
            <h1 style={{ color: 'black', background: 'white' }}>this is a StyleComponent</h1>
            <div className={'text'}>style form object</div>
            <div style={objectStyle}> object style</div>
            <h3 className={styles.text}>This Is Module Css</h3>
            <h2 className='text-danger'>Bootstrap Applied!</h2>


        </div>
    )

}