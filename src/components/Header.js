import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
  return (
    <header>
      <div className="header-content">
      <img src="logo.svg" alt="Little Lemon Logo" className='logo' />
      <nav>
        <ul>
          <li><a href="#">Home</a></li> 
          <li><a href="/reservations">Reservations</a></li>
          <li><a href="#menu">Menu</a></li> 
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#about">About</a></li> 
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>
      </div>
    </header>
  );
};

export default Header;
