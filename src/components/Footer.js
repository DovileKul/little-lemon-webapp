import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
              <img src="logo.svg" alt="Little Lemon Logo" className='logo' />
            <div className="footer">
                <div className='footer-section'>
                    <h3>Navigation</h3>
                    <ul>
                        <li><Link to="/reservations">Reservations</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/testimonials">Testimonials</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Contact</h3>
                    <p><strong>Address:</strong> 123 Lemon Street, <br/> Mediterranean Village,<br/>City, Country</p>
                    <p><strong>Email:</strong> <a href="mailto:info@littlelemon.com">info@littlelemon.com</a></p>
                    <p><strong>Phone:</strong> <a href="tel:+1234567890">+123 456 7890</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

