import React from 'react';
// import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <section className="cta">
        <h1>Little Lemon</h1>
        <p>
          Experience unforgettable dining at Little Lemon! Reserve your table today and savor our delicious
          Mediterranean-inspired dishes made with fresh, locally-sourced ingredients.
        </p>
        <button onClick={() => window.location.href = '/booking'}>Reserve a Table</button>
      </section>
    </div>
  );
};

export default HomePage;
