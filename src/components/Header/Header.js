import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className="img">
            <img className='logo' src={logo} alt="" />
            </div>
            <div className="menu">
            <a href="/shop">Shop</a>
            <a href="/order">Order Review</a>
            <a href="/inventor"> Manage Inventory here</a>
            </div>
        </div>
    );
};

export default Header;