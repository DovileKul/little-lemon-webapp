import React from 'react';
import BookingForm from '../components/BookingForm';

const Reservations = () => {
  const availableTimes = ["12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM"];

  const updateTimes = (selectedDate) => {
    console.log(`Updating times for ${selectedDate}`);
  };

  return (
    <div>
      <h2>Make a Reservation</h2>
      <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />
    </div>
  );
};

export default Reservations;
