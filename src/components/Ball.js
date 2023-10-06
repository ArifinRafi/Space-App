import React, { useState } from 'react';
import '../css/Ball.css';

const BallButton = () => {
  const [isDropped, setIsDropped] = useState(false);

  const handleDrop = () => {
    setIsDropped(true);
  };

  const handleTryAgain = () => {
    setIsDropped(false); // Reset the ball to its initial state
  };

  return (
    <div className="ball-button-container">
      <div
        className={`ball ${isDropped ? 'dropped' : ''}`}
        onClick={handleDrop}
      ></div>
      <button className="fall-button" onClick={handleDrop}>
        Fall
      </button>
      <button className="try-again-button" onClick={handleTryAgain}>
        Try Again
      </button>
    </div>
  );
};

export default BallButton;
