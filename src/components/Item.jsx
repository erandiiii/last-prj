import React from 'react'

const Item = (props) => {
    return (
        <div className='item'>
            <h6>{props.title}</h6>
            <p>{props.description}</p>
        </div>
    )
}

export default Item