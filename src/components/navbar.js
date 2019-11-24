import React from 'react';

function Navbar(){
    return (
        <nav className="nav-wrapper black">
            <div className="container">
                <a className="brand-logo">Name of website</a>
                <ul className="right">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;