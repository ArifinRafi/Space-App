import React, { useState, useEffect } from 'react';
import home from '../assets/home.jpg';

const Earth = () => {
  const [seconds, setSeconds] = useState(new Date().getSeconds());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(new Date().getSeconds());
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once after initial render

  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();

  return (
    <div>
      {hours}AM : {minutes} Minutes : {seconds} seconds
    </div>
  );
};

export default Earth;
