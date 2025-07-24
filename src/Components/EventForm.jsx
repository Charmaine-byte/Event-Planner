import React from 'react';
import './EventForm.css'; // Optional: Create this CSS file if needed

const EventForm = () => {
  return (
    <div className="event-form-container">
      <h2>Create a New Event</h2>
      <form>
        <input type="text" placeholder="Event Name" />
        <input type="date" />
        <input type="time" />
        <textarea placeholder="Event Description"></textarea>
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default EventForm;