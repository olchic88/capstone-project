import React, { useState } from "react";
import "./App.css"; // Импортируйте CSS файл

const ReservationForm = () => {
  // State for form fields
  const [seatingOption, setSeatingOption] = useState("");
  const [comments, setComments] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [diners, setDiners] = useState(1);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert(`Reservation confirmed for ${diners} diners at ${time} on ${date}`);
  };

  return (
    <div className="form-container">
      {" "}
      {/* Apply the form container class */}
      <form onSubmit={handleSubmit}>
        {/* Seating Options */}
        <div>
          <label htmlFor="seating">Seating Options</label>
          <select
            id="seating"
            value={seatingOption}
            onChange={(e) => setSeatingOption(e.target.value)}
          >
            <option value="">Select seating</option>
            <option value="Indoor">Indoor</option>
            <option value="Outdoor">Outdoor</option>
          </select>
        </div>

        {/* Additional Comments */}
        <div>
          <label htmlFor="comments">Additional Comments</label>
          <textarea
            id="comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />
        </div>

        {/* Email for Confirmation */}
        <div>
          <label htmlFor="email">Confirmation Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Date Selection */}
        <div>
          <label htmlFor="date">Select Date</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        {/* Time Selection */}
        <div>
          <label htmlFor="time">Select Time</label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>

        {/* Number of Diners */}
        <div>
          <label htmlFor="diners">Number of Diners</label>
          <input
            type="number"
            id="diners"
            min="1"
            value={diners}
            onChange={(e) => setDiners(e.target.value)}
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit">Reserve a Table</button>
      </form>
    </div>
  );
};

export default ReservationForm;
