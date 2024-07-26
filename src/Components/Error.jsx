import React from 'react';
import './Error.css'; // Import the CSS file for styling

const Error = ({ message }) => {
  return (
    <div className="error-container">
      <div className="error-message">
        <h1>Oops!</h1>
        <p>{message || 'Something went wrong. Please try again later.'}</p>
      </div>
    </div>
  );
}

export default Error;