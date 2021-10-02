import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
            <ul>
              <Link to="/">shop</Link>
              <Link to="/ordersReview">Order Review</Link> 
              <Link to="/inventory">Manage Inventory</Link>  
          </ul>
            </nav>
        </div>
    );
};

export default Header;