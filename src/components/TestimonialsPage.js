import React from 'react';
import James from '../assets/James.jpg';
import Sophia from '../assets/Sophia.jpg';
import Michael from '../assets/Michael.jpg';
import './TestimonialsPage.css';

const TestimonialsPage = () => {
  const reviews = [
    { name: "James R.", text: "Little Lemon offers such a cozy atmosphere with exceptional service." , image: James },
    { name: "Sophia M.", text: "This place is a hidden gem! The Mediterranean flavors are so authentic.", image: Sophia },
    { name: "Michael T.", text: "Highly recommend it for family dinners! The Spaghetti Pomodoro is divine.", image: Michael},
  ];

  return (
    <section className="testimonials-page">
      <h2>Your Words, Our Pride</h2>
      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div key={index} className='review-item'>
            <img src={review.image} alt={`${review.name}`} className="review-image" />
            <div className="review-content">
              <p className="review-text">"{review.text}"</p>
              <p className="review-name">- {review.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsPage;
