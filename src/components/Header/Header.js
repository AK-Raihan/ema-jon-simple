import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className="img">
            <img className='logo' src={logo} alt="" />
            </div>
            <div className="menu">
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/review">Order Review</NavLink>
            <NavLink to="/inventory"> Manage Inventory here</NavLink>
            </div>
        </div>
    );
};

export default Header;