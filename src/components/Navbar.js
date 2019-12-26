import React from 'react';
import logo from '../images/brand-logo.png';
import { Link } from 'react-router-dom';
import '../styles/Navbar.scss';
import cart from '../images/iconcart.png';

 const Navbar = ()=>{
    return(
            <nav className="nav-wrapper">
                <div className="app-header">
                    <Link to="/">
                        <div>
                            <img src={logo} className="brand-logo" alt="logo" />
                            <p> Nerd Bookstore </p>
                        </div>
                    </Link>
                    
                    <div className="right">
                        <div><Link to="/cart"><img src={cart} className="cart-icon" alt="cart" /></Link></div>
                    </div>
                </div>
            </nav>
   
        
    )
}

export default Navbar;