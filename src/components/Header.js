import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/Logo.svg';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/reservations';
  
  return (
    <header>
      <div className="header-content">
      <img src={logo} alt="Little Lemon Logo" className="logo" />
      <nav>
        <ul>
        <li><Link to="/">Home</Link></li>  
        {!isAuthPage && (
          <>
          <li><Link to="/reservations">Reservations</Link></li>
          <li><a href="#menu">Menu</a></li> 
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#about">About</a></li> 
          <li><Link to="/login">Login</Link></li>
          </>
        )}
        </ul>
      </nav>
      </div>
    </header>
  );
};

export default Header;
