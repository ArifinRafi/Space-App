import React, { useState } from 'react';
import moon from '../css/Ball.css';

const Ball = () => {
  const [isDropped, setIsDropped] = useState(false);

  const handleDrop = () => {
    setIsDropped(true);
  };

  return (
    <div className={`ball ${isDropped ? 'dropped' : ''}`}>
      <button onClick={handleDrop}>Drop</button>
    </div>
  );
};

export default Ball;
