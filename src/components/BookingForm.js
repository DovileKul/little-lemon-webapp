import React, { useState } from 'react';

// Simulate fetchAPI function (you can adjust this as needed)
const fetchAPI = async (selectedDate) => {
  // Return some mock available times
  return ['6:00 PM', '7:00 PM', '8:00 PM'];
};

const BookingForm = ({ availableTimes, updateTimes }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');

  const isFormValid = date && time && guests > 0;

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    
    fetchAPI(selectedDate).then((times) => {
      updateTimes(times); // Update available times based on the selected date
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) {
      alert('Please fill out all fields correctly');
      return;
    }
    console.log({ date, time, guests, occasion });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date:</label>
      <input 
        type="date" 
        id="res-date" 
        value={date} 
        onChange={handleDateChange} 
        required 
        aria-label="Select Reservation Date"
      />

      <label htmlFor="res-time">Choose time:</label>
      <select 
        id="res-time" 
        value={time} 
        onChange={(e) => setTime(e.target.value)} 
        required 
        aria-label="Select Reservation Time"
      >
        <option value="">Select Time</option>
        {availableTimes.map((time) => (
          <option key={time} value={time}>{time}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests:</label>
      <input 
        type="number" 
        id="guests" 
        value={guests} 
        onChange={(e) => setGuests(e.target.value)} 
        min="1" 
        required 
        aria-label="Enter the Number of Guests"
      />

      <label htmlFor="occasion">Occasion:</label>
      <select 
        id="occasion" 
        value={occasion} 
        onChange={(e) => setOccasion(e.target.value)} 
        aria-label="Select Occasion"
      >
        <option value="">Select Occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <button 
        type="submit" 
        disabled={!isFormValid} 
        aria-label="Submit Reservation"
      >
        Submit Reservation
      </button>
    </form>
  );
};

export default BookingForm;
