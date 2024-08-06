import React from 'react'
import './Footer.scss'
import { FooterData } from './Data'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="footer">
            {FooterData.map((props) => {
                <div className="col">
                    <h6>{props.category}</h6>
                    <div className="links">


                        {props.links.map((l) => {
                            return (
                                <Link key={l.to} to={l.to}>{l.link}</Link>
                            );
                        })}
                    </div>
                </div>
            })}
        </div>
    )
}

export default Footer