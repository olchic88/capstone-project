import React, { useState } from "react";
import "./App.css";

const ReservationForm = ({ availableTimes, updateTimes }) => {
  const [seatingOption, setSeatingOption] = useState("");
  const [occasion, setOccasion] = useState("");
  const [comments, setComments] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [diners, setDiners] = useState(1);

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    updateTimes(newDate); // Обновляем доступное время на основе выбранной даты
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Reservation confirmed for ${diners} diners at ${time} on ${date}. Occasion: ${occasion}`
    );
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
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

        <div>
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          >
            <option value="">Select occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="comments">Additional Comments</label>
          <textarea
            id="comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />
        </div>

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

        <div>
          <label htmlFor="date">Select Date</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={handleDateChange}
            required
          />
        </div>

        <div>
          <label htmlFor="time">Select Time</label>
          <select
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          >
            <option value="">Select time</option>
            {availableTimes.map((availableTime) => (
              <option key={availableTime} value={availableTime}>
                {availableTime}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="diners">Number of Diners</label>
          <input
            type="number"
            id="diners"
            min="1"
            value={diners}
            onChange={(e) => setDiners(Number(e.target.value))}
            required
          />
        </div>

        <button type="submit">Reserve a Table</button>
      </form>
    </div>
  );
};

export default ReservationForm;
