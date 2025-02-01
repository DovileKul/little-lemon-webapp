import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
         <footer className="footer">
                <div className="footer-logo">
                    <img src="/logo.svg" alt="Little Lemon Logo" className="logo" />
                </div>
                
                <div className="footer-section">
                    <h3>Navigation</h3>
                    <ul>
          <li><a href="#">Home</a></li> 
          <li><a href="/reservations">Reservations</a></li>
          <li><a href="#menu">Menu</a></li> 
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#about">About</a></li> 
          <li><a href="/login">Login</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Contact</h3>
                    <p><strong>Address:</strong> 123 Lemon Street, <br/> Mediterranean Village,<br/>City, Country</p>
                    <p><strong>Email:</strong> <a href="mailto:info@littlelemon.com">info@littlelemon.com</a></p>
                    <p><strong>Phone:</strong> <a href="tel:+1234567890">+123 456 7890</a></p>
                </div>
        </footer>
    );
};

export default Footer;

