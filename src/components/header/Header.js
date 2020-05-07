import React from 'react';
import Navbar from '../Navbar';
import './header.css';

const Header = () => {
    return ( <header className="header-grid-container">
        <div className="header-gutter_left"></div>
        <div className="header-logo">Studio42Dev</div>
        <div className="header-navbar"><Navbar /></div>
        <div className="header-gutter_right"></div>
    </header> );
}
 
export default Header;