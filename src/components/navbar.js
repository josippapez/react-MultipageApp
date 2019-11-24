import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(){
    return (
        <nav className="nav-wrapper black">
            <div className="container">
                <a className="brand-logo">Name of website</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;