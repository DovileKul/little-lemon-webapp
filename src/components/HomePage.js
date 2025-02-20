import React from 'react';
import headerImage1 from '../assets/header-1.jpg';
import headerImage2 from '../assets/header-2.jpg';
import Menu from './Menu';
import TestimonialsPage from './TestimonialsPage';
import AboutPage from './AboutPage';
import Reservations from './Reservations';
import './HomePage.css';


const HomePage = () => {
  return (
    <div className="homepage">
      <section className="cta">
        <div className="cta-content">
        <h1>Little Lemon</h1>
        <p>
        Experience unforgettable dining at Little Lemon! 
        Reserve your table today and savor our delicious Mediterranean-inspired 
        dishes made with fresh, locally-sourced ingredients. 
        Whether it's a family gathering or a casual meal, book now for a cozy, 
        welcoming atmosphere that’s perfect for any occasion.
        </p>
        <button onClick={() => window.location.href = '/reservations'}>Reserve a Table</button>
        </div>
        <div className='header-images'>
        <img src={headerImage1} alt="Header image 1" className="header-img" />
        <img src={headerImage2} alt="Header image 2" className="header-img" />
      </div>
      </section>


     <section id="menu">
      <Menu />
      </section>

     <section id="testimonials">
      <TestimonialsPage />
      </section>

     <section id="about">
      <AboutPage />
      </section>
    </div>
  );
};

export default HomePage;
