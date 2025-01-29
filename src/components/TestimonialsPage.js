import React from 'react';

const TestimonialsPage = () => {
  const reviews = [
    { name: "James R.", text: "Little Lemon offers such a cozy atmosphere with exceptional service." },
    { name: "Sophia M.", text: "This place is a hidden gem! The Mediterranean flavors are so authentic." },
    { name: "Michael T.", text: "Highly recommend it for family dinners! The Spaghetti Pomodoro is divine." },
  ];

  return (
    <section id="testimonials" className="testimonials-page">
      <h2>What Customers Say</h2>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <p>"{review.text}"</p>
            <p>- {review.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TestimonialsPage;
