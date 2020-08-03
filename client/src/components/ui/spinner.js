import React from 'react'
import spinner from '../../img/spinner.gif'

export default function Spinner() {
    return (
        <div>
            <img
                id="imageSpinner"
                src={spinner} 
                alt='Loading...'
                style={{ width: '200px', margin: 'auto', display: 'block' }}
            />
        </div>
    )
}
