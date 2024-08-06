import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.scss'

const Nav = () => {
    return (
        <div className='nav'>
            <Link to='/' className='title'>PageTitle</Link>

            <div className="links">
                <Link to='/Blog'>Blog</Link>
                <Link to='/Products'>Products</Link>
                <Link to='/About'>About us</Link>
            </div>
        </div>

    )
}

export default Nav