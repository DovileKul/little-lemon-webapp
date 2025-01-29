import React, { useReducer } from 'react';
import BookingForm from './BookingForm';

const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00"]; 
};

const updateTimes = (state, action) => {
  if (action.type === "UPDATE_TIMES") {
    return initializeTimes(); 
  }
  return state;
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <div>
      <h1>Book a Table</h1>
      <BookingForm availableTimes={availableTimes} updateTimes={(date) => dispatch({ type: "UPDATE_TIMES", date })} />
    </div>
  );
};

export default Main;
export { initializeTimes, updateTimes };

