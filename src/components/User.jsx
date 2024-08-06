import React from 'react'
import { data } from './Data'
import './User.scss'
import Item from './Item'

const User = () => {
    return (
        <div className='user'>
            {data.map((d, i) => {
                return (
                    <Item key={i} {...d} />
                )
            })}
        </div>

    )
}

export default User