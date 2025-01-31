import React from 'react';
import BookingForm from '../components/BookingForm';
import './Reservations.css';

const Reservations = () => {
  const availableTimes = ["12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM"];

  const updateTimes = (selectedDate) => {
    console.log(`Updating times for ${selectedDate}`);
  };

  return (
    <div className="reservations-page">
      <h2 className="reservations-title">Make a Reservation</h2>
      <div className="reservations-container">
        <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />
      </div>
    </div>
  );
};

export default Reservations;
