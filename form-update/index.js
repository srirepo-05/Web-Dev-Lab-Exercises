import React, { useState } from 'react';
import './App.css'; // Import the CSS file for styling
function RealTimeForm() {
  // State to keep track of form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  return (
    <div className="form-container">
      <h2 className="form-heading">Real-Time Form</h2>
      <form className="form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="input-field"
          />
          {formData.name && (
            <div className="dropdown-preview">
              <strong>Live Preview:</strong> {formData.name}
            </div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="input-field"
          />
          {formData.email && (
            <div className="dropdown-preview">
              <strong>Live Preview:</strong> {formData.email}
            </div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            className="input-field"
          ></textarea>
          {formData.message && (
            <div className="dropdown-preview">
              <strong>Live Preview:</strong> {formData.message}
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
export default RealTimeForm;
