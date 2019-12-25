import React from 'react';
import logo from '../images/brand-logo.png';
import { Link } from 'react-router-dom';
import '../styles/Navbar.scss';

 const Navbar = ()=>{
    return(
            <nav className="nav-wrapper">
                <div className="app-header">
                    <Link to="/">
                        <img src={logo} className="brand-logo" alt="logo" />
                        <p> Nerd Bookstore </p>
                    </Link>
                    
                    <ul className="right">
                        <li><Link to="/cart">My cart</Link></li>
                        <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
                    </ul>
                </div>
            </nav>
   
        
    )
}

export default Navbar;