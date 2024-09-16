import React, { useReducer } from "react";
import ReservationForm from "./ReservationForm";
import "./App.css";

// Reducer function
const timesReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      // For now, return the same times regardless of date
      // Implement actual logic to adjust available times here
      return state; // Example logic should be implemented
    default:
      return state;
  }
};

// Function to initialize times
const initializeTimes = () => {
  // Set initial available times here
  return ["12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM"];
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(
    timesReducer,
    [],
    initializeTimes
  );

  const updateTimes = (date) => {
    dispatch({ type: "UPDATE_TIMES", date });
  };

  return (
    <main className="header-container">
      <h2>Reserve a Table</h2>
      <ReservationForm
        availableTimes={availableTimes}
        updateTimes={updateTimes}
      />
    </main>
  );
};

export default Main;
