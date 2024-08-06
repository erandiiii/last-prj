import React from 'react'
import { useState } from 'react'
import './User.scss'

const Popup = () => {

    const [popup, setPopup] = useState(false);
    const showPopup = () => {
        setPopup(!popup);
    }

    const closePopup = () => {
        setPopup(false);
    }
    return (
        <div className='popup'>

            {popup ? <div className="backdrop" onClick={closePopup}></div> : null}

            <button type='button' onClick={showPopup}>Show Popup</button>
            {popup ?
                <div className='card' style={{ display: popup ? 'block' : 'none' }}>
                    <h1>Popup</h1>
                    <p>Lorem Ipsom dolor sit amet...</p>
                    <p>Lorem Ipsom dolor sit amet...</p>
                    <p>Lorem Ipsom dolor sit amet...</p>
                </div> : null
            }
        </div>
    )
}

export default Popup