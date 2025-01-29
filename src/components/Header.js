import React from 'react';
import { Link } from 'react-router-dom';
// import './Header.css';

const Header = () => {
  return (
    <header>
      <img src="top_logo" alt="Little Lemon Logo" className='logo' />
      <nav>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/reservations">Reservations</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/testimonials">Testimonials</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
