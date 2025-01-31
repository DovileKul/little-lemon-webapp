import React from 'react';
import aboutImage1 from '../assets/about-1.jpg';
import aboutImage2 from '../assets/about-2.jpg';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <section id="about" className="about-page">
       <div className="about-content">
       <div className="about-text">
      <h2>About Little Lemon</h2>
      <p>
        At Little Lemon, we celebrate Mediterranean flavors with fresh, locally-sourced ingredients in every dish. 
        Our warm, family-friendly atmosphere is perfect for casual meals or special occasions.
      </p>
      </div>
      <div className="about-images">
        <img src={aboutImage1} alt="About image 1" className="about-img" />
        <img src={aboutImage2} alt="About image 2" className="about-img" />
      </div>
      </div>
    </section>
  );
};

export default AboutPage;
