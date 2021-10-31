import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <Link to="/">
        <div className="footer">
        Add a Book
        <svg width="106" height="106" viewBox="0 0 106 106" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M53 0C23.744 0 0 23.744 0 53C0 82.256 23.744 106 53 106C82.256 106 106 82.256 106 53C106 23.744 82.256 0 53 0ZM79.5 58.3H58.3V79.5H47.7V58.3H26.5V47.7H47.7V26.5H58.3V47.7H79.5V58.3Z" fill="#13FD46"/>
        </svg>
        </div>
        </Link>
    )
}

export default Footer
